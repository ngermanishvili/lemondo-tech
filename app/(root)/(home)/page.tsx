
import NavBar from '@/components/navbar/index'
import Banner from '@/components/banner'
import styles from '../../page.module.scss';  // Corrected import statement
import SortComponent from "@/components/sort/index";
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
