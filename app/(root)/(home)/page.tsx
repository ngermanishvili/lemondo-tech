
import NavBar from '@/components/Navbar/index'
import Banner from '@/components/Banner'
import styles from '../../page.module.scss';  // Corrected import statement
import SortComponent from "@/components/Sort/index";
import SideBarHero from "@/components/primarySidebar/index"


export default function Home() {
    return (
        <>
            <NavBar />
            <Banner />
            <SortComponent />
            <div className={styles.main}>
                <SideBarHero />
            </div>

        </>
    );
}
