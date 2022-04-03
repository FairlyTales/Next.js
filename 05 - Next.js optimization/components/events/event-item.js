import Link from "next/link";
import Image from "next/image";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import classes from "./event-item.module.css";

function EventItem(props) {
  const { title, image, date, location, id } = props;
	console.log(image)

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

	// it's a dummy loader, in real app this loader will actually do some optimization
	// and it will probably set up in next.config.js to make adjustment global
  const loader = () => image;

  return (
    <li className={classes.item}>
      <Link href={exploreLink}>
        <a>
          <Image
            loader={loader}
            src={image}
            alt={title}
            width={250}
            height={160}
          />
        </a>
      </Link>
      <div className={classes.content}>
        <div className={classes.summary}>
          <Link href={exploreLink}>
            <h2 className={classes.itemLink}>{title}</h2>
          </Link>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
