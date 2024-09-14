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

  return (
        <main>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="flex flex-row space-x-16 justify-center items-start">
                <div className="basis-1/2 h-screen overflow-y-scroll">
                    <Search placeholder="Digite o nome da peça que está buscando aqui."/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div className="basis-1/2">
                    <Calculo></Calculo>
                </div>
            </div>
        </main>
    );
}
