import React from "react";
import { JSX } from "@babel/types";
import Link from 'next/link'

const HomePage = (props): JSX.Element => {
  return (
    <div>
      <h1>Main page</h1>
      <ul>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/list">
            List
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
