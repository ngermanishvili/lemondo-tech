import React from 'react';
import styles from '@/styles/components/DomZone.module.scss';



interface DomzoneProps {
  selectedDomzones: string[];
  onDomzoneChange: (domzone: string) => void;
}

const Domzone: React.FC<DomzoneProps> = ({ selectedDomzones, onDomzoneChange }) => {
  const domzoneItems = ['.ge', '.com', '.org', '.net'];
  return (
    <div className={styles.domzone}>
      <h4>კატეგორიები</h4>
      <div className={styles['domzone-list']}>
        {domzoneItems.map((item, index) => (
          <div key={index} className={styles['domzone-item']}>
            <label className={styles.container}>
              <input
                type="checkbox"
                className={styles.white}
                checked={selectedDomzones.includes(item)}
                onChange={() => onDomzoneChange(item)}
              />
              <span className={styles.checkmark}></span>
              <span className={styles['domzone-name']}>{item}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Domzone;
