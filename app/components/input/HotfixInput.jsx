import {useEffect, useState} from "react";

export default function HotfixInput(props) {
    const [largura, setLargura] = useState(0)
    const [comprimento, setComprimento] = useState(0)

    useEffect(() => {
        setLargura(props.hotfix.largura)
        setComprimento(props.hotfix.comprimento)
    }, []);

    function changeLargura(hotfix, value) {
        setLargura(value)
        props.onChangeLargura(hotfix, value)
    }

    function changeComprimento(hotfix, value) {
        setComprimento(value)
        props.onChangeComprimento(hotfix, value)
    }

    return (
        <div>
            <div className="flex flex-row w-full items-end">
                <div className="w-full pr-2">
                    <span className="mb-2 text-xs font-medium text-gray-700 ellipsis">Largura (cm)</span>
                    <input type="number"
                           onChange={(e) => changeLargura(props.hotfix, e.target.value)}
                           id="hotfix-32-l"
                           value={largura}
                           className="rounded-lg border border-gray-300 drop-shadow text-right text-gray-900 min-w-0 w-full focus:outline-none focus:ring-1 text-sm p-2.5"
                           placeholder="0"/>
                </div>
                <div className="w-full">
                    <label className="mb-2 relative text-xs font-medium text-right text-gray-700">Comprimento (cm)</label>
                    <input type="number"
                           value={comprimento}
                           onChange={(e) => changeComprimento(props.hotfix, e.target.value)}
                           id="hotfix-32-c"
                           className="rounded-lg border border-gray-300 drop-shadow text-right text-gray-900 min-w-0 w-full focus:outline-none focus:ring-1 text-sm p-2.5"
                           placeholder="0"/>
                </div>
                {
                    props.deletable ?
                    <div className="w-fit h-full">
                        <button
                            onClick={(e) => props.onClickDelete(props)}
                            className="ml-2 w-10 h-10 flex justify-center align-middle hover:bg-red-500 active:bg-red-600 items-center rounded-lg bg-red-400 text-white">
                            ×
                        </button>
                    </div>
                    :
                    <div className="w-fit h-full">
                        <button
                            onClick={props.onClickAdd}
                            className="ml-2 w-10 h-10 flex justify-center align-middle hover:bg-pastelgreen-500 active:bg-pastelgreen-600 items-center rounded-lg bg-pastelgreen-400 text-white">
                            +
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}