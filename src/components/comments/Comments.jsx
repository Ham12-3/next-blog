
'use client' 

import React from "react";
import Link from "next/link";

import styles from "./comments.module.css";
import Image from "next/image";

import useSWR from "swr";
import { useSession } from "next-auth/react";

const Comments = ({postSlug}) => {
  const status =useSession()

  const {data, isLoading} = useSWR(`http://localhost:3000/api/comments?.postSlug=${postSlug}`)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="write a comment.." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            At Anglaar, we are dedicated to providing top-notch services that
            cater to your diverse needs. Whether you are seeking cutting-edge
            solutions in marketing, design, or strategic planning, our team of
            professionals is committed to delivering results that surpass
            expectations.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
