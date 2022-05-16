import styles from "../styles/intro.module.css";
import ImageFadeIn from "react-image-fade-in";

const Intro = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.figure}>
                    <ImageFadeIn src="http://www.bagrosa.com.br/images/sacmar_19.png" alt=""/>
                </div>
                <div className={styles.description}>
                    <h1>
                        Contribua com o meio ambiente conversando conosco sobre as nossas soluções mais ecológicas.
                    </h1>
                    <h2>
                        A sacola de papel é durável, atraente e reciclável. Essencial para a proteção do meio ambiente.
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default Intro;