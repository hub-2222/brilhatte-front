"use client"
import {Input} from "@heroui/input";
import Image from "next/image";
import HotfixInput from "@/app/components/input/HotfixInput";
import { Modal } from "@/app/components/modal/Modal";
import Search from "@/app/components/input/InputSearch";
import ItemInput from "@/app/components/input/ItemInput";
import Card from "@/app/components/card/Card";
import styles from "./cardlist.module.css"
import {useEffect, useState} from "react";
import Link from "next/link";
import { useEdgeStore } from "@/lib/edgestore";
import { SingleImageDropzone } from "@/app/components/input/single-image-dropzone";
import {
    EdgeStoreApiClientError,
    UploadAbortedError,
  } from '@edgestore/react/errors';

export default function Page(props) {
    const [file, setFile] = useState();
    const [progress, setProgress] = useState(0);
    const [urls, setUrls] = useState();
    const { edgestore } = useEdgeStore();
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
        <main className="h-full">
            <section className=" flex-col items-center h-full">
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
               widht="60%"
               full={true}
               onClose={() => {
               setIsModalOpen(false)
            }}>
                <div className="flex flex-col h-full md:max-h-[90%]">
                    <div className="flex flex-col h-full w-full gap-5 p-2  overflow-y-auto">
                        <Input label="Digite o nome do modelo" className="drop-shadow"></Input>
                        <div className="flex gap-2 w-full items-stretch">
                            <div className="w-full">
                                <Input label="Largura Frente"
                                       placeholder="0,00"
                                       className="drop-shadow"
                                       type="number"></Input>
                            </div>
                            <div className="w-full">
                                <Input label="Largura Costa"
                                       placeholder="0,00"
                                       className="drop-shadow"
                                       type="number"></Input>
                            </div>
                        </div>
                        <div className="flex gap-2 w-full">
                            <div className="w-full">
                                <Input label="Comprimento Frente"
                                       placeholder="0,00"
                                       className="drop-shadow"
                                       type="number"></Input>
                            </div>

                            <div className="w-full">
                                <Input label="Comprimento Costas"
                                    placeholder="0,00"
                                    className="drop-shadow"
                                    type="number"></Input>
                            </div>
                        </div>
                        <div className="">
                            <span className="mb-2 text-lg font-medium text-gray-700">Joias:</span>
                            <div className="flex flex-col gap-2">
                                {
                                    hotfixes32.sort((a, b) => a.id - b.id).map((item, index) => (
                                        <div key={item.id}>
                                            <ItemInput 
                                                    index={index}
                                                    hotfix={item}
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
                        <div className="flex md:flex-row flex-col mt-5 md:items-start items-center">
                            <span className="flex-[1] mb-2 text-lg font-medium text-gray-700">Selecione uma imagem:</span>
                            <SingleImageDropzone
                                width={200}
                                height={200}
                                value={file}
                                dropzoneOptions={{
                                    maxSize: 1024 * 1024 * 1, // 1MB
                                }}
                                onChange={(file) => {
                                    setFile(file);
                                }}
                                    
                            />
                            <div className="flex-[1]"></div>
                                {/* <div className="h-[6px] w-44 border rounded overflow-hidden">
                                <div
                                className="h-full bg-slate-600 transition-all duration-150"
                                style={{
                                    width: `${progress}%`,
                                }}
                                />
                            </div> */}
                            {/* <button className="p-2 bg-slate-500 m-2"
                                    onClick={async () => {
                                        try {
                                            if (file) {
                                            const res =
                                            await edgestore.myPublicImages.upload({file,
                                                input: { type: "post" },
                                                onProgressChange: (progress) => {
                                                setProgress(progress);
                                                },});
                                            // save your data here
                                            setUrls({
                                                url: res.url,
                                                thumbnailUrl: res.thumbnailUrl,
                                            });
                                            }
                                        } catch (error) {
                                            // All errors are typed and you will get intellisense for them
                                            if (error instanceof EdgeStoreApiClientError) {
                                              // if it fails due to the `maxSize` set in the router config
                                              if (error.data.code === 'FILE_TOO_LARGE') {
                                                alert(
                                                  `O arquivo é grande demais. Tamanho máximo é ${formatFileSize(
                                                    error.data.details.maxFileSize,
                                                  )}`,
                                                );
                                              }
                                              // if it fails due to the `accept` set in the router config
                                              if (error.data.code === 'MIME_TYPE_NOT_ALLOWED') {
                                                alert(
                                                  `Tipo de arquivo inválido. Tente usar: ${error.data.details.allowedMimeTypes.join(
                                                    ', ',
                                                  )}`,
                                                );
                                              }
                                              // if it fails during the `beforeUpload` check
                                              if (error.data.code === 'UPLOAD_NOT_ALLOWED') {
                                                alert("Você não tem permissão para armazenar arquivos.");
                                              }
                                            } else if (error instanceof UploadAbortedError) {
                                              // if the upload was canceled from an AbortController's signal
                                              console.log('Upload abortado');
                                            } else {
                                              // unknown error
                                              console.error(error);
                                            }
                                        }
                                      }}
                              >teste</button>
                              {urls?.url && (
                                    <Link href={urls.url} target="_blank">
                                    URL
                                    </Link>
                                )}
                                {urls?.thumbnailUrl && (
                                    <Link href={urls.thumbnailUrl} target="_blank">
                                    THUMBNAIL
                                    </Link>
                                )} */}
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