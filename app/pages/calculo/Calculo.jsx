"use client"
import Input from "/app/components/input/Input";
import Card from "@/app/components/card/Card";
import HotfixInput from "@/app/components/input/HotfixInput";
import {useState} from "react";

export default function Calculo() {

    const [hotfix, setHotfix] = useState({

    })
    function handleClick() {
        console.log("teste")
    }

    return (
        <div className="flex flex-col justify-between items-center space-y-2 mx-32">
            <div>
                <span className="text-2xl">Calcular preço de custo</span>
            </div>
            <div className="w-full">
                <Card unclickable={true}></Card>
            </div>
            <div className="flex flex-row w-full">
                <div className="w-full pr-2">
                    <Input label="Mão de obra" placeholder="0.00"></Input>
                </div>
                <div className="w-full">
                    <Input label="Porcentagem de lucro" placeholder="0%"></Input>
                </div>
            </div>
            <div className="w-full">
                <label className="mb-2 text-sm font-medium text-gray-700">Hotfix 32cm</label>
                <div className="flex flex-row items-center">
                    <div>
                        <HotfixInput></HotfixInput>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <label className="mb-2 text-sm font-medium text-gray-700">Hotfix 24cm</label>
                <HotfixInput></HotfixInput>
            </div>
            <div className="basis-4/12 grow-1">

            </div>
            <div className="w-full">
                <div>
                    <label htmlFor="website-admin"
                           className="block mb-2 text-sm font-medium text-gray-700">Username</label>
                    <div className="flex border rounded-lg drop-shadow">
                        <button onClick={handleClick} className="inline-flex hover:bg-gray-600 active:bg-gray-700 items-center px-3 text-sm rounded-s-lg bg-gray-500 text-white">
                            Calcular
                        </button>
                        <span className="inline-flex items-center px-2 text-sm bg-pastelgreen-400 text-white">
                            R$
                        </span>
                        <input type="button"
                               id="website-admin"
                               disabled
                               className="rounded-e-lg disabled:bg-white text-right text-gray-900 block min-w-0 w-full focus:outline-none focus:ring-1 text-sm p-2.5"
                               placeholder="0"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

{}