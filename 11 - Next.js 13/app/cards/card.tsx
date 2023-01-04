import Link from "next/link";
import styles from "./Cards.module.css";
import React from "react";

const Card = ({ card }: any) => {
  const { id, title, content, created } = card || {};

  return (
    <Link href={`/cards/${id}`}>
      <div className={styles.card}>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </Link>
  );
}

export default Card;
