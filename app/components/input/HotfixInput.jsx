import {useEffect, useState} from "react";
import {Input} from "@heroui/input";

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
            <div className="flex flex-row w-full items-center">
                <div className="w-full pr-2">
                    <Input id="hotfix-32-l"
                           label="Largura (cm)"
                           placeholder="0"
                           onChange={(e) => changeLargura(props.hotfix, e.target.value)}
                           defaultValue={largura}
                           className="drop-shadow"></Input>
                </div>
                <div className="w-full">
                    <Input id="hotfix-32-l"
                            label="Comprimento (cm)"
                            placeholder="0"
                            onChange={(e) => changeComprimento(props.hotfix, e.target.value)}
                            defaultValue={comprimento}
                            className="drop-shadow"></Input>
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