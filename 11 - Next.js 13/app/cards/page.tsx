import React from 'react';
import PocketBase from 'pocketbase'
import Card from './card';
import styles from './Cards.module.css';

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs'

async function getCards() {
  const pb = new PocketBase('http://127.0.0.1:8090');
  const data = await pb.collection('cards').getList(1, 50);

  return data?.items as any[];
}

const Page = async () => {
  const cards = await getCards();

  return (
    <div>
      <h1>Cards</h1>
      <div className={styles.grid}>
        {cards?.map((card) => <Card key={card.id} card={card}/>)}
      </div>
    </div>
  );
}

export default Page;
