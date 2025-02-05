"use client"
import {Input} from "@heroui/input";
import Image from "next/image";
import HotfixInput from "@/app/components/input/HotfixInput";
import {useState} from "react";
import {api} from "@/app/api/api";
import styles from "./calculo.module.css"
import { useRouter } from 'next/navigation'

export default function Page(props) {
    const router = useRouter()
    const [nextId32, setNextId32] = useState(0)
    const [nextId24, setNextId24] = useState(0)
    const [maoObra, setMaoObra] = useState(0)
    const [precoCusto, setPrecoCusto] = useState(0)
    const [porcentagemLucro, setPorcentagemLucro] = useState(0)

    const [hotfixes24, setHotfix24] = useState([
        {
            id: 0,
            largura: 24,
            comprimento: 0,
            tamanho: "VINTE_QUATRO",
            deletable: false
        }
    ])

    const [hotfixes32, setHotfix32] = useState([
        {
            id: 0,
            largura: 32,
            comprimento: 0,
            tamanho: "TRINTA_DOIS",
            deletable: false
        }
    ])
    async function calcular() {
        let calculoDTO = {
            roupa: json2,
            listHotfix: montarArrayHotfix(),
            maoObra: maoObra,
            porcentagemLucro: porcentagemLucro
        }

        await api
            .post(`/calculo`, calculoDTO)
            .then((res) => {
                setPrecoCusto(res.data)
            });
    }

    function montarArrayHotfix() {
        let arrayHotfix = []

        hotfixes24.map((hotfix) => {
            arrayHotfix.push({
                tamanho: "VINTE_QUATRO",
                larguraUtilizada: hotfix.largura,
                comprimentoUtilizado: hotfix.comprimento
            });
        });

        hotfixes32.map((hotfix) => {
            arrayHotfix.push({
                tamanho: "TRINTA_DOIS",
                larguraUtilizada: hotfix.largura,
                comprimentoUtilizado: hotfix.comprimento
            });
        });

        return arrayHotfix;
    }

    function add32() {
        let prox = nextId32 + 1;
        setHotfix32( [
            ...hotfixes32,
            {
                id: prox,
                largura: 32,
                comprimento: 0,
                tamanho: "TRINTA_DOIS",
                deletable: true
            }
        ]);

        setNextId32(prox)
    }

    function remove32(item) {
        const newList = hotfixes32.filter(h => h.id !== item.id)
        setHotfix32(newList)
    }

    function handleChangeComprimento(item, valor) {
        item.comprimento = valor
    }

    function handleChangeLargura(item, valor) {
        console.log(valor)
        item.largura = valor
    }

    function add24() {
        let prox = nextId24 + 1;
        setHotfix24( [
            ...hotfixes24,
            {
                id: prox,
                largura: 24,
                comprimento: 0,
                tamanho: "VINTE_QUATRO",
                deletable: true
            }
        ]);

        setNextId24(prox)
    }

    function remove24(item) {
        const newList = hotfixes24.filter(h => h.id !== item.id)
        setHotfix24(newList)
    }
    
    const json2 = [
        {
            "id": 1,
            "nome": "TESTE DE NOME DE VESTIDO BRILHATTE",
            "comprimentoFrente": 1.0,
            "comprimentoCostas": 1.0,
            "larguraFrente": 2.0,
            "larguraCostas": 2.0,
            "pedrasVinculadas": [
                {
                    "id": 1,
                    "nome": "Epoxy nude",
                    "tamanho": "3mm",
                    "valor_unitario": 0.5,
                    "quantidade": 500,
                    "idRegra": 1
                },
                {
                    "id": 2,
                    "nome": "Epoxy silver",
                    "tamanho": "2mm",
                    "valor_unitario": 0.5,
                    "quantidade": 1000,
                    "idRegra": 2
                },
                {
                    "id": 3,
                    "nome": "Epoxy gray",
                    "tamanho": "8mm",
                    "valor_unitario": 0.5,
                    "quantidade": 2000,
                    "idRegra": 2
                },
                {
                    "id": 2,
                    "nome": "Epoxy silver",
                    "tamanho": "2mm",
                    "valor_unitario": 0.5,
                    "quantidade": 1000,
                    "idRegra": 2
                },
                {
                    "id": 3,
                    "nome": "Epoxy gray",
                    "tamanho": "8mm",
                    "valor_unitario": 0.5,
                    "quantidade": 2000,
                    "idRegra": 2
                },
                {
                    "id": 2,
                    "nome": "Epoxy silver",
                    "tamanho": "2mm",
                    "valor_unitario": 0.5,
                    "quantidade": 1000,
                    "idRegra": 2
                },
                {
                    "id": 3,
                    "nome": "Epoxy gray",
                    "tamanho": "8mm",
                    "valor_unitario": 0.5,
                    "quantidade": 2000,
                    "idRegra": 2
                },
                {
                    "id": 2,
                    "nome": "Epoxy silver",
                    "tamanho": "2mm",
                    "valor_unitario": 0.5,
                    "quantidade": 1000,
                    "idRegra": 2
                },
                {
                    "id": 3,
                    "nome": "Epoxy gray",
                    "tamanho": "8mm",
                    "valor_unitario": 0.5,
                    "quantidade": 2000,
                    "idRegra": 2
                },
                {
                    "id": 2,
                    "nome": "Epoxy silver",
                    "tamanho": "2mm",
                    "valor_unitario": 0.5,
                    "quantidade": 1000,
                    "idRegra": 2
                },
                {
                    "id": 3,
                    "nome": "Epoxy gray",
                    "tamanho": "8mm",
                    "valor_unitario": 0.5,
                    "quantidade": 2000,
                    "idRegra": 2
                },
                {
                    "id": 2,
                    "nome": "Epoxy silver",
                    "tamanho": "2mm",
                    "valor_unitario": 0.5,
                    "quantidade": 1000,
                    "idRegra": 2
                },
                {
                    "id": 3,
                    "nome": "Epoxy gray",
                    "tamanho": "8mm",
                    "valor_unitario": 0.5,
                    "quantidade": 2000,
                    "idRegra": 2
                },
                {
                    "id": 2,
                    "nome": "Epoxy silver",
                    "tamanho": "2mm",
                    "valor_unitario": 0.5,
                    "quantidade": 1000,
                    "idRegra": 2
                },
                {
                    "id": 3,
                    "nome": "Epoxy gray",
                    "tamanho": "8mm",
                    "valor_unitario": 0.5,
                    "quantidade": 2000,
                    "idRegra": 2
                },
                {
                    "id": 2,
                    "nome": "Epoxy silver",
                    "tamanho": "2mm",
                    "valor_unitario": 0.5,
                    "quantidade": 1000,
                    "idRegra": 2
                },
                {
                    "id": 3,
                    "nome": "Epoxy gray",
                    "tamanho": "8mm",
                    "valor_unitario": 0.5,
                    "quantidade": 2000,
                    "idRegra": 2
                },
                {
                    "id": 2,
                    "nome": "Epoxy silver",
                    "tamanho": "2mm",
                    "valor_unitario": 0.5,
                    "quantidade": 1000,
                    "idRegra": 2
                },
                {
                    "id": 3,
                    "nome": "Epoxy gray",
                    "tamanho": "8mm",
                    "valor_unitario": 0.5,
                    "quantidade": 2000,
                    "idRegra": 2
                }
            ]
        }
    ]

    return (
        
        <div className="flex flex-col justify-between gap-4 items-center mx-2 md:mx-10">
            <div className="md:p-10 p-2 text-center flex w-full">
                <div className="flex justify-start align-middle min-w-[33.33%]">
                    <button onClick={() => router.push(`/cardlist/`)} className="flex h-fit rounded justify-center align-middle gap-2 p-2 bg-white text-[#24A0ED] drop-shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#24A0ED"><path d="m297.92-442.12 235.7 235.69L480-153.3 153.3-480 480-806.86l53.62 53.29-235.7 235.69h508.94v75.76H297.92Z"/></svg>
                        Voltar
                    </button>
                </div>
                <div className="flex justify-center w-full min-w-[33.33%]">
                    <span className="text-2xl md:text-4xl">Calculadora de Preço</span>
                </div>
                <div className="min-w-[33.33%]"></div>
            </div>
            <div id={`card-${json2[0].id}`} className={`w-full ${styles.card}`}>
            <div className="flex flex-col w-full justify-between">
                <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col h-full p-3 justify-between box-border">
                        <h1 className="md:text-base drop-shadow text-small text-gray-700"><b>{json2[0].nome}</b></h1>
                        <div className={`${styles.scroll} h-auto overflow-y-auto`}>
                            {
                                json2[0].pedrasVinculadas?.map(pedra => (
                                    <table className="w-full">
                                        <tbody>
                                            <tr className="text-sm border-b-1 w-full flex text-gray-600 hover:bg-gray-200">
                                                <td className="w-full text-nowrap max-w-[33.33%]">{pedra.nome}</td>
                                                <td className="w-full text-nowrap max-w-[33.33%] text-center">{pedra.tamanho}</td>
                                                <td className="w-full text-nowrap max-w-[33.33%] text-right">{pedra.quantidade} un</td>
                                            </tr>                               
                                        </tbody>
                                    </table>
                                ))
                            }
                        </div>
                        <div className="flex mt-3 text-sm text-gray-600 text-nowrap w-full justify-between">
                            <p>Frente: {json2[0].comprimentoFrente} x {json2[0].larguraFrente}cm</p>
                            <p>Costas: {json2[0].comprimentoCostas} x {json2[0].larguraCostas}cm</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-2/5">
                <Image
                    src="/img/ARTE_-_ELEG0018.jpg"
                    alt="Logo"
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="w-full h-full"
                />
            </div>
            </div>
            <div className="flex flex-row w-full">
                <div className="w-full pr-2">
                    <Input type="number" onChange={(maoObra) => setMaoObra(maoObra)} label="Mão de obra"
                            placeholder="0.00" className="drop-shadow"></Input>
                </div>
                <div className="w-full">
                    <Input type="number" onChange={(porcentagemLucro) => setPorcentagemLucro(porcentagemLucro)}
                           className="drop-shadow" label="Porcentagem de lucro" placeholder="0%"></Input>
                </div>
            </div>
            <div className="max-h-[300px] md:max-h-[230px] p-2 overflow-y-auto w-full">
                <div className="w-full flex flex-col gap-4 md:flex-row">
                    <div className="w-full drop-shadow">
                        <label className="mb-2 text-sm font-medium text-gray-700">Hotfix 32cm</label>
                        <div className={`flex flex-col gap-2`}>
                            {
                                hotfixes32.sort((a, b) => a.id - b.id).map(item => (
                                    <div key={item.id}>
                                        <HotfixInput
                                            id={item.id}
                                            hotfix={item}
                                            onChangeComprimento={handleChangeComprimento}
                                            onChangeLargura={handleChangeLargura}
                                            deletable={item.deletable}
                                            onClickAdd={add32}
                                            onClickDelete={remove32}/>
                                    </div>
                                ))
                            } 
                        </div>
                    </div>
                    <div className="w-full drop-shadow">
                        <label className="mb-2 text-sm font-medium text-gray-700">Hotfix 24cm</label>
                        <div className={`flex flex-col gap-2`}>
                            {hotfixes24.sort((a, b) => a.id - b.id).map(item => (
                                    <div key={item.id}>
                                        <HotfixInput
                                            id={item.id}
                                            hotfix={item}
                                            onChangeComprimento={handleChangeComprimento}
                                            onChangeLargura={handleChangeLargura}
                                            deletable={item.deletable}
                                            onClickAdd={add24}
                                            onClickDelete={remove24}/>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-2">
                <div>
                    <div className="flex border rounded-lg drop-shadow mt-6 mb-6">
                        <button onClick={calcular}
                                className="inline-flex hover:bg-gray-600 active:bg-gray-700 items-center px-3 text-sm rounded-s-lg bg-gray-500 text-white">
                            Calcular
                        </button>
                        <span className="inline-flex items-center px-2 text-sm bg-pastelgreen-400 text-white">
                    R$
                </span>
                        <input type="button"
                                id="website-admin"
                                disabled
                                value={precoCusto}
                                className="rounded-e-lg disabled:bg-white text-right text-gray-900 block min-w-0 w-full focus:outline-none focus:ring-1 text-sm p-2.5"
                                placeholder="0"/>
                    </div>
                </div>
            </div>
        </div>

    );
}