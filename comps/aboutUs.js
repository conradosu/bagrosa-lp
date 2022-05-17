import styles from "../styles/aboutUs.module.css";
import Link from "next/link";
import ImageFadeIn from "react-image-fade-in";

const AboutUs = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.description}>
                    <h1>
                        Qualidade que acompanha sua marca
                    </h1>
                    <h2>
                        No ramo gráfico desde 1998, a Bag Rosa tem se especializado como fornecedor de Sacolas Personalizadas de Papel, investindo em maquinário moderno agregando diferenciais notáveis ao produto final.
                    </h2>
                </div>
                <Link href="/">
                    <a className={styles.contact} rel="noopener noreferrer">Quero saber mais</a>
                </Link>
            </div>
        </section>
    )
}

export default AboutUs;