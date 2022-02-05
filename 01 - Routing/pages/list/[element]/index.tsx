import React from 'react';
import {useRouter} from "next/router";

const ElementPage = (props) => {
  const router = useRouter();
  const element = router.query.element;

  return (
    <div>
      <h1>Element index page</h1>
      <p>{element}</p>
    </div>
  );
};

export default ElementPage;
