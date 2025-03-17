"use client"
import {Input} from "@heroui/input";
import Image from "next/image";
import HotfixInput from "@/app/components/input/HotfixInput";
import {useEffect, useState} from "react";
import {api} from "@/app/api/api";
import styles from "./calculo.module.css"
import {InfinitySpin} from "react-loader-spinner";
import {Button} from "@heroui/react";
import { useRouter } from 'next/navigation'

export default function Page({params}) {
    const router = useRouter()
    const [idRoupa, setIdRoupa] = useState(params?.idRoupa)
    const [roupa, setRoupa] = useState();
    const [nextId32, setNextId32] = useState(0);
    const [nextId24, setNextId24] = useState(0);
    const [maoObra, setMaoObra] = useState(0);
    const [precoCusto, setPrecoCusto] = useState(0);
    const [porcentagemLucro, setPorcentagemLucro] = useState(0);
    const [isLoadingData, setIsLoadingData] = useState(true);
    const [isLoadingCalculo, setIsLoadingCalculo] = useState(false);
    const [hotfixes24, setHotfix24] = useState([]);
    const [hotfixes32, setHotfix32] = useState([]);



    async function calcular() {
        let calculoDTO = {
            roupa: {
                id: idRoupa
            },
            listHotfix: montarArrayHotfix(),
            maoObra: maoObra ? maoObra : 0,
            porcentagemLucro: porcentagemLucro ? porcentagemLucro : 0
        }
        setIsLoadingCalculo(true);

        await api
            .post(`/calculo`, calculoDTO)
            .then((res) => {
                setPrecoCusto(res.data)
                setIsLoadingCalculo(false);
            });
    }

    function montarArrayHotfix() {
        let arrayHotfix = []

        hotfixes24.map((hotfix) => {
            arrayHotfix.push({
                id: hotfix.id || null,
                tamanho: "VINTE_QUATRO",
                larguraUtilizada: hotfix.larguraUtilizada,
                comprimentoUtilizado: hotfix.comprimentoUtilizado
            });
        });

        hotfixes32.map((hotfix) => {
            arrayHotfix.push({
                id: hotfix.id || null,
                tamanho: "TRINTA_DOIS",
                larguraUtilizada: hotfix.larguraUtilizada,
                comprimentoUtilizado: hotfix.comprimentoUtilizado
            });
        });

        return arrayHotfix;
    }
    async function buscarDados() {
        setIsLoadingData(true);

        await api.get(`/calculo/${idRoupa}`).then((res) => {
            if (res.data !== null) {
                setRoupa(res.data.roupa)
                setMaoObra(res.data.maoObra);
                setPorcentagemLucro(res.data.porcentagemLucro);
                setPrecoCusto(res.data.precoCusto);
                iniciarHotfixes(res.data.listHotfix);
            }
        })

        await api.get(`/roupas/${idRoupa}`).then((res) => {
            setRoupa(res.data)
            setIsLoadingData(false);
        });

    }

    function iniciarHotfixes(listHotfix) {
        if (listHotfix != null) {
            let hotfixes32Saved = listHotfix.filter((item) => item.tamanho === 'TRINTA_DOIS');
            let hotfixes24Saved = listHotfix.filter((item) => item.tamanho === 'VINTE_QUATRO');

            hotfixes32Saved.sort((a, b) => a.id - b.id).map((hotfix, index) => {
                hotfix.key = index;
                hotfix.deletable = index !== 0;
            });

            hotfixes24Saved.sort((a, b) => a.id - b.id).map((hotfix, index) => {
                hotfix.key = index;
                hotfix.deletable = index !== 0;
            });

            setNextId24(hotfixes24Saved.length);
            setNextId32(hotfixes32Saved.length);
            setHotfix24(hotfixes24Saved);
            setHotfix32(hotfixes32Saved);
        } else {
            setHotfix32([{
                id: null,
                key: 0,
                larguraUtilizada: 32,
                comprimentoUtilizado: 0,
                tamanho: "TRINTA_DOIS",
                deletable: false
            }])

            setHotfix24([{
                id: null,
                key: 0,
                larguraUtilizada: 24,
                comprimentoUtilizado: 0,
                tamanho: "VINTE_QUATRO",
                deletable: false
            }]);

            setNextId24(1);
            setNextId32(1);
        }
    }

    useEffect(() => {
        buscarDados();
    }, []);

    function add24() {
        setHotfix24( [
            ...hotfixes24,
            {
                key: nextId24,
                larguraUtilizada: 24,
                comprimentoUtilizado: 0,
                tamanho: "VINTE_QUATRO",
                deletable: true
            }
        ]);

        setNextId24(nextId24 + 1)
    }

    function add32() {
        setHotfix32( [
            ...hotfixes32,
            {
                key: nextId32,
                larguraUtilizada: 32,
                comprimentoUtilizado: 0,
                tamanho: "TRINTA_DOIS",
                deletable: true
            }
        ]);

        setNextId32(nextId32 + 1)
    }

    function remove24(item) {
        const newList = hotfixes24.filter(h => h.key !== item.key)
        if (newList.length === 0) {
            setHotfix24([{
                id: null,
                key: 0,
                larguraUtilizada: 24,
                comprimentoUtilizado: 0,
                tamanho: "VINTE_QUATRO",
                deletable: false
            }])
            setNextId24(1)
        }
        setHotfix24(newList)
    }

    function remove32(item) {
        const newList = hotfixes32.filter(h => h.key !== item.key)
        if (newList.length === 0) {
            setHotfix32([{
                id: null,
                key: 0,
                larguraUtilizada: 32,
                comprimentoUtilizado: 0,
                tamanho: "TRINTA_DOIS",
                deletable: false
            }])
            setNextId32(1)
        }
        setHotfix32(newList)
    }

    function handleChangeComprimento(item, valor) {
        item.comprimentoUtilizado = valor
    }

    function handleChangeLargura(item, valor) {
        item.larguraUtilizada = valor
    }

    return isLoadingData ? (
        <div className="flex justify-center items-center h-full">
            <InfinitySpin color="#566878" size={50}/>
        </div>
    ) : (
        <div className="flex flex-col justify-between gap-4 items-center mx-2 md:mx-10">
            <div className="flex justify-between w-full">
                <div className="w-[33.33%] content-center">
                    
                    <button onClick={() => router.push(`/cardlist`)} className="flex gap-2 drop-shadow p-2 bg-[#f4f4f5] rounded hover:drop-shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M360-240 120-480l240-240 56 56-144 144h488v-160h80v240H272l144 144-56 56Z"/></svg>
                        Voltar
                    </button>
                </div>
                <div className="w-[33.33%] py-10 text-center">
                    <span className="text-2xl md:text-4xl">Calculadora de Preço</span>
                </div>
                <div className="w-[33.33%]"></div>
            </div>
            <div id={`card-${roupa?.id}`} className={`w-full ${styles.card}`}>
            <div className="flex flex-col w-full justify-between">
                <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col h-full p-3 justify-between box-border">
                        <h1 className="md:text-base drop-shadow text-small text-gray-700"><b>{roupa?.nome}</b></h1>
                        <div className={`${styles.scroll} h-auto overflow-y-auto`}>
                            {
                                roupa?.pedrasVinculadas?.map(pedra => (
                                    <table key={pedra?.id} className="w-full">
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
                    </div>
                </div>
            </div>
            <div className="w-2/5">
                <Image
                    src={roupa?.imageUrl || "/img/default.jpg"}
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
                    <Input type="number" value={maoObra} onChange={(e) => setMaoObra(e.target.value)} label="Mão de obra"
                            placeholder="0.00" className="drop-shadow"></Input>
                </div>
                <div className="w-full">
                    <Input type="number" value={porcentagemLucro} onChange={(e) => setPorcentagemLucro(e.target.value)}
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
                                    <div key={item?.key}>
                                        <HotfixInput
                                            key={item?.key}
                                            hotfix={item}
                                            onChangeComprimento={handleChangeComprimento}
                                            onChangeLargura={handleChangeLargura}
                                            deletable={item?.deletable}
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
                                    <div key={item?.key}>
                                        <HotfixInput
                                            id={item?.key}
                                            hotfix={item}
                                            onChangeComprimento={handleChangeComprimento}
                                            onChangeLargura={handleChangeLargura}
                                            deletable={item?.deletable}
                                            onClickAdd={add24}
                                            onClickDelete={remove24}/>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div>
                    <div className="flex border rounded-lg drop-shadow mt-6 mb-6">
                        <Button isLoading={isLoadingCalculo}
                                radius="none"
                                onPress={calcular}
                                className="inline-flex hover:bg-gray-600 active:bg-gray-700 items-center px-3 text-sm rounded-s-lg bg-gray-500 text-white">
                            {isLoadingCalculo ? "Calculando": "Calcular"}
                        </Button>
                        <span className="inline-flex items-center px-2 text-sm bg-pastelgreen-400 text-white">
                    R$
                </span>
                        <input type="text"
                               id="website-admin"
                               disabled
                               onChange={(e) => setPrecoCusto(e.target.value)}
                               value={precoCusto}
                               className="rounded-e-lg disabled:bg-white text-right text-gray-900 block min-w-0 w-full focus:outline-none focus:ring-1 text-sm p-2.5"
                               placeholder="0"/>
                    </div>
                </div>
            </div>
        </div>
    );
}