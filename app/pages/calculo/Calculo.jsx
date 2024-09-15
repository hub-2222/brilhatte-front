import Input from "/app/components/input/Input";
import Card from "@/app/components/card/Card";

export default function Calculo() {

    return (
        <div className="flex flex-col justify-between items-center space-y-2 mx-32">
            <div>
                <span className="text-2xl">Calcular preço de custo</span>
            </div>
            <div className="w-full">
                <Card></Card>
            </div>
            <div className="w-full">
                <Input label="Mão de obra" placeholder="0.00"></Input>
            </div>
            <div className="basis-4/12">
                <label className="mb-2 text-sm font-medium text-gray-700">Hotfix 32cm</label>
                <div className="flex flex-row w-full">
                    <div className="w-1/6 pr-2">
                        <label className="mb-2 text-xs font-medium text-gray-400 text-nowrap">Largura utilizada</label>
                        <input type="text"
                               id="hotfix-32-l"
                               className="rounded-lg border border-gray-300 drop-shadow text-right text-gray-900 min-w-0 w-full focus:outline-none focus:ring-1 text-sm p-2.5"
                               placeholder="0"/>
                    </div>
                    <div className="w-full">
                        <label className="mb-2 text-xs font-medium text-gray-400">Comprimento utilizado</label>
                        <input type="text"
                               id="hotfix-32-c"
                               className="rounded-lg border border-gray-300 drop-shadow text-right text-gray-900 min-w-0 w-full focus:outline-none focus:ring-1 text-sm p-2.5"
                               placeholder="0"/>
                    </div>
                </div>
            </div>
            <div className="basis-4/12 grow-1">
                <label className="mb-2 text-sm font-medium text-gray-700 ">Hotfix 24cm</label>
                <div className="flex flex-row grow-0 w-full">
                    <div className="w-1/6 pr-2">
                        <label className="mb-2 text-xs font-medium text-gray-400 overflow-ellipsis text-nowrap">Largura utilizada</label>
                        <input type="text"
                               id="hotfix-32-l"
                               className="rounded-lg border border-gray-300 drop-shadow text-right text-gray-900 min-w-0 w-full focus:outline-none focus:ring-1 text-sm p-2.5"
                               placeholder="0"/>
                    </div>
                    <div className="w-full">
                        <label className="mb-2 text-xs font-medium text-gray-400">Comprimento utilizado</label>
                        <input type="text"
                               id="hotfix-32-c"
                               className="rounded-lg border border-gray-300 drop-shadow text-right text-gray-900 min-w-0 w-full focus:outline-none focus:ring-1 text-sm p-2.5"
                               placeholder="0"/>
                    </div>
                </div>
            </div>
            <div className="basis-4/12 grow-1">

            </div>
            <div className="w-full">
                <div>
                    <label htmlFor="website-admin"
                           className="block mb-2 text-sm font-medium text-gray-700">Username</label>
                    <div className="flex border rounded-lg drop-shadow">
                        <span className="inline-flex items-center px-3 text-sm rounded-s-lg bg-gray-600 text-white">
                            Calcular
                        </span>
                        <span className="inline-flex items-center px-2 text-sm bg-pastelgreen text-white">
                            R$
                        </span>
                        <input type="text"
                               id="website-admin"
                               className="rounded-e-lg text-right text-gray-900 block min-w-0 w-full focus:outline-none focus:ring-1 text-sm p-2.5"
                               placeholder="0"/>
                    </div>
                </div>
            </div>
        </div>
    );
}