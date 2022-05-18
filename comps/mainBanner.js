import styles from "../styles/mainBanner.module.css";
import ImageFadeIn from "react-image-fade-in";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const MainBanner = () => {
    const banners = [
        "http://www.bagrosa.com.br/images/banners/desktop/banner_joia_v4.jpg",
    ];

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                {banners.map((banner, i) => (
                    <div className={styles.banner} key={i}>
                        <ImageFadeIn src={banner} alt="" loading="lazy"/>
                    </div>
                ))}
            </div>
            <div className={styles.left}>
                <button className={styles.dotNav}>
                    <MdKeyboardArrowLeft/>
                </button>
            </div>
            <div className={styles.right}>
                <button className={styles.dotNav}>
                    <MdKeyboardArrowRight/>
                </button>
            </div>
            <div className={styles.nav}>
                {banners.map((dot, i) => (
                    <button className={styles.dot} key={i}></button>
                ))}
            </div>
        </section>
    )
}

export default MainBanner;