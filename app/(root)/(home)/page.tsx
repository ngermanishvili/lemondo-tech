
import NavBar from '@/components/navbar/index'
import Banner from '@/components/banner/index'
import SortComponent from "@/components/sort/index";
import SideBarHero from "@/components/primarySidebar/index"
import styles from '../../page.module.scss';  



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
