"use client"
import Input from "/app/components/input/Input";
import Card from "@/app/components/card/Card";
import HotfixInput from "@/app/components/input/HotfixInput";
import {useState} from "react";
import {api} from "@/app/api/api";

export default function Calculo(props) {

    // const json2 = [
    //     {
    //         "id": 1,
    //         "nome": "Vestido",
    //         "comprimentoFrente": 0.0,
    //         "comprimentoCostas": 0.0,
    //         "larguraFrente": 0.0,
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
    //     }
    // ]
    //
    // const json3 = {
    //     idRoupa: 1,
    //     pedras: [
    //         {
    //             id: 1
    //         },
    //         {
    //             id:2
    //         }
    //     ],
    //     hotfixes: [
    //         {
    //             "tamanho": "VINTE_QUATRO",
    //             "largura": 24,
    //             "comprimento": 32
    //         },
    //         {
    //             "tamanho": "TRINTA_DOIS",
    //             "largura": 28,
    //             "comprimento": 80
    //         }
    //     ],
    //     porcentagem_lucro: 0.5,
    //     mao_obra: 50
    // }

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
        props.roupa != null
            ?
            <div className="flex flex-col justify-between items-center h-screen fds space-y-2 mx-32">
                <div>
                    <span className="text-2xl">Calcular preço de custo</span>
                </div>
                <div className="w-full">
                    <Card roupa={props.roupa} unclickable={true}></Card>
                </div>
                <div className="flex flex-row w-full">
                    <div className="w-full pr-2">
                        <Input type="number" onChange={(maoObra) => setMaoObra(maoObra)} teste={maoObra} label="Mão de obra"
                               placeholder="0.00"></Input>
                    </div>
                    <div className="w-full">
                        <Input type="number" onChange={(porcentagemLucro) => setPorcentagemLucro(porcentagemLucro)}
                               teste={porcentagemLucro} label="Porcentagem de lucro" placeholder="0%"></Input>
                    </div>
                </div>
                <div className="w-full h-4/5 overflow-y-auto pr-3 shadow-inner">
                    <div className="">
                        <label className="mb-2 text-sm font-medium text-gray-700">Hotfix 32cm</label>
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
                    <div className="">
                        <label className="mb-2 text-sm font-medium text-gray-700">Hotfix 24cm</label>
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
                <div className="w-full">
                    <div>
                        <div className="flex border rounded-lg drop-shadow">
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
            :
            <div className="h-screen fds flex flex-col justify-center items-center">
                <span
                    className="text-2xl text-center font-bold	text-neutral-700">Calculadora Preço de Venda</span>
                <span className="text-center px-20 py-8">Para continuar, por favor, selecione uma das opções disponíveis no menu à esquerda. Clique no item desejado para prosseguir.</span>
            </div>

    );
}