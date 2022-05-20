import { NextSeo } from "next-seo";
import styles from "../../styles/contato.module.css";
import Link from "next/link";
import ImageFadeIn from "react-image-fade-in";

const Contato = () => {
    const handleEmail = (e) => {
        e.preventDefault();

        alert("Formulário desativado temporariamente");
    }

    return (
        <>
        <NextSeo title="Contato | Bag Rosa" />
        <main className={styles.container}>
            <div className={styles.content}>
                <Link href="/">
                    <a className={styles.logo} rel="noopener noreferrer">
                        <ImageFadeIn src="\static\logo\logo-azul.svg" alt="" loading="lazy"/>
                    </a>
                </Link>
                <div className={styles.description}>
                    <h1>
                        Obrigada pelo seu interesse!
                    </h1>
                    <h2>
                        Deixe seu contato e tiraremos todas as suas dúvidas.
                    </h2>
                </div>
                <form className={styles.form} onSubmit={handleEmail}>
                    <input type="text" placeholder="Nome" required/>
                    <input type="email" placeholder="E-mail" required/>
                    <input type="email" placeholder="Confirmar E-mail" required/>
                    <div>
                        Trabalhamos com pedidos a partir de 250 unidades.
                    </div>
                    <button type="submit">Enviar</button>
                </form>
                <div className={styles.or}>
                    <h1>ou</h1>
                </div>
                <Link href="https://api.whatsapp.com/send?l=pt&phone=554199298026">
                    <a className={styles.whatsapp} rel="noopener noreferrer" target="_blank">
                        Receba um Orçamento pelo WhattsApp
                    </a>
                </Link>
            </div>
        </main>
        </>
    );
};

export default Contato;
