import Image from "next/image";
import styles from '@/app/home.module.css';
import clsx from 'clsx';
import Cards from "./card";


export default function Home() {
  return (
        <main>
            <div className="flex items-center justify-center p-10 bg-primary">
                <Image
                    src="/img/logo.png"
                    width={300}
                    height={43}
                    className="hidden md:block"
                    alt="Logo"
                />
            </div>
            
            <div>
                <Cards/>
            </div>
        </main>
    );
}
