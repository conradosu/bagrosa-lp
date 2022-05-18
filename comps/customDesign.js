import styles from "../styles/customDesign.module.css";
import Link from "next/link";
import ImageFadeIn from "react-image-fade-in";

const CustomDesign = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.figure}>
                    <ImageFadeIn src="\static\customDesign\display.png" alt="" loading="lazy"/>
                </div>
                <div className={styles.description}>
                    <h1>
                        Design Personalizado
                    </h1>
                    <h2>
                        As sacolas de papel são duráveis e resistentes, uma forma inteligente de valorizar seu produto, sua marca, seu empenho como empreendedor e a satisfação do seu cliente.
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default CustomDesign;