import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Halo.jpg"
          alt="An image showing something"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm a NextJS Blog!</h1>
      <p>
        I blog about web Static Site Generation and Server-Side Rendering.
      </p>
    </section>
  );
};

export default Hero;
