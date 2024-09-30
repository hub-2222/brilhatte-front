"use client"
import Input from "/app/components/input/Input";
import Card from "@/app/components/card/Card";
import HotfixInput from "@/app/components/input/HotfixInput";
import {useState} from "react";

export default function Calculo() {

    const json2 = [
        {
            "id": 1,
            "nome": "Vestido",
            "comprimentoFrente": 0.0,
            "comprimentoCostas": 0.0,
            "larguraFrente": 0.0,
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
        }
    ]

    const json3 = {
        idRoupa: 1,
        pedras: [
            {
                id: 1
            },
            {
                id:2
            }
        ],
        hotfixes: [
            {
                "tamanho": "VINTE_QUATRO",
                "largura": 24,
                "comprimento": 32
            },
            {
                "tamanho": "TRINTA_DOIS",
                "largura": 28,
                "comprimento": 80
            }
        ],
        porcentagem_lucro: 0.5,
        mao_obra: 50
    }

    const [nextId32, setNextId32] = useState(0)
    const [nextId24, setNextId24] = useState(0)
    const [maoObra, setMaoObra] = useState(0)
    const [precoCusto, setPrecoCusto] = useState(0)
    const [porcentagemLucro, setPorcentagemLucro] = useState(0)

    const [hotfixes24, setHotfix24] = useState([
        {
            id: 0,
            largura: 0,
            comprimento: 0,
            deletable: false
        }
    ])

    const [hotfixes32, setHotfix32] = useState([
        {
            id: 0,
            largura: 0,
            comprimento: 0,
            deletable: false
        }
    ])
    function calcular() {
        console.log(this.state)
    }

    function add32() {
        let prox = nextId32 + 1;
        setHotfix32( [
            ...hotfixes32,
            {
                id: prox,
                largura: 0,
                comprimento: 0,
                deletable: true
            }
        ]);

        setNextId32(prox)
    }

    function remove32(item) {
        const newList = hotfixes32.filter(h => h.id !== item.id)
        setHotfix32(newList)
    }

    function handleChangeHotfix32(id, valor) {

    }

    function add24() {
        let prox = nextId24 + 1;
        setHotfix24( [
            ...hotfixes24,
            {
                id: prox,
                largura: 0,
                comprimento: 0,
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
        <div className="flex flex-col justify-between items-center h-screen fds overflow-y-auto space-y-2 mx-32">
            <div>
                <span className="text-2xl">Calcular preço de custo</span>
            </div>
            <div className="w-full">
                <Card unclickable={true}></Card>
            </div>
            <div className="flex flex-row w-full">
                <div className="w-full pr-2">
                    <Input onChange={(maoObra) => setMaoObra(maoObra)} teste={maoObra} label="Mão de obra" placeholder="0.00"></Input>
                </div>
                <div className="w-full">
                    <Input onChange={(porcentagemLucro) => setPorcentagemLucro(porcentagemLucro)} teste={porcentagemLucro} label="Porcentagem de lucro" placeholder="0%"></Input>
                </div>
            </div>
            <div className="w-full">
                <label className="mb-2 text-sm font-medium text-gray-700">Hotfix 32cm</label>
                {
                    hotfixes32.sort((a,b) => a.id - b.id).map(item => (
                        <div key={item.id}>
                            <HotfixInput
                            id={item.id}
                            onChange={handleChangeHotfix32}
                            deletable={item.deletable}
                            onClickAdd={add32}
                            onClickDelete={remove32}/>
                        </div>
                    ))
                }
            </div>
            <div className="w-full">
                <label className="mb-2 text-sm font-medium text-gray-700">Hotfix 24cm</label>
                {hotfixes24.sort((a,b) => a.id - b.id).map(item => (
                    <div key={item.id}>
                        <HotfixInput
                            id={item.id}
                            deletable={item.deletable}
                            onClickAdd={add24}
                            onClickDelete={remove24}/>
                    </div>
                    )
                )}
            </div>
            <div className="basis-4/12 grow-1">

            </div>
            <div className="w-full">
                <div>
                    <label htmlFor="website-admin"
                           className="block mb-2 text-sm font-medium text-gray-700">Username</label>
                    <div className="flex border rounded-lg drop-shadow">
                        <button onClick={calcular} className="inline-flex hover:bg-gray-600 active:bg-gray-700 items-center px-3 text-sm rounded-s-lg bg-gray-500 text-white">
                            Calcular
                        </button>
                        <span className="inline-flex items-center px-2 text-sm bg-pastelgreen-400 text-white">
                            R$
                        </span>
                        <input type="button"
                               id="website-admin"
                               disabled
                               onChange={(precoCusto) => setPrecoCusto(precoCusto)}
                               teste={precoCusto}
                               className="rounded-e-lg disabled:bg-white text-right text-gray-900 block min-w-0 w-full focus:outline-none focus:ring-1 text-sm p-2.5"
                               placeholder="0"/>
                    </div>
                </div>
            </div>
        </div>
    );
}