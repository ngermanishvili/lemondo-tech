import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../List.module.scss';
import CheckmarkSVG from '../../../public/images/Group 4868.svg';
import btnSend from '../../../public/images/Btn_send.svg';
import btnSend2 from '../../../public/images/Btn_send-1.svg';
import CartSvg from '../../../public/images/Fill 932.svg';
import { useBasketStore } from '@/store/masthead.store';

interface DomainItemProps {
    domain: {
        id: string;
        name: string;
        priceLari: number;
        priceDollar: string;
    };
    inBasket: boolean;
    onClick: () => void;
}

const DomainItem: React.FC<DomainItemProps> = ({ domain }) => {
    const { inc, dec } = useBasketStore();
    const [isInBasket, setIsInBasket] = useState(false);

    const handleToggleBasket = () => {
        if (!isInBasket) {
            inc();
        } else {
            dec();
        }
        setIsInBasket(!isInBasket);
    };

    return (
        <div className={styles['domListContainer']}>
            <Image className={styles['btnSend1']} src={btnSend} alt="sendbtn" />
            <Image className={styles['btnSendGRN']} src={btnSend2} alt="sendbtngreen" />
            <p className={styles['listDomain']}>{domain.name}</p>
            <div className={styles['domainPrices']}>
                <h1 className={styles['LariPrices']}>
                    {domain.priceLari} <span className={styles.Lari}>₾</span>
                </h1>
                <h1 className={styles['DollarPrices']}>{domain.priceDollar} $</h1>
            </div>
            <div className={styles['damatebulia']}>
                {isInBasket ? (
                    <div className={styles.alreadybag} onClick={handleToggleBasket}>
                        <Image src={CheckmarkSVG} width={18} height={18} alt="checked" />
                        <span>დამატებულია</span>
                    </div>
                ) : (
                    <div
                        className={`${styles['basketDomain']} `}
                        data-hover="დამატება&nbsp;&nbsp;&nbsp;&nbsp;"
                        onClick={handleToggleBasket}
                    >
                        <Image className={styles['basketDomain-img']} src={CartSvg} alt="basket" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default DomainItem;
