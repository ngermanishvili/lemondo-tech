import React from 'react';
import Image from 'next/image';
import styles from '@/styles/components/DomainError.module.scss';
import GroupImage from '../../../public/images/Group 5264.svg'

const DomainError = () => {
  return (
    <div className={styles.container}>
      <div className={styles['image-container']}>
        <Image src={GroupImage} width={195} height={168} alt="Something Went Wrong" />
      </div>
      <div className={styles['text-container']}>
        <h2>დომეინი ვერ მოიძებნა</h2>
        <p>მითითებული პარამეტრებით დომენების მარკეტში შედეგები ვერ მოიძებნა, შეცვალეთ ძიების პარამეტრები და ცადეთ თავიდან</p>
      </div>
    </div>
  );
};

export default DomainError;

//