import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/components/List.module.scss";
import CheckmarkSVG from "../../../public/images/Group 4868.svg";
import btnSend from "../../../public/images/Btn_send.svg";
import btnSend2 from "../../../public/images/Btn_send-1.svg";
import CartSvg from "../../../public/images/Fill 932.svg";
import { useBasketStore } from "@/store/masthead.store";

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
  const [windowWidth, setWindowWidth] = useState<number | null>(768);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const thresholdWidth = 768;
  const handleToggleBasket = () => {
    if (!isInBasket) {
      inc();
    } else {
      dec();
    }
    setIsInBasket(!isInBasket);
  };
  if (windowWidth === null) return null;
  if (windowWidth <= thresholdWidth) {
    return (
      <>
        {isInBasket ? (
          <>
            <div className={styles["domListContainer"]}>
              <Image
                className={styles["btnSend1"]}
                src={btnSend}
                alt="sendbtn"
              />
              <Image
                className={styles["btnSendGRN"]}
                src={btnSend2}
                alt="sendbtngreen"
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <p className={styles["listDomain"]}>{domain.name}</p>
                <div className={styles["damatebulia"]}>
                  <div
                    className={styles.alreadybag}
                    onClick={handleToggleBasket}
                  >
                    <Image
                      src={CheckmarkSVG}
                      width={18}
                      height={18}
                      alt="checked"
                    />
                    <span>დამატებულია</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              className={styles["domListContainer"]}
              style={{ justifyContent: "space-between" }}
            >
              <Image
                className={styles["btnSend1"]}
                src={btnSend}
                alt="sendbtn"
              />
              <Image
                className={styles["btnSendGRN"]}
                src={btnSend2}
                alt="sendbtngreen"
              />
              <p className={styles["listDomain"]}>{domain.name}</p>
              <div className={styles["domainPrices"]}>
                <h1 className={styles["LariPrices"]}>
                  {domain.priceLari} <span className={styles.Lari}>₾</span>
                </h1>
                <h1 className={styles["DollarPrices"]}>
                  {domain.priceDollar} $
                </h1>
              </div>
              <div className={styles["damatebulia"]}>
                <div
                  className={`${styles["basketDomain"]} `}
                  data-hover="დამატება&nbsp;&nbsp;&nbsp;&nbsp;"
                  onClick={handleToggleBasket}
                >
                  <Image
                    className={styles["basketDomain-img"]}
                    src={CartSvg}
                    alt="basket"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  } else {
    return (
      <div className={styles["domListContainer"]}>
        <Image className={styles["btnSend1"]} src={btnSend} alt="sendbtn" />
        <Image
          className={styles["btnSendGRN"]}
          src={btnSend2}
          alt="sendbtngreen"
        />
        <p className={styles["listDomain"]}>{domain.name}</p>
        <div className={styles["domainPrices"]}>
          <h1 className={styles["LariPrices"]}>
            {domain.priceLari} <span className={styles.Lari}>₾</span>
          </h1>
          <h1 className={styles["DollarPrices"]}>{domain.priceDollar} $</h1>
        </div>
        <div className={styles["damatebulia"]}>
          {isInBasket ? (
            <div className={styles.alreadybag} onClick={handleToggleBasket}>
              <Image src={CheckmarkSVG} width={18} height={18} alt="checked" />
              <span>დამატებულია</span>
            </div>
          ) : (
            <div
              className={`${styles["basketDomain"]} `}
              data-hover="დამატება&nbsp;&nbsp;&nbsp;&nbsp;"
              onClick={handleToggleBasket}
            >
              <Image
                className={styles["basketDomain-img"]}
                src={CartSvg}
                alt="basket"
              />
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default DomainItem;