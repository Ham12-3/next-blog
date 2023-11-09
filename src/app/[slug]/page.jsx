import React from 'react'

import styles from './singlePage.module.css'
import Menu from '@/components/Menu/Menu'
import Image from 'next/image'


const SinglePage = () => {
  return (
    <div className={styles.container}> 
    <div className={styles.infoContainer}>
        <div className={styles.textContainer}></div>
        <div className={styles.imageContainer}>
            <Image src='' alt='' fill className={styles.image} />
        </div>
    </div>
    <div className={styles.content}>
        <div className={styles.post}>

        </div>
        <Menu/>
    </div>
    </div>
  )
}

export default SinglePage