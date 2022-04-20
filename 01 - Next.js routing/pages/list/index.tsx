import React from "react";
import Link from "next/link";
import { router } from "next/client";

const List = (props): JSX.Element => {
  const clients = [
    {
      id: "1",
      name: "Alex",
    },
    {
      id: "2",
      name: "Mike",
    },
  ];

  const handleClick = () => {
    router.push("list/element2/id2");
  };

  return (
    <div>
      <h1>List page</h1>
      <button onClick={handleClick}>Button</button>
      <br />
      <Link
        href={{
          pathname: "list/[element]/[id]",
          query: { element: "element1", id: "id1" },
        }}
      >
        Link
      </Link>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/list/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
;

export default List;
