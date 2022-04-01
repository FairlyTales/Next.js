import React, { useEffect, useState } from "react";
import useSWR from "swr";

//! for this page we are using client side data fetching with static generation to
//! pre-render a page with some data, and then re-fetch it from client-side if needed

const ClientSideFetching = ({ initialData }) => {
  const [text, setText] = useState(initialData);

  //	client-side fetching
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts/2",
    fetcher
  );

  useEffect(() => console.log(text), [text]);

  useEffect(() => {
    // setTimeout used for demonstration, just to make the "Loading..." message stay on the screen for a bit
    setTimeout(() => {
      data && setText(data.title);
    }, 3000);
  }, [data]);

  if (error) return <h1>No data :(</h1>;

  if (!text) return <h1>Loading...</h1>;

  return <h1>{text}</h1>;
};

export const getStaticProps = async () => {
  return fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((res) => {
      return {
        props: {
          initialData: res.title,
        },
      };
    });
};

export default ClientSideFetching;
