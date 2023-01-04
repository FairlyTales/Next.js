import React from 'react';
import Card from './card';
import styles from './Cards.module.css';

async function getCards() {
  const res = await fetch(
    'http://127.0.0.1:8090/api/collections/cards/records?page=1&perPage=30',
    {cache: 'no-store'}
  );
  const data = await res.json();

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
