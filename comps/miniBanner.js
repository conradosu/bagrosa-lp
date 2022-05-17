import styles from "../styles/miniBanner.module.css";
import Link from "next/link";
import ImageFadeIn from "react-image-fade-in";

const MiniBanner = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.description}>
                    <h1>
                        As sacolas de papel são duráveis e resistentes, uma forma inteligente de valorizar seu produto, sua marca, seu empenho como empreendedor e a satisfação do seu cliente.
                    </h1>
                    <Link href="/">
                        <a rel="noopener noreferrer">Quero saber mais</a>
                    </Link>
                </div>
                <div className={styles.figure}>
                    <ImageFadeIn src="http://www.bagrosa.com.br/images/maos_29.png" alt=""/>
                </div>
            </div>
        </section>
    )
}

export default MiniBanner;