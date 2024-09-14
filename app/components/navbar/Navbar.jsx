import Image from "next/image"
import styles from "./navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Image
                src="/img/logo.png"
                width={300}
                height={43}
                className="hidden md:block"
                alt="Logo"
            />
        </div>
    )
}

export default Navbar