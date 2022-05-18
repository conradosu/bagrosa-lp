import styles from "../styles/contact.module.css";
import Link from "next/link";
import ImageFadeIn from "react-image-fade-in";

const Contact = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.figure}>
                    <ImageFadeIn src="http://www.bagrosa.com.br/images/recorte_70.png" alt="" loading="lazy"/>
                </div>
                <div className={styles.description}>
                    <div className={styles.titleContainer}>
                        <h1>
                            Ainda está em dúvida?
                        </h1>
                        <h2>
                            Fale com a gente para descobrir o que podemos fazer juntos.
                        </h2>
                    </div>
                    <div className={styles.actionContainer}>
                        <Link href="/">
                            <a className={styles.contact} rel="noopener noreferrer">
                                <ImageFadeIn src="http://www.bagrosa.com.br/images/aindacomduvidas_77.png" alt="" loading="lazy"/>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;