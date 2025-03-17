"use client";
import Image from "next/image";
import styles from "./card.module.css"
import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function Card (props) {
    const router = useRouter()
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div id={`card-${props.roupa?.id}`} className={`w-full ${styles.card}`}>

            <div className="flex flex-col w-full justify-between border-r-1">
                <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col h-full p-3 justify-between">
                        <h1 className="md:text-base drop-shadow text-small text-gray-700"><b>{props.roupa?.nome}</b></h1>
                        <div className={`${styles.scroll} max-h-20 md:max-h-44 overflow-y-auto`}>
                            {
                                props.roupa?.pedrasVinculadas?.map(pedra => (
                                    <table key={pedra.id} className="w-full">
                                        <tbody>
                                            <tr className="text-sm border-b-1 w-full flex text-gray-600 hover:bg-gray-200">
                                                <td className="w-full max-w-[33.33%]">{pedra.nome}</td>
                                                <td className="w-full text-nowrap max-w-[33.33%] text-right">{pedra.tamanho}</td>
                                                <td className="w-full text-nowrap max-w-[33.33%] text-right">{pedra.quantidade} un</td>
                                            </tr>                               
                                        </tbody>
                                    </table>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="p-2"></div>

                <div className="flex w-full justify-between items-end border-t-1">
                    <div  onClick={(e) => props.del(e, props.roupa)} className={`border-r-1 ${styles.btnDel}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" fill="#f87171" viewBox="0 -960 960 960" width="24px"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                    </div>
                    <div className={`${styles.btn}`}
                        onClick={(e) => props.edit(e, props.roupa)}>
                        <svg className="hover:fill-[#445869] active:fill-[#3d4f5e] fill-[#566878]" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill=""><path d="M360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm424-368 57-56-56-56-57 56 56 56ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357L280-563v283h282l278-278v358q0 33-23.5 56.5T760-120H200Z"/>
                        </svg>
                    </div>
                    <div onClick={() => router.push(`/calculo/${props.roupa.id}`)} className={`border-l-1 ${styles.btn}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#566878"><path d="M320-240h60v-80h80v-60h-80v-80h-60v80h-80v60h80v80Zm200-30h200v-60H520v60Zm0-100h200v-60H520v60Zm44-152 56-56 56 56 42-42-56-58 56-56-42-42-56 56-56-56-42 42 56 56-56 58 42 42Zm-314-70h200v-60H250v60Zm-50 472q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
                    </div>
                </div>
            </div>
            <div className="w-3/5">
                <Image
                    src={props.roupa?.imageUrl || "/img/default.jpg"}
                    alt="Logo"
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="w-full h-full"
                />
            </div>
        </div>
    )
}