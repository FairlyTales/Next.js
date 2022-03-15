import React from "react";

function HomePage() {
	const a = [
		1,
		2,
		3,
	]
  return (
    <ul>
      <li>{a[0]}</li>
      <li>{a[1]}</li>
      <li>{a[2]}</li>
    </ul>
  );
}

export default HomePage;
