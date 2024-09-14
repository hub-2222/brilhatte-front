import Input from "@/app/components/input/Input";

export default function Calculo() {

    return (
        <div className="flex-auto flex-col space-y-5 justify-center items-center">
            <div>
                <h1>Calcular preço de custo</h1>
            </div>
            <div>
                //AQUI VAI O CARD
            </div>
            <div className="basis-4/12 grow-1">
                <Input label="Mão de obra" placeholder="0.00"></Input>
            </div>
            <div className="basis-1/2 grow-0">
                <div className="w-1/2">
                    <label htmlFor="website-admin"
                           className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                    <div className="flex border rounded drop-shadow">
                        <span className="inline-flex items-center px-3 text-sm rounded-s-md bg-gray-600 text-white">
                            Calcular
                        </span>
                        <span className="inline-flex items-center px-2 text-sm bg-pastelgreen text-white">
                            R$
                        </span>
                        <input type="text"
                               id="website-admin"
                               className="rounded-none rounded-e-lg text-gray-900 block min-w-0 w-full text-sm p-2.5"
                               placeholder="elonmusk"/>
                    </div>
                </div>
            </div>
        </div>
    );
}