import {useEffect, useState} from "react";
import Input from "/app/components/input/Input";

export default function ItemInput(props) {
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
                    <Input></Input>
                </div>
                {
                    props.deletable ?
                    <div className="w-fit h-full">
                        <button
                            onClick={(e) => props.onClickDelete(props)}
                            className="ml-2 w-[42px] h-[42px] flex justify-center align-middle hover:bg-red-500 active:bg-red-600 items-center rounded-lg bg-red-400 text-white">
                            ×
                        </button>
                    </div>
                    :
                    <div className="w-fit h-full">
                        <button
                            onClick={props.onClickAdd}
                            className="ml-2 w-[42px] h-[42px] flex justify-center align-middle hover:bg-pastelgreen-500 active:bg-pastelgreen-600 items-center rounded-lg bg-pastelgreen-400 text-white">
                            +
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}