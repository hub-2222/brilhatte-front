"use client";
import Image from "next/image";
import styles from "./card.module.css"
import { useState } from "react";
import { Flow_Rounded } from "next/font/google";
import { useRouter } from 'next/navigation'

export default function Card (props) {
    const router = useRouter()

    return (
        <div onClick={() => router.push(`/calculo/${props.roupa.id}`)} id={`card-${props.roupa?.id}`} className={`w-full ${styles.card}`}>
            <div className="w-full">
                <Image
                    src="/img/ARTE_-_ELEG0018.jpg"
                    alt="Logo"
                    className=''
                    height={1}
                    width={180}
                    style={{padding: '0.5rem'}}
                />
            </div>

            <div className="w-full">
                <h1><b>{props.roupa?.nome}</b></h1>
                <p>Pedras:</p>
                <ul className="">
                    {
                        props.roupa?.pedrasVinculadas?.map(pedra => (
                            <li key={pedra.id}>{pedra.nome} - {pedra.quantidade} unidades</li>
                        ))
                    }
                </ul>
                <p>Tamanho:</p>
                <ul className="">
                    {
                        props.roupa?.comprimentoFrente>0? <li>Frente: L: {props.roupa?.larguraFrente}cm C: {props.roupa?.comprimentoFrente}cm </li> : ''
                    }

                    {
                        props.roupa?.comprimentoCostas>0? <li>Costas: L: {props.roupa?.larguraCostas}cm C: {props.roupa?.comprimentoCostas}cm </li> : ''
                    }
                </ul>
            </div>
            <div className="flex w-full justify-end items-end">
                <div className={`p-3 rounded-full hover:bg-[#445869] active:bg-[#3d4f5e] bg-[#566878] drop-shadow  ${styles.btnEdit}`}
                    onClick={(e) => props.edit(e, props.roupa.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm424-368 57-56-56-56-57 56 56 56ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357L280-563v283h282l278-278v358q0 33-23.5 56.5T760-120H200Z"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}