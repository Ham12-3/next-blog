import React from 'react'

const MenuPosts = ({withImage}) => {
  return (
    <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
           
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

  )
}

export default MenuPosts