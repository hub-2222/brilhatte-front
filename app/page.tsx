"use client";
import Image from "next/image";
import styles from '@/app/home.module.css';
import clsx from 'clsx';
import Calculo from "@/app/pages/calculo/Calculo";
import Navbar from "@/app/components/navbar/Navbar";
import Card from "@/app/components/card/Card";
import Input from "@/app/components/input/Input";
import Search from "@/app/components/input/InputSearch";
import {useEffect, useState} from "react";
import { api } from "./api/api";

export default function Home() {
    const [characterList, setCharacterList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [listLoading, setListLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [maxPages, setMaxPages] = useState(0);

    async function getCharactersList() {
      setListLoading(true);
      await api
        .get(`/roupas`, { params: { page: page, size: 12 } })
        .then((res: any) => {
          setMaxPages(res.data.totalPages);
          setCharacterList(res.data.content);
        });
      setListLoading(false);
    }

    async function handleNextPage() {
      if (page < maxPages + 1) {
        const newPage = page + 1;
        setPage(newPage);
      }
    }

    async function handlePreviousPage() {
      if (page != 0) {
        const newPage = page - 1;
        setPage(newPage);
      }
    }

    useEffect(() => {
      getCharactersList();
    }, [page]);

    const [roupaSelected, setRoupaSelected] = useState(null)

    // const json2 = [
    //     {
    //         "id": 1,
    //         "nome": "Vestido",
    //         "comprimentoFrente": 1.0,
    //         "comprimentoCostas": 1.0,
    //         "larguraFrente": 2.0,
    //         "larguraCostas": 2.0,
    //         "pedras_vinculadas": [
    //             {
    //                 "id": 1,
    //                 "nome": "sextavado gold 3mm",
    //                 "tamanho": "3mm",
    //                 "valor_unitario": 0.5,
    //                 "quantidade": 500,
    //                 "idRegra": 1
    //             },
    //             {
    //                 "id": 2,
    //                 "nome": "sextavado black 3mm",
    //                 "tamanho": "3mm",
    //                 "valor_unitario": 0.5,
    //                 "quantidade": 500,
    //                 "idRegra": 2
    //             }
    //         ]
    //     },
    //     {
    //         "id": 2,
    //         "nome": "Vestido",
    //         "comprimentoFrente": 10.0,
    //         "comprimentoCostas": 0.0,
    //         "larguraFrente": 5.0,
    //         "larguraCostas": 0.0,
    //         "pedras_vinculadas": [
    //             {
    //                 "id": 1,
    //                 "nome": "sextavado gold 3mm",
    //                 "tamanho": "3mm",
    //                 "valor_unitario": 0.5,
    //                 "quantidade": 500,
    //                 "idRegra": 1
    //             },
    //             {
    //                 "id": 2,
    //                 "nome": "sextavado black 3mm",
    //                 "tamanho": "3mm",
    //                 "valor_unitario": 0.5,
    //                 "quantidade": 500,
    //                 "idRegra": 2
    //             }
    //         ]
    //     },
    //     {
    //         "id": 3,
    //         "nome": "Vestido",
    //         "comprimentoFrente": 0.0,
    //         "comprimentoCostas": 6.6,
    //         "larguraFrente": 0.0,
    //         "larguraCostas": 6.5,
    //         "pedras_vinculadas": [
    //             {
    //                 "id": 1,
    //                 "nome": "sextavado gold 3mm",
    //                 "tamanho": "3mm",
    //                 "valor_unitario": 0.5,
    //                 "quantidade": 500,
    //                 "idRegra": 1
    //             },
    //             {
    //                 "id": 2,
    //                 "nome": "sextavado black 3mm",
    //                 "tamanho": "3mm",
    //                 "valor_unitario": 0.5,
    //                 "quantidade": 500,
    //                 "idRegra": 2
    //             }
    //         ]
    //     }
    // ]


    return (
        <main>
            <div className="flex flex-row space-x-16 justify-center items-start">
                <div className="basis-1/2">
                    <Search placeholder="Digite o nome da peça que está buscando aqui."/>
                    <div className="overflow-y-auto fds shadow-inner">
                        {
                            characterList?.map(roupa => (
                                <div key={roupa?.id} className="m-10">
                                    <Card roupa={roupa} selectRoupa={setRoupaSelected}/>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex justify-around items-center">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             width="32"
                             height="32"
                             fill="#445869"
                             className="cursor-pointer"
                             onClick={handlePreviousPage}
                             viewBox="0 0 256 256">
                                <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                        </svg>
                        <p className="font-bold text-[#445869]">
                            {page + 1} de {maxPages}
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             width="32"
                             height="32"
                             fill="#445869"
                             className="cursor-pointer"
                             onClick={handleNextPage}
                             viewBox="0 0 256 256">
                                <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                        </svg>
                    </div>
                </div>
                <div className="basis-1/2">
                    <Calculo roupa={roupaSelected}></Calculo>
                </div>
            </div>
        </main>
    );
}
