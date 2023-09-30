"use client"
import React from "react";
import { navbarLeft, navbarRight } from "./data/navData";
import RenamedNavBarStyles from "@/styles/components/NavBar.module.scss";

const NavBar: React.FC = (): JSX.Element => {
    const renderNavBarItems = (links: string[]): JSX.Element[] => links.map((link: string, index: number): JSX.Element => (
        <div key={index} className={RenamedNavBarStyles.newItem}>
            {link}
        </div>
    ));

    return (
        <div className={RenamedNavBarStyles.newNavbar}>
            <div className={RenamedNavBarStyles.newContainer}>
                <div className={RenamedNavBarStyles.newPart}>
                    {renderNavBarItems(navbarLeft)}
                </div>
                <div className={RenamedNavBarStyles.newPart}>
                    {renderNavBarItems(navbarRight)}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
