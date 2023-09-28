import React, { FC, useState } from 'react';
import Image from 'next/image';
import styles from '../sidebarHeader/sidebarHeader.module.scss'
import Cancel from '../.././../public/images/cancel.svg'

interface SidebarHeaderProps {
    onClose: () => void;
  }

  export const SidebarHeader: FC<SidebarHeaderProps> = ({ onClose }) => {
    return (
      <div className={styles.headerfilt}>
        <span>ფილტრი</span>
        <Image
          src={Cancel}
          width={22}
          height={22}
          alt={"close"}
          className={styles.close}
          onClick={onClose} // Attach the passed down function here
        />
      </div>
    );
  };
