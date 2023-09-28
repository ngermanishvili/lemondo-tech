"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import headerStyles from "../Masthead/Header.module.scss";
import HeaderLogo from "@/public/images/logo@2x.png";
import BellIcon from "@/public/images/bell.svg";
import CartIcon from "@/public/images/cart-gray.svg";
import FlagGeIcon from "@/public/images/flag-ge.svg";
import UserIcon from "@/public/images/user.svg";
import ArrowDownIcon from "@/public/images/arrow-down.svg";
import { useBasketStore } from '../../store/masthead.store'; //? zustand Store.

const Header: React.FC = () => {
  const { count } = useBasketStore();
  const menuItemClass: string = headerStyles.menuItem;

  return (
    <div style={{ backgroundColor: '#fff' }}>
      <div className={headerStyles.headerContainer}>
        <div className={headerStyles.logoContainer}>
          <Link href={"/"}>
            <div>
              <Image src={HeaderLogo} alt="logo" />
            </div>
          </Link>
        </div>
        <div className={headerStyles.rightContent}>
          <div className={menuItemClass}>
            <Image src={BellIcon} alt="Bell icon" />
          </div>
          <div className={menuItemClass} style={{ position: 'relative' }}>
            {count > 0 && (
              <div style={{
                position: 'absolute', backgroundColor: 'red', width: '20px', height: '20px', zIndex: 0, right: '-5px', top: '-5px', borderRadius: '11px', textAlign: 'center', color: '#fff', fontSize: '11px', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <span>{count}</span>
              </div>
            )}
            <Image src={CartIcon} alt="Icon, cartIcon, ჩანთა, კალათა" />
          </div>
          <div className={headerStyles.userSection}>
            <div className={headerStyles.userDetails}>
              <Image src={UserIcon} alt="User icon" />
              <span>Kancha Co.</span>
            </div>
            <div className={headerStyles.dropdownArrow}>
              <Image src={ArrowDownIcon} alt="Arrow down icon" />
            </div>
          </div>
          <div className={menuItemClass}>
            <Image src={FlagGeIcon} alt="georgia, geo, flag, დროშა, საქართველოს" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
