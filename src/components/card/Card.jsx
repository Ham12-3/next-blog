import React from "react";

import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023</span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href='/'>
        <h1>Lifestyle and Culture Insights</h1>
        </Link>
       
        <p>
          You can also find fitness and exercise suggestions, pet care and
          heartwarming animal stories, gaming and hobbies, science and nature
          discoveries, and travel photography alongside financial planning and
          money management advice.
        </p>

<Link href='/'>Read More</Link>

      </div>
    </div>
  );
};

export default Card;
