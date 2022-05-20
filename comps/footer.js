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
                <div className={styles.info}>
                    <div className={styles.location}>
                        <h1>
                            41 3276.1699
                        </h1>
                        <h2>
                            Rua Bom Jesus de Iguape, Nº 4236
                            <br/>
                            Boqueirão - Curitiba - PR
                            <br/>
                            CEP 81650-030
                        </h2>
                    </div>
                    <div className={styles.openingHours}>
                        <h1>
                            Horário de Atendimento:
                        </h1>
                        <h2>
                            Segunda a Sexta
                            <br/>
                            das 08:00 às 12:00 h
                            <br/>
                            e das 13:00 às 18:00 
                        </h2>
                    </div>
                </div>
                <div className={styles.copyright}>
                    Bag Rosa Embalagens, 2021. Todos os direitos reservados. As imagens ustilizadas são meramente ilustrativas.
                </div>
                <div className={styles.dev}>
                    <ImageFadeIn src="https://bagrosa.com.br/images/rodapeweb_text_18.png" alt="" loading="lazy"/>
                </div>
            </div>
        </section>
    )
}

export default Footer;