"use client";

import styles from '@/app/home.module.css';
import {useEffect, useState} from "react";
import { api } from "./api/api";
import {Input} from "@heroui/input";
import { useRouter } from 'next/navigation'
import {Button} from "@heroui/react";

export default function Home() {
    const router = useRouter()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    async function login() {
        setIsLoading(true);

        const loginDTO = {
            username: username,
            password: password
        }

        await api
            .post(`/auth/login`, loginDTO)
            .then((res) => {
                localStorage.setItem("authToken", JSON.stringify(res.data.token));
                router.push(`/cardlist`)
            }, (error) => {
                setIsLoading(false);
                alert('Usuário ou senha inválidos');
            });


    }

    return (
        <main className="h-[80vh]">
            <div className="flex flex-col h-full justify-center items-center">
                <div className={`${styles.bgInputs}`}>
                    <h1 className="font-bold text-xl text-gray-500 mb-6">Entre com seu usuário</h1>
                    <div className="flex flex-col gap-4">
                        <Input align="text-left" onChange={(e) => setUsername(e.target.value)} placeholder="Digite seu nome de usuário aqui"></Input>
                        <Input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Digite a senha aqui"></Input>
                        <Button isLoading={isLoading} onPress={login} className="font-medium text-white p-2.5 rounded-lg hover:bg-[#445869] active:bg-[#3d4f5e] bg-[#566878]">
                            {
                                isLoading ?
                                "Carregando" : "Entrar"
                            }
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
