import React from "react";
import Image from "next/image";
import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import LogisticsItem from "./logistics-item";
import classes from "./event-logistics.module.css";

function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address.replace(", ", "\n");

	// it's a dummy loader, in real app this loader will actually do some optimization
	// and it will probably set up in next.config.js to make adjustment global
  const loader = () => image;
	console.log(image)

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image
          loader={loader}
          src={image}
          alt={imageAlt}
          width={400}
          height={400}
        />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
