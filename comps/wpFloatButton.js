import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import styles from "../styles/wpFloatButton.module.css";

const WpFloatButton = () => {
    return (
        <Link href="https://api.whatsapp.com/send?phone=554199298026">
            <a className={styles.container} rel="noopener noreferrer" target="_blank">
                <BsWhatsapp/>
            </a>
        </Link>
    )
}

export default WpFloatButton;