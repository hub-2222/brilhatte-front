"use client"
import Input from "/app/components/input/Input";
import Image from "next/image";
import HotfixInput from "@/app/components/input/HotfixInput";
import {useState} from "react";
import {api} from "@/app/api/api";
import styles from "./calculo.module.css"

export default function CardList(props) {
    

    return (
        <main>
            <Search placeholder="Digite o nome da peça que está buscando aqui."/>
            <section className="min-h-screen flex flex-col items-center">
                <div className={`${styles.container}`}>
                    <div className="flex flex-wrap justify-between items-center">
                        {
                            json2?.map(roupa => (
                                <Card roupa={roupa} selectRoupa={setRoupaSelected}/>
                            ))
                        }
                        <div className="fixed bottom-6 right-8 cursor-pointer hover:bg-pastelgreen-500 active:bg-pastelgreen-600 items-center bg-pastelgreen-400 p-4 rounded-full drop-shadow-xl">
                            <Image
                                src="/img/plus.png"
                                alt="Logo"
                                className=''
                                height={40}
                                width={40}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>

    );
}