import Image from "next/image";
import styles from '@/app/home.module.css';
import clsx from 'clsx';
import Cards from "./card";
import {useState} from "react";


export default function Home() {
    const [fakeCard, setFakeCard] = useState({
        nome: "ELEG0018 - 053156",
        pedras: [
            {
                nome: "Sextavado black",
                tamanho: "3mm",
                quantidade: 24700
            },
            {
                nome: "Sextavado gold",
                tamanho: "3mm",
                quantidade: 4439
            },
            {
                nome: "Sextavado brown",
                tamanho: "3mm",
                quantidade: 10547
            }
        ]
    });

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
                <Cards arte={fakeCard}/>
            </div>
        </main>
    );
}
