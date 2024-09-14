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
                <div>
                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-sky-400">Mão de obra</label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input type="text" name="price" id="price" className="block text-right w-1/2 rounded-md border-0 py-1.5 pl-7 pr-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                               placeholder="0.00"/>
                    </div>
                </div>
            </div>
        </div>
    );
}