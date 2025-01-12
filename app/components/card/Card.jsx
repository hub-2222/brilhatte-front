"use client";
import Image from "next/image";
import styles from "./card.module.css"
import { useState } from "react";
import { Flow_Rounded } from "next/font/google";
import { useRouter } from 'next/navigation'
import { Modal } from "@/app/components/modal/Modal";

export default function Card (props) {
    const router = useRouter()
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div id={`card-${props.roupa?.id}`} className={`w-full ${styles.card}`}>
            <div className="w-2/5">
                <Image
                    src="/img/ARTE_-_ELEG0018.jpg"
                    alt="Logo"
                    className=''
                    height={1}
                    width={180}
                    style={{padding: '0.5rem'}}
                />
            </div>
            <div className="flex flex-col w-full justify-between">
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

                <div className="flex w-full justify-end items-end gap-2">
                    <div  onClick={(e) => props.del(e, props.roupa.id, props.roupa.nome)} className={`p-3 rounded-full hover:bg-red-500 active:bg-red-600 bg-red-400 drop-shadow  ${styles.btnEdit}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                    </div>
                    <div className={`p-3 rounded-full hover:bg-[#445869] active:bg-[#3d4f5e] bg-[#566878] drop-shadow  ${styles.btnEdit}`}
                        onClick={(e) => props.edit(e, props.roupa.id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm424-368 57-56-56-56-57 56 56 56ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357L280-563v283h282l278-278v358q0 33-23.5 56.5T760-120H200Z"/>
                        </svg>
                    </div>
                    <div onClick={() => router.push(`/calculo/${props.roupa.id}`)} className={`p-3 rounded-full hover:bg-[#445869] active:bg-[#3d4f5e] bg-[#566878] drop-shadow  ${styles.btnEdit}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M320-240h60v-80h80v-60h-80v-80h-60v80h-80v60h80v80Zm200-30h200v-60H520v60Zm0-100h200v-60H520v60Zm44-152 56-56 56 56 42-42-56-58 56-56-42-42-56 56-56-56-42 42 56 56-56 58 42 42Zm-314-70h200v-60H250v60Zm-50 472q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}