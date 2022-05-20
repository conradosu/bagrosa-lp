import styles from "../styles/keyPoints.module.css";
import Link from "next/link";
import ImageFadeIn from "react-image-fade-in";

const KeyPoints = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.keyPoints}>
                    <div className={styles.point}>
                        <div className={styles.titleContainer}>
                            <ImageFadeIn src="http://www.bagrosa.com.br/images/icones/presente-ico.svg" alt="" loading="lazy"/>
                            <h1>Presenteie</h1>
                        </div>
                        <div className={styles.description}>
                            Melhore a experiência de compra do seu cliente final presenteando-o com uma atraente embalagem.
                        </div>
                    </div>
                    <div className={styles.point}>
                        <div className={styles.titleContainer}>
                            <ImageFadeIn src="http://www.bagrosa.com.br/images/icones/camera-ico.svg" alt="" loading="lazy"/>
                            <h1>Valorize</h1>
                        </div>
                        <div className={styles.description}>
                            Seu cliente é especial! Valorize cada detalhe entregando seus produtos em sacolas sofisticadas feitas em papel.
                        </div>
                    </div>
                    <div className={styles.point}>
                        <div className={styles.titleContainer}>
                            <ImageFadeIn src="http://www.bagrosa.com.br/images/icones/binoculo-ico.svg" alt="" loading="lazy"/>
                            <h1>Seja Visto</h1>
                        </div>
                        <div className={styles.description}>
                            Explore o potencial do marketing espontâneo que sua marca terá sendo vista além do seu ponto de venda.
                        </div>
                    </div>
                </div>
                <div className={styles.actionContainer}>
                    <Link href="/contato">
                        <a className={styles.contact} rel="noopener noreferrer">Quero saber mais</a>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default KeyPoints;