"use client"
import Input from "/app/components/input/Input";
import Image from "next/image";
import HotfixInput from "@/app/components/input/HotfixInput";
import {api} from "@/app/api/api";
import { Modal } from "@/app/components/modal/Modal";
import Search from "@/app/components/input/InputSearch";
import ItemInput from "@/app/components/input/ItemInput";
import Card from "@/app/components/card/Card";
import styles from "./cardlist.module.css"
import {useEffect, useState} from "react";

export default function Page(props) {
    const [characterList, setCharacterList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [listLoading, setListLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [maxPages, setMaxPages] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalDelOpen, setIsModalDelOpen] = useState(false);
    const [editRoupa, setEditRoupa] = useState();
    const [roupaNome, setRoupaNome] = useState();
    const [delRoupa, setDelRoupa] = useState();
    const [nextId32, setNextId32] = useState(0)
    const [hotfixes32, setHotfix32] = useState([
        {
            id: 0,
            largura: 32,
            comprimento: 0,
            tamanho: "TRINTA_DOIS",
            deletable: false
        }
    ])

  /*   async function getCharactersList() {
      setListLoading(true);
      await api
        .get(`/roupas`, { params: { page: page, size: 12 } })
        .then((res: any) => {
          setMaxPages(res.data.totalPages);
          setCharacterList(res.data.content);
        });
      setListLoading(false);
    } */

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

    var item = {largura: "",
            comprimento: ""
     }
    
    function handleChangeComprimento(item, valor) {
        item.comprimento = valor
    }

    function handleChangeLargura(item, valor) {
        console.log(valor)
        item.largura = valor
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

    function edit(e, id) {
        e.stopPropagation()
        setEditRoupa(id);
        setIsModalOpen(true);
    }

    function del(e, id, nome) {
        e.stopPropagation()
        setEditRoupa(id);
        setIsModalDelOpen(true);
        setRoupaNome(nome);
    }

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
           
            <section className=" flex-col items-center">
                <div className={`${styles.container}`}>
                <Search placeholder="Digite o nome da peça que está buscando aqui."/>
                    <div className="flex flex-wrap justify-between items-center">
                        {
                            json2?.map(roupa => (
                                <Card roupa={roupa} del={del} edit={edit} selectRoupa={setRoupaSelected}/>
                            ))
                        }
                        <div className="fixed bottom-6 right-8 cursor-pointer hover:bg-pastelgreen-500 active:bg-pastelgreen-600 items-center bg-pastelgreen-400 p-4 rounded-full drop-shadow-xl" 
                             onClick={()=>{setIsModalOpen(true)}}>
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
            <Modal 
               title="Cadastro de Modelo" 
               isOpen={isModalOpen}
               widht="1/2"
               full={true}
               onClose={() => {
               setIsModalOpen(false)
            }}>
                <div className="flex flex-col h-[91%] md:max-h-[60vh] max-h-full">
                    <div className="flex flex-col h-full w-full gap-4 p-2  overflow-y-auto">
                        <Input label="Nome"></Input>
                        <div className="flex gap-2 w-full items-stretch">
                            <div className="w-full">
                                <Input label="Largura Frente"
                                    placeholder="0,00"
                                    type="number"
                                    align="text-right"
                                    value=""></Input>
                            </div>
                            <div className="w-full">
                                <Input label="Largura Costa"
                                    placeholder="0,00"
                                    type="number"
                                    align="text-right"
                                    value=""></Input>
                            </div>
                        </div>
                        <div className="flex gap-2 w-full">
                            <div className="w-full">
                                <Input label="Comprimento Frente"
                                    placeholder="0,00"
                                    type="number"
                                    align="text-right"
                                    value=""></Input>
                            </div>

                            <div className="w-full">
                                <Input label="Comprimento Costas"
                                    placeholder="0,00"
                                    type="number"
                                    align="text-right"
                                    value=""></Input>
                            </div>
                        </div>
                        <div className="">
                            <span className="mb-2 text-lg font-medium text-gray-700">Pedras:</span>
                            <div className="flex flex-col gap-2">
                                {
                                    hotfixes32.sort((a, b) => a.id - b.id).map(item => (
                                        <div key={item.id}>
                                            <ItemInput hotfix={item}
                                                    id={item.id}
                                                    onClickAdd={add32}
                                                    deletable={item.deletable}
                                                    onClickDelete={remove32}>
                                            </ItemInput>
                                        </div>
                                    ))
                                } 
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-2 justify-end border-t-2 border-[#445869]">
                        <button className=" text-white mt-4 px-4 py-2 rounded cursor-pointer hover:bg-pastelgreen-500 active:bg-pastelgreen-600 items-center bg-pastelgreen-400">Salvar</button>
                    </div>
                </div>
            </Modal>
            <Modal 
                title={roupaNome} 
                isOpen={isModalDelOpen}
                widht="[90%]"
                onClose={() => 
                    {setIsModalDelOpen(false)}
                }>
                <span className="text-xl text-gray-500">Você tem certeza que deseja excluir este modelo?</span>
                <div className="flex mt-2 justify-end gap-2">
                    <button className="md:w-1/5 w-1/4 text-white mt-4 px-4 py-2 rounded cursor-pointer hover:bg-pastelgreen-500 active:bg-pastelgreen-600 items-center bg-pastelgreen-400">Sim</button>
                    <button onClick={() => setIsModalDelOpen(false)} className="md:w-1/5 w-1/4 text-white mt-4 px-4 py-2 rounded cursor-pointer hover:bg-red-500 active:bg-red-600 bg-red-400 items-center ">Não</button>
                </div>
            </Modal>
        </main>

    );
}