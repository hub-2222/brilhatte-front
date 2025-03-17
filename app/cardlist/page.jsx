"use client"
import {Input} from "@heroui/input";
import Image from "next/image";
import {Modal} from "@/app/components/modal/Modal";
import {api} from "@/app/api/api";
import Search from "@/app/components/input/InputSearch";
import ItemInput from "@/app/components/input/ItemInput";
import Card from "@/app/components/card/Card";
import styles from "./cardlist.module.css"
import {useEffect, useState} from "react";
import Link from "next/link";
import {Pagination} from "@heroui/pagination";
import {useEdgeStore} from "@/lib/edgestore";
import {SingleImageDropzone} from "@/app/components/input/single-image-dropzone";
import {
    EdgeStoreApiClientError,
    UploadAbortedError,
} from '@edgestore/react/errors';
import {InfinitySpin} from "react-loader-spinner";

export default function Page(props) {
    const [roupaList, setRoupaList] = useState([]);
    const [file, setFile] = useState();
    const [progress, setProgress] = useState(0);
    const [urls, setUrls] = useState({});
    const {edgestore} = useEdgeStore();
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(20);
    const [maxPages, setMaxPages] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalDelOpen, setIsModalDelOpen] = useState(false);
    const [roupaDelete, setRoupaDelete] = useState({});
    const [roupaCad, setRoupaCad] = useState();
    const [nextIdPedraCad, setNextIdPedraCad] = useState(0)
    const [larguraFrenteCad, setLarguraFrenteCad] = useState(0)
    const [larguraCostasCad, setLarguraCostasCad] = useState(0)
    const [comprimentoFrenteCad, setComprimentoFrenteCad] = useState(0)
    const [comprimentoCostasCad, setComprimentoCostasCad] = useState(0)
    const [nomeCad, setNomeCad] = useState("")
    const [listLoading, setListLoading] = useState(false)
    const [pedrasCad, setPedrasCad] = useState([])
    const [imagemCad, setImagemCad] = useState()

    async function getCharactersList(nome) {
        if (listLoading) {
            return;
        }

        setListLoading(true);

        await api
            .get(`/roupas`, getParamsRequest(nome))
            .then((res) => {
                setMaxPages(res.data.totalPages);
                setRoupaList(res.data.content);
            });

        setListLoading(false);
    }

    function getParamsRequest(nome) {
        let objParams = {
            params: {
                page: page - 1,
                size: limit
            }
        };

        if (nome) {
            objParams.params.nome = nome;
        }

        return objParams;
    }

    async function handleChangePage(value) {
        setPage(value);
    }

    useEffect(() => {
        getCharactersList();
    }, [page]);

    const [roupaSelected, setRoupaSelected] = useState(null)

    function addPedra() {
        setPedrasCad([
            ...pedrasCad,
            {
                key: nextIdPedraCad,
                deletable: true
            }
        ]);

        setNextIdPedraCad(nextIdPedraCad + 1)
    }


    function removePedra(item) {
        let newList = pedrasCad.filter(p => {
            return p.key !== item.key;
        })

        if (newList.length === 0) {
            newList = [{
                id: null,
                deletable: false,
                key: nextIdPedraCad
            }]
            setNextIdPedraCad(nextIdPedraCad + 1)
        }
        setPedrasCad(newList)

    }

    function createModelo() {
        limparCadastro();
        setPedrasCad([{
            id: null,
            deletable: false,
            key: nextIdPedraCad
        }]);
        setNextIdPedraCad(1);
        setIsModalOpen(true);
    }

    function edit(e, roupa) {
        e.stopPropagation()
        limparCadastro();
        setRoupaCad(roupa);
        setImagemCad(roupa.imageUrl);
        setComprimentoCostasCad(roupa.comprimentoCostas);
        setComprimentoFrenteCad(roupa.comprimentoFrente);
        setLarguraCostasCad(roupa.larguraCostas);
        setLarguraFrenteCad(roupa.larguraFrente);
        setNomeCad(roupa.nome);
        roupa.pedrasVinculadas.sort((a, b) => a.id - b.id).forEach((pedra, index) => {
            pedra.key = index;
            pedra.deletable = true;
        })
        setNextIdPedraCad(roupa.pedrasVinculadas.length);
        setPedrasCad(roupa.pedrasVinculadas.length > 0 ? roupa.pedrasVinculadas : [{
            id: null,
            deletable: false,
            key: 0
        }]);
        setIsModalOpen(true);
    }

    function handleChangeLarguraFrenteCad(e) {
        setLarguraFrenteCad(e.target.value);
    }

    function handleChangeLarguraCostasCad(e) {
        setLarguraCostasCad(e.target.value);
    }

    function handleChangeComprimentoFrenteCad(e) {
        setComprimentoFrenteCad(e.target.value);
    }

    function handleChangeComprimentoCostasCad(e) {
        setComprimentoCostasCad(e.target.value);
    }

    function handleChangeNomeCad(e) {
        setNomeCad(e.target.value);
    }

    function handleChangePedra(pedra, key) {
        const updatedPedras = pedrasCad.map((item) => {
            if (item.key === key) {
                pedra.key = key;
                pedra.quantidade = item.quantidade;
                pedra.deletable = item.deletable;
                return pedra;
            }

            return item;
        });

        setPedrasCad(updatedPedras.sort((a, b) => a.key - b.key));
    }

    async function salvarArquivo() {
        if (file) {
            return edgestore.myPublicImages.upload({
                file,
                input: {type: "post"},
                onProgressChange: (progress) => {
                    setProgress(progress);
                },
            });
        }
    }

    async function salvar() {
        const roupa = {
            nome: nomeCad,
            larguraFrente: larguraFrenteCad,
            larguraCostas: larguraCostasCad,
            comprimentoFrente: comprimentoFrenteCad,
            comprimentoCostas: comprimentoCostasCad,
            pedrasVinculadas: pedrasCad,
            imageUrl: urls?.url || imagemCad,
            thumbnailUrl: urls?.thumbnailUrl
        }

        await salvarArquivo().then((res) => {
            roupa.imageUrl = res?.url;
            roupa.thumbnailUrl = res?.thumbnailUrl;
        });

        if (roupaCad != null) {
            await api.put(`/roupas/${roupaCad.id}`, roupa).then(() => {
                getCharactersList();

                setIsModalOpen(false);
                limparCadastro();
            }, (error) => {

            });
        } else {
            await api.post('/roupas', roupa).then(() => {
                getCharactersList();

                setIsModalOpen(false);
                limparCadastro();
            },(error) => {

            });
        }
    }

    function limparCadastro() {
        setRoupaCad(null)
        setImagemCad(null);
        setNomeCad('');
        setLarguraFrenteCad(0);
        setLarguraCostasCad(0);
        setComprimentoFrenteCad(0);
        setComprimentoCostasCad(0);
        setNextIdPedraCad(0);
        setPedrasCad([])
        setFile(null);
    }

    function del(e, roupa) {
        e.stopPropagation()
        setIsModalDelOpen(true);
        setRoupaDelete(roupa);
    }

    function cancelDelete() {
        setRoupaDelete(null);
        setIsModalDelOpen(false)
    }

    function deleteRoupa(id) {
        return async () => {
            await api.delete(`/roupas/${id}`).then(() => {
                getCharactersList();
                setIsModalDelOpen(false);
            });
        }
    }

    return (
        <main className="h-full">
            <section className=" flex-col items-center h-full">
                <div className={`${styles.container}`}>
                    <Search onChange={getCharactersList}
                            placeholder="Digite o nome da peça que está buscando aqui."/>
                    {
                        listLoading ?
                            (
                                <div className="flex justify-center items-center h-full">
                                    <InfinitySpin color="#566878" size={50}/>
                                </div>
                            ) :
                            roupaList.length ?
                            (
                                <div  className="flex flex-wrap justify-between items-center">
                                    {
                                        roupaList?.map(roupa => (
                                            <Card key={roupa.id} roupa={roupa} edit={edit} del={del} selectRoupa={setRoupaSelected}/>
                                        ))
                                    }
                                    <div
                                        className="fixed bottom-16 right-8 md:right-16 cursor-pointer hover:bg-pastelgreen-500 active:bg-pastelgreen-600 items-center bg-pastelgreen-400 p-4 rounded-full drop-shadow-xl"
                                        onClick={() => {
                                            createModelo();
                                        }}>
                                        <Image
                                            src="/img/plus.png"
                                            alt="Logo"
                                            className=''
                                            height={40}
                                            width={40}
                                        />
                                    </div>
                                    <div className="flex w-full justify-center p-4">
                                        <Pagination page={page} onChange={handleChangePage} boundaries={3}
                                                    className="p-0 m-0" variant={"faded"} showControls
                                                    total={maxPages}/>
                                    </div>
                                </div>
                            )
                            :
                            (
                                <div>
                                    <div
                                        className="fixed bottom-16 right-8 md:right-16 cursor-pointer hover:bg-pastelgreen-500 active:bg-pastelgreen-600 items-center bg-pastelgreen-400 p-4 rounded-full drop-shadow-xl"
                                        onClick={() => {
                                            createModelo();
                                        }}>
                                        <Image
                                            src="/img/plus.png"
                                            alt="Logo"
                                            className=''
                                            height={40}
                                            width={40}
                                        />
                                    </div>
                                    <div className="flex justify-center items-center h-full">
                                        <span className="text-lg text-gray-500">Nenhuma peça encontrado</span>
                                    </div>
                                </div>
                            )
                    }
                </div>
            </section>
            <Modal
                title="Cadastro de Peça"
                isOpen={isModalOpen}
                widht="60%"
                full={true}
                onClose={() => {
                    setIsModalOpen(false)
                }}>
                <div className="flex flex-col h-full md:max-h-[90%]">
                    <div className="flex flex-col h-full w-full gap-4 p-2  overflow-y-auto">
                        <Input className="drop-shadow"
                               value={nomeCad}
                               onChange={handleChangeNomeCad}
                               label="Digite o nome da peça"></Input>
                        <div className="flex gap-2 w-full items-stretch">
                            <div className="w-full">
                                <Input label="Largura"
                                       placeholder="0,00"
                                       className="drop-shadow"
                                       onChange={handleChangeLarguraFrenteCad}
                                       type="number"
                                       align="text-right"
                                       value={larguraFrenteCad}></Input>
                            </div>
                            <div className="w-full">
                                <Input label="Comprimento"
                                       placeholder="0,00"
                                       onChange={handleChangeComprimentoFrenteCad}
                                       type="number"
                                       className="drop-shadow"
                                       align="text-right"
                                       value={comprimentoFrenteCad}></Input>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex flex-col gap-2 mb-2">

                                <span className="mb-2 text-lg font-medium text-gray-700">Tipos de pedra:</span>
                                <button
                                    onClick={addPedra}
                                    className="p-2 w-auto justify-center drop-shadow align-middle hover:bg-blue-500 active:bg-blue-600 items-center rounded bg-blue-400 text-white">
                                    + Adicionar tipo de pedra
                                </button>
                            </div>
                            <div className="flex flex-col gap-2">
                                {
                                    pedrasCad.sort((a, b) => a.key - b.key).map((item, index) => (
                                        <div key={item.key}>
                                            <ItemInput item={item}
                                                       value={item}
                                                       onChangePedra={(value) => handleChangePedra(value, item.key)}
                                                       onChangeQuantidade={(value) => pedrasCad[index].quantidade = value}
                                                       deletable={item.deletable}
                                                       onClickDelete={removePedra}>
                                            </ItemInput>
                                        </div>
                                    ))
                                }
                            </div>
                            
                        </div>
                        <div className="flex md:flex-row flex-col mt-5 md:items-start items-center">
                                <span
                                    className="flex-[1] mb-2 text-lg font-medium text-gray-700">Selecione uma imagem:</span>
                            <SingleImageDropzone
                                width={200}
                                height={200}
                                value={imagemCad ? imagemCad : file}
                                dropzoneOptions={{
                                    maxSize: 1024 * 1024 * 1, // 1MB
                                }}
                                onChange={(file) => {
                                    setFile(file);
                                    setImagemCad(null)
                                }}
                            />
                            <div className="flex-[1]"></div>
                        </div>
                    </div>
                    <div className="flex mt-2 justify-end border-t-2 border-[#445869]">
                        <button onClick={salvar}
                                className=" text-white mt-4 px-4 py-2 rounded cursor-pointer hover:bg-pastelgreen-500 active:bg-pastelgreen-600 items-center bg-pastelgreen-400">Salvar
                        </button>
                    </div>
                </div>
            </Modal>
            <Modal
                title={roupaDelete?.nome}
                isOpen={isModalDelOpen}
                widht="[90%]"
                onClose={() => {
                    setIsModalDelOpen(false)
                }
                }>
                <span className="text-xl text-gray-500">Você tem certeza que deseja excluir esta peça?</span>
                <div className="flex mt-2 justify-end gap-2">
                    <button onClick={deleteRoupa(roupaDelete?.id)}
                            className="md:w-1/5 w-1/4 text-white mt-4 px-4 py-2 rounded cursor-pointer hover:bg-pastelgreen-500 active:bg-pastelgreen-600 items-center bg-pastelgreen-400">Sim
                    </button>
                    <button onClick={cancelDelete}
                            className="md:w-1/5 w-1/4 text-white mt-4 px-4 py-2 rounded cursor-pointer hover:bg-red-500 active:bg-red-600 bg-red-400 items-center ">Não
                    </button>
                </div>
            </Modal>
        </main>
    )
}