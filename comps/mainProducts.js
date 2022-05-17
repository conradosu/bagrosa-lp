import styles from "../styles/mainProducts.module.css";
import ImageFadeIn from "react-image-fade-in";

import { useState, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const MainProducts = () => {
    const [showCaseMov, setShowCaseMov] = useState(0);
    const images = [
        "http://www.bagrosa.com.br/slick/images/prod-1.png",
        "http://www.bagrosa.com.br/slick/images/prod-2.png",
        "http://www.bagrosa.com.br/slick/images/prod-3.png"
    ];

    useEffect(() => {
        document.querySelector("[data-section='showcase']").style.transform = `translateX(${showCaseMov * -100}%)`;
    }, [showCaseMov]);

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.description}>
                    <h1>
                        Principais Produtos
                    </h1>
                    <h2>
                        Produzimos diversos tamanhos de sacolas personalizadas, além da possibilidade de produzir todo o enxoval de papelaria que acompanha seu produto.
                    </h2>
                </div>
                <div className={styles.showcase}>
                    <div className={styles.navLeft}>
                        <button className={styles.back} onClick={() => 
                                setShowCaseMov(showCaseMov>0?showCaseMov--:0)
                            }
                        >
                            <MdKeyboardArrowLeft/>
                        </button>
                    </div>
                    <div className={styles.navRight}>
                        <button className={styles.next} onClick={() => 
                                setShowCaseMov(showCaseMov<images.length?showCaseMov++:images.length - 1)
                            }
                        >
                            <MdKeyboardArrowRight/>
                        </button>
                    </div>
                    <div className={styles.showcaseContent} data-section="showcase">
                        {images.map((image, i) => (
                            <div className={styles.product} key={i}>
                                <ImageFadeIn src={image} alt=""/>       
                            </div>
                        ))}
                    </div>
                    <div className={styles.dotsContainer}>
                        {images.map((i) => (
                            <button className={styles.dot} key={i}></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainProducts;