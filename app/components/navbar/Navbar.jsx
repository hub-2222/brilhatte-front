"use client";
import Image from "next/image"
import styles from "./navbar.module.css"
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const router = useRouter()

    return (
        <div  className={styles.container}>
            <div className="flex justify-between items-center p-3">
                <div>
                </div>
                <Image
                    src="/img/logo.png"
                    width={300}
                    height={43}
                    className="w-[200px] md:w-[300px]"
                    alt="Logo"
                    
                />
                <svg onClick={() => confirm("Você tem certeza que desaja sair?")?router.push(`/`):""} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#e8eaed"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
            </div>
        </div>
    )
}

export default Navbar