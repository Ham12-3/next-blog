import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {" "}
        <b>Hey, I am Abdulhamid Sonaike!</b> Discover my stories and creative
        ideas
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill  className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Exploring the World, One Word at a Time: Welcome to Anglaar Blog
          </h1>
          <p className={styles.postDesc}>
            Anglaar Blog is your gateway to a world of diverse and captivating
            content. Explore the latest travel adventures, discover lifestyle
            and culture insights, savor culinary delights, and embark on health
            and wellness journeys. Our blog covers technology and gadget
            reviews, home decor and interior design ideas, personal growth and
            development tips, and fashion trends and styling inspiration.{" "}
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
