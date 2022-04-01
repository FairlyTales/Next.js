import React from "react";
import fs from "fs/promises";
import path from "path";
import Link from "next/link";

//! for this page we are using static generation with backend logic

const HomePage = (props) => {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
};

// next.js function to statically generate a page
export const getStaticProps = async () => {
  let products;
  const dataPath = path.join(process.cwd(), "data", "mock-backend.json");

  try {
    const jsonData = await fs.readFile(dataPath);
    products = JSON.parse(jsonData);
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products,
    },
    revalidate: 10,
  };
};

export default HomePage;
