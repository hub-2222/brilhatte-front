"use client";
import Image from "next/image";
import styles from '@/app/home.module.css';
import clsx from 'clsx';
import Calculo from "@/app/components/calculo/Calculo";
import Navbar from "@/app/components/navbar/Navbar";

export default function Home() {

  return (
        <main>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="flex row justify-center items-center">
                <div className="basis-1/2">
                    <h1>LADO ESQUERDO</h1>
                </div>
                <div className="basis-1/2">
                    <Calculo></Calculo>
                </div>
            </div>
        </main>
    );
}
