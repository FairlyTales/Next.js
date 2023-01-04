import React from 'react';
import styles from '../Cards.module.css';
import PocketBase from "pocketbase";

export const revalidate = 10;

const getCard = async (cardId: string) => {
  const pb = new PocketBase('http://127.0.0.1:8090');

  return await pb.collection('cards').getOne(cardId);
}


const Page = async ({ params }: any) => {
  const card = await getCard(params.id);

  return (
    <div>
      <h1>{card.title}</h1>
      <div className={styles.card}>
        <h5>{card.content}</h5>
        <p>{card.created}</p>
      </div>
    </div>
  )
};

export default Page;
