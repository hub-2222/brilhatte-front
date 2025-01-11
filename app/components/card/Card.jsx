"use client";
import Image from "next/image";
import styles from "./card.module.css"
import { useState } from "react";
import { Flow_Rounded } from "next/font/google";
import { useRouter } from 'next/navigation'

export default function Card (props) {
    const router = useRouter()

    return (
        <div onClick={() => router.push(`/calculo/${props.roupa.id}`)} id={`card-${props.roupa?.id}`} className={`${styles.card}`}>
            <div className="">
                <Image
                    src="/img/ARTE_-_ELEG0018.jpg"
                    alt="Logo"
                    className=''
                    height={1}
                    width={180}
                    style={{padding: '0.5rem'}}
                />
            </div>

            <div className="">
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
        </div>
    )
}