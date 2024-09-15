"use client";
import Image from "next/image";
import styles from "./card.module.css"
import { useState } from "react";

export default function Card (props) {

    const [unclickable, setUnclickable] = useState(!!props.unclickable);

    const active = {backgroundColor: 'rgba(68, 88, 105, 0.2)', boxShadow: 'rgba(0, 0, 0, 0.5) 0px 0px 10px 0px inset'}
    const inactive = {}

    const [selected, setSelected] = useState(0);

    const handleClick = (divNum) => () => {
        if (!unclickable) {
            setSelected(divNum);
        } 
    };

    return (
        <div style={selected == 1 ? active : inactive} onClick={handleClick(1)} className={`${styles.container}`}>
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
                <h1><b>AMAR0199 - 517BL000024</b></h1>
                <ul> Pedras:
                    <li>Sextavado black 3mm - 24700 peças</li>
                    <li>Sextavado gold 3mm - 4439 peças</li>
                    <li>Sextavado brow 3mm - 10547 peças</li>
                </ul>
                <span>Tamanho: 57 x 103cm</span>
            </div>
        </div>
    )
}