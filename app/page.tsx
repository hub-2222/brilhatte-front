"use client";

import styles from '@/app/home.module.css';
import Card from "@/app/components/card/Card";
import Search from "@/app/components/input/InputSearch";
import {useEffect, useState} from "react";
import { api } from "./api/api";
import Image from "next/image";

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

   /*  useEffect(() => {
      getCharactersList();
    }, [page]); */

    const [roupaSelected, setRoupaSelected] = useState(null)

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
            <Search placeholder="Digite o nome da peça que está buscando aqui."/>
            <section className="min-h-screen flex flex-col items-center">
                <div className={`${styles.container}`}>
                    <div className="flex flex-wrap justify-between items-center">
                        {
                            json2?.map(roupa => (
                                <Card roupa={roupa} selectRoupa={setRoupaSelected}/>
                            ))
                        }
                        <div className="fixed bottom-6 right-8 cursor-pointer hover:bg-pastelgreen-500 active:bg-pastelgreen-600 items-center bg-pastelgreen-400 p-4 rounded-full drop-shadow-xl">
                            <Image
                                src="/img/plus.png"
                                alt="Logo"
                                className=''
                                height={40}
                                width={40}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
