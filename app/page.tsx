"use client";

import styles from '@/app/home.module.css';
import Card from "@/app/components/card/Card";
import { Modal } from "@/app/components/modal/Modal";
import Search from "@/app/components/input/InputSearch";
import {useEffect, useState} from "react";
import { api } from "./api/api";
import Image from "next/image";
import Input from "@/app/components/input/Input";
import { useRouter } from 'next/navigation'
export default function Home() {
    const router = useRouter()
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <main className="h-full">
            <div className="flex h-4/5 justify-center items-center">
                <div className={`${styles.bgInputs}`}>
                    <h1 className="font-bold text-xl text-gray-500 mb-10">Entre com seu usuário</h1>
                    <div className="flex flex-col gap-4">
                        <Input align="text-left" placeholder="Digite seu nome de usuário aqui"></Input>
                        <Input placeholder="Digite a senha aqui"></Input>
                        <button onClick={() => router.push(`/cardlist`)} className="font-medium text-white p-2.5 rounded-lg hover:bg-[#445869] active:bg-[#3d4f5e] bg-[#566878]">Entrar</button>
                    </div>
                </div>
            </div>
        </main>
    );
}
