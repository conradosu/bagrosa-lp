import styles from "../styles/ourClients.module.css";
import Link from "next/link";
import ImageFadeIn from "react-image-fade-in";

const OurClients = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.titleContainer}>
                    <h1>
                        Alguns de nossos clientes
                    </h1>
                </div>
                <div className={styles.clients}>
                    <ImageFadeIn src="http://www.bagrosa.com.br/images/icones/delatorre-ico.svg" alt="" loading="lazy"/>
                    <ImageFadeIn src="http://www.bagrosa.com.br/images/icones/eletromar-ico.svg" alt="" loading="lazy"/>
                    <ImageFadeIn src="http://www.bagrosa.com.br/images/icones/mectronic-ico.svg" alt="" loading="lazy"/>
                    <ImageFadeIn src="http://www.bagrosa.com.br/images/icones/camilo-ico.svg" alt="" loading="lazy"/>
                    <ImageFadeIn src="http://www.bagrosa.com.br/images/icones/madero-ico.svg" alt="" loading="lazy"/>
                    <ImageFadeIn src="http://www.bagrosa.com.br/images/icones/hafele-ico.svg" alt="" loading="lazy"/>
                </div>
            </div>
        </section>
    )
}

export default OurClients;