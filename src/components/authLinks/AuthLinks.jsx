'use client'

import React, { useState } from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'

const AuthLinks = () => {
    const status  ='notauthenticated'

    const [open, setOpen] = useState(false)
  return (




    <>
    {status === 'notauthenticated' ? (
        <Link href='/login'>Login</Link>
    ) : (
        <>
        <Link href='/write'>Write</Link>
        <span className={styles.link}>Logout</span>
        </>
    )}

    <div className={styles.burger}>
<div className={styles.line}></div>
<div className={styles.line}></div>
<div className={styles.line}></div>
    </div>
    </>
  )
}

export default AuthLinks