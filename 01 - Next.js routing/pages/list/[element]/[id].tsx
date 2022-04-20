import React from "react";
import { useRouter } from "next/router";

const ListElement = (props): JSX.Element => {
  const router = useRouter();
  const { id, element } = router.query;

  return (
    <div>
      <h1>List element page</h1>
      <p>id: {id}</p>
      <p>element: {element}</p>
    </div>
  );
};

export default ListElement;
