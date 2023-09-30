import React, { FC } from 'react';
import Image from 'next/image';
import styles from '@/styles/components/sidebarHeader.module.scss'
import Cancel from '../.././../public/images/cancel.svg'

interface SidebarHeaderProps {
  onClose: () => void;
}

export const SidebarHeader: FC<SidebarHeaderProps> = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className={styles.headerfilt}>
      <span>ფილტრი</span>
      <div className={styles.closeContainer}>
        <Image
          src={Cancel}
          width={22}
          height={22}
          alt="CloseButton, დახურვა"
          className={styles.close}
          onClick={handleClose}
        />
      </div>

    </div>
  );
};