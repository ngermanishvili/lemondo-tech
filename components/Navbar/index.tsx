"use client"
import React from "react";
import { navbarLeftLinks, navbarRightLinks } from "./navData";
import RenamedNavBarStyles from "../Navbar/NavBar.module.scss";

const RenamedNavBar: React.FC = (): JSX.Element => {
    const renderNavBarItems = (links: string[]): JSX.Element[] =>
        links.map(
            (link: string, index: number): JSX.Element => (
                <div key={index} className={RenamedNavBarStyles.newItem}>
                    {link}
                </div>
            )
        );

    return (
        <div className={RenamedNavBarStyles.newNavbar}>
            <div className={RenamedNavBarStyles.newContainer}>
                <div className={RenamedNavBarStyles.newPart}>
                    {renderNavBarItems(navbarLeftLinks)}
                </div>
                <div className={RenamedNavBarStyles.newPart}>
                    {renderNavBarItems(navbarRightLinks)}
                </div>
            </div>
        </div>
    );
};

export default RenamedNavBar;
