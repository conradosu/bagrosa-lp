import styles from "../styles/shipping.module.css";
import Link from "next/link";
import ImageFadeIn from "react-image-fade-in";

const Shipping = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.figure}>
                    <ImageFadeIn src="http://www.bagrosa.com.br/images/icones/caminhao-ico.svg" alt=""/>
                </div>
                <h1 className={styles.title}>
                    Entregamos para todo o Brasil
                </h1>
                <Link href="/">
                    <a className={styles.contact} rel="noopener noreferrer">Quero saber mais</a>
                </Link>
            </div>
        </section>
    )
}

export default Shipping;