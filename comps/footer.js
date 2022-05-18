import styles from "../styles/footer.module.css";
import Link from "next/link";
import ImageFadeIn from "react-image-fade-in";

import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <section className={styles.container}>
            <div className={styles.bagTop}>
                <ImageFadeIn src="http://www.bagrosa.com.br/images/rodape_completo_04.png" alt="" loading="lazy"/>
            </div>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <ImageFadeIn src="http://www.bagrosa.com.br/images/rodapeweb_text_03.png" alt="" loading="lazy"/>
                </div>
                <div className={styles.socialContainer}>
                    <Link href="/">
                        <a className={styles.social} rel="noopener noreferrer" target="_blank">
                            <FaFacebookF/>  
                        </a>
                    </Link>
                    <Link href="/">
                        <a className={styles.social} rel="noopener noreferrer" target="_blank">
                            <FaInstagram/>  
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Footer;