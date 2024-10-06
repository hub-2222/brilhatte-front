"use client";
import Image from "next/image";
import styles from "./card.module.css"
import { useState } from "react";
import { Flow_Rounded } from "next/font/google";

export default function Card (props) {

    const [unclickable, setUnclickable] = useState(!!props.unclickable);

    function selected(id) {
        if(!unclickable) {
            document.querySelectorAll('.card').forEach((item) => item.classList.remove('active'));
            document.getElementById("card-" + id).classList.add('active');
            props.selectRoupa(props.roupa)
        }
    }

    return (
        <div id={`card-${props.roupa?.id}`} onClick={() => selected(props.roupa?.id)} className={`card ${styles.container}`}>
            <div className="flex flex-col">
                <Image
                    src="/img/ARTE_-_ELEG0018.jpg"
                    alt="Logo"
                    className=''
                    height={1}
                    width={180}
                    style={{padding: '0.5rem'}}
                />
            </div>

            <div className="p-5">
                <h1><b>{props.roupa?.nome}</b></h1>
                <p>Pedras:</p>
                <ul className="list-disc pl-8">
                    {
                        props.roupa?.pedrasVinculadas?.map(pedra => (
                            <li key={pedra.id}>{pedra.nome} - {pedra.quantidade} unidades</li>
                        ))
                    }
                </ul>
                <p>Tamanho:</p>
                <ul className="list-disc pl-8">
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