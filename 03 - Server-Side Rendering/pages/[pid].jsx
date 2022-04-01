import React from "react";
import path from "path";
import fs from "fs/promises";

//! for this dynamic page we are using partial static generation

const ProductDetailPage = ({ product }) => {
  // show "Loading..." if the product data isn't currently present
  // if the page isn't generated beforehand this JSX will be shown while the fetchProductData() is
  // executed, and after it's done and our component receives a product object the component will be
  // rerendered with all necessary data present
  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{product.title}</h1>
      <h4>{product.description}</h4>
    </>
  );
};

const fetchProductData = async () => {
  const dataPath = path.join(process.cwd(), "data", "mock-backend.json");
  const jsonData = await fs.readFile(dataPath);
  return JSON.parse(jsonData);
};

// next.js function to statically generate a page
export const getStaticProps = async (context) => {
  const { params } = context;
  const productId = params.pid;

  const products = await fetchProductData();
  const product = products.find((product) => product.id === productId);

  // show 404 page in case product with entered id wasn't loaded
  if (!product) return { notFound: true };

  return {
    props: {
      product,
    },
  };
};

// next.js function to statically generate a dynamic pages
export const getStaticPaths = async () => {
  const products = await fetchProductData();
  const paths = products
    .filter((product) => product.id !== "id3") // we do this to statically generate 2 pages out of 3 in order to show how the fallback system works
    .map((product) => ({ params: { pid: product.id } }));

  return {
    paths,
    // enable "try to load a page with needed date", in this case when user try to go to page 3 which
    // wasn't generated beforehand we won't show him a default 404 page but upload a page component
    // which in this case must have a fallback JSX
    fallback: true,
  };
};

export default ProductDetailPage;
