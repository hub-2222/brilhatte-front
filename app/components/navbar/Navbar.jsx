"use client";
import Image from "next/image"
import styles from "./navbar.module.css"
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const router = useRouter()

    return (
        <div  className={styles.container}>
            <Image
                src="/img/logo.png"
                width={300}
                height={43}
                className="w-[200px] md:w-[300px] cursor-pointer"
                alt="Logo"
                onClick={() => router.push(`/`)}
            />
        </div>
    )
}

export default Navbar