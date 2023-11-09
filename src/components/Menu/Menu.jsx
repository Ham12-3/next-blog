import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What's hot</h2>
      <h1 className={styles.title}>Most Popular</h1>
    

      <h2 className={styles.subtitle}>Dsicover by topic</h2>
      <h1 className={styles.title}>Categories</h1>


      <div className={styles.categoryList}>
<Link href='/blog?cat=style' className={`${styles.categoryItem} ${styles.style}`}>Styles</Link>
      </div>
      <div className={styles.categoryList}>
<Link href='/blog?cat=style' className={`${styles.categoryItem} ${styles.fashion}`}>Fashion</Link>
      </div>
      <div className={styles.categoryList}>
<Link href='/blog?cat=style' className={`${styles.categoryItem} ${styles.coding}`}>Coding</Link>
      </div>
      <div className={styles.categoryList}>
<Link href='/blog?cat=style' className={`${styles.categoryItem} ${styles.travel}`}>Travel</Link>
      </div>
      <div className={styles.categoryList}>
<Link href='/blog?cat=style' className={`${styles.categoryItem} ${styles.culture}`}>Culture</Link>
      </div>
      <div className={styles.categoryList}>
<Link href='/blog?cat=style' className={`${styles.categoryItem} ${styles.food}`}>Food</Link>
      </div>
      


      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/travel.png" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              Our blog provides a wealth of educational insights and tips
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Abdul Sonaike</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/fashion.png" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.postTitle}>
              Our blog provides a wealth of educational insights and tips
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Abdul Sonaike</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/culture.png" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3 className={styles.postTitle}>
              Our blog provides a wealth of educational insights and tips
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Abdul Sonaike</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </Link>


        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/food.png" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>
              Food
            </span>
            <h3 className={styles.postTitle}>
              Our blog provides a wealth of educational insights and tips
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Abdul Sonaike</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </Link>


        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/style.png" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.style}`}>
              Style
            </span>
            <h3 className={styles.postTitle}>
              Our blog provides a wealth of educational insights and tips
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Abdul Sonaike</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/coding.png" alt="" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.coding}`}>
              Coding
            </span>
            <h3 className={styles.postTitle}>
              Our blog provides a wealth of educational insights and tips
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Abdul Sonaike</span>
              <span className={styles.date}> - 10.03.2023</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
