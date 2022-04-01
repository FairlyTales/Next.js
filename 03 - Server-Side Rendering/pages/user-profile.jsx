import React from "react";

//! for this page we are using server side rendering

const UserProfile = (props) => {
  return <h1>{props.user}</h1>;
};

// next.js function to server-side render a page
export const getServerSideProps = async (context) => {
  const { req, res } = context;
  console.log(req);
  console.log(res);

  return {
    props: {
      user: "lol",
    },
  };
};

export default UserProfile;
