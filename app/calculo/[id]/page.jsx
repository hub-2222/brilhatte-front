"use client"
import {Input} from "@heroui/input";
import Image from "next/image";
import HotfixInput from "@/app/components/input/HotfixInput";
import {useState} from "react";
import {api} from "@/app/api/api";
import styles from "./calculo.module.css"

export default function Page(props) {

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
            roupa: props.roupa,
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

    return (
        
        <div className="flex flex-col justify-evenly gap-4 items-center mx-10">
            <div className="p-10 text-center">
                <span className="text-2xl md:text-4xl">Calculadora de Preço</span>
            </div>
            <div className="flex gap-4 md:w-1/2 w-4/5">
                <div className="md:h-[200px] md:w-[200px] h-[100px] w-[200px] relative bg-black">
                    <Image
                        src="/img/ARTE_-_ELEG0018.jpg"
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
                <div className="p-4 bg-white w-full rounded drop-shadow">
                    <h1><b>{props.roupa?.nome}</b></h1>
                    <p>Pedras:</p>
                    <ul className="sm:text-xs">
                        {
                            props.roupa?.pedrasVinculadas?.map(pedra => (
                                <li key={pedra.id}>{pedra.nome} - {pedra.quantidade} unidades</li>
                            ))
                        }
                    </ul>
                    <p>Tamanho:</p>
                    <ul className="">
                        {
                            props.roupa?.comprimentoFrente>0? <li>Frente: L: {props.roupa?.larguraFrente}cm C: {props.roupa?.comprimentoFrente}cm </li> : ''
                        }

                        {
                            props.roupa?.comprimentoCostas>0? <li>Costas: L: {props.roupa?.larguraCostas}cm C: {props.roupa?.comprimentoCostas}cm </li> : ''
                        }
                    </ul>
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
            <div className="w-full flex flex-col gap-4  md:flex-row">
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
            <div className="w-full">
                <div>
                    <div className="flex border rounded-lg drop-shadow mt-10 mb-10">
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