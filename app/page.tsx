"use client";
import Image from "next/image";
import styles from '@/app/home.module.css';
import clsx from 'clsx';
import Calculo from "@/app/pages/calculo/Calculo";
import Navbar from "@/app/components/navbar/Navbar";
import Card from "@/app/components/card/Card";
import Input from "@/app/components/input/Input";
import Search from "@/app/components/input/InputSearch";

export default function Home() {
    const json2 = [
        {
            "id": 1,
            "nome": "Vestido",
            "comprimentoFrente": 1.0,
            "comprimentoCostas": 1.0,
            "larguraFrente": 2.0,
            "larguraCostas": 2.0,
            "pedras_vinculadas": [
                {
                    "id": 1,
                    "nome": "sextavado gold 3mm",
                    "tamanho": "3mm",
                    "valor_unitario": 0.5,
                    "quantidade": 500,
                    "idRegra": 1
                },
                {
                    "id": 2,
                    "nome": "sextavado black 3mm",
                    "tamanho": "3mm",
                    "valor_unitario": 0.5,
                    "quantidade": 500,
                    "idRegra": 2
                }
            ]
        },
        {
            "id": 2,
            "nome": "Vestido",
            "comprimentoFrente": 10.0,
            "comprimentoCostas": 0.0,
            "larguraFrente": 5.0,
            "larguraCostas": 0.0,
            "pedras_vinculadas": [
                {
                    "id": 1,
                    "nome": "sextavado gold 3mm",
                    "tamanho": "3mm",
                    "valor_unitario": 0.5,
                    "quantidade": 500,
                    "idRegra": 1
                },
                {
                    "id": 2,
                    "nome": "sextavado black 3mm",
                    "tamanho": "3mm",
                    "valor_unitario": 0.5,
                    "quantidade": 500,
                    "idRegra": 2
                }
            ]
        },
        {
            "id": 3,
            "nome": "Vestido",
            "comprimentoFrente": 0.0,
            "comprimentoCostas": 6.6,
            "larguraFrente": 0.0,
            "larguraCostas": 6.5,
            "pedras_vinculadas": [
                {
                    "id": 1,
                    "nome": "sextavado gold 3mm",
                    "tamanho": "3mm",
                    "valor_unitario": 0.5,
                    "quantidade": 500,
                    "idRegra": 1
                },
                {
                    "id": 2,
                    "nome": "sextavado black 3mm",
                    "tamanho": "3mm",
                    "valor_unitario": 0.5,
                    "quantidade": 500,
                    "idRegra": 2
                }
            ]
        }
    ]

  return (
        <main>
            <div className="flex flex-row space-x-16 justify-center items-start">
                <div className="pb-16 basis-1/2">
                    <Search placeholder="Digite o nome da peça que está buscando aqui."/>
                    <div className="overflow-y-auto fds">
                        {
                            json2.map(roupa => (
                                <div className="m-10">
                                    <Card roupa={roupa}/>
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
                <div className="basis-1/2">
                    <Calculo></Calculo>
                   <div className="h-screen fds flex flex-col justify-center items-center">
                        <span className="text-2xl text-center font-bold	text-neutral-700">Calculadora Preço de Venda</span>
                        <span className="text-center px-20 py-8">Para continuar, por favor, selecione uma das opções disponíveis no menu à esquerda. Clique no item desejado para prosseguir.</span>
                   </div>
                </div>
            </div>
        </main>
    );
}
