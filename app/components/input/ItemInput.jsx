import {useEffect, useState} from "react";
import {Input} from "@heroui/input";
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
import React from "react";
import {api} from "../../api/api";
import {useAsyncList} from "@react-stately/data";


export default function ItemInput(props) {
    const [quantidade, setQuantidade] = useState(props.value.quantidade)
    const [items, setItems] = useState([])
    const [isOpen, setIsOpen] = useState(false)

    function handleChangeQuantidade(e) {
        setQuantidade(e.target.value)
        props.onChangeQuantidade(e.target.value)
    }

    function handleChangePedra(keyPedra) {
        if (!keyPedra) {
            return;
        }

        let pedra = items.filter((item) => item.id == keyPedra);
        props.onChangePedra(pedra)
    }

    function handleFilterChange(e) {
        if (isOpen) {
            list.setFilterText(e);
        }
    }

    function handleChangeOpen(newValue) {
        if(newValue) {
            list.setFilterText(props.item.nome)
        } else {
            list.setFilterText(getNomePedra())
        }

        setIsOpen(newValue)
    }

    useEffect(() => {
        list.setFilterText(getNomePedra())
    }, []);

    let list = useAsyncList({
        async load({signal, filterText}) {
            let res = await api
                .get(`/pedras`, { params: {page: 0, size: 50, nome: filterText}, signal }, )
                .then((res) => {
                    return res;
                })
            let results = res.data.content;
            setItems(results)

            return {
                items: results
            };
        },
    });

    function getNomePedra() {
        if (props.item.nome === undefined) {
            return null;
        }

        return props.item.nome + ", " + props.item.tamanho
    }

    return (
        <div>
            <div className="flex flex-row w-full items-center">
                <div className="flex w-full gap-2 pr-2">
                    <div className={`w-full drop-shadow`}>
                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                            <Autocomplete
                                inputValue={list.filterText}
                                isLoading={list.isLoading}
                                items={list.items}
                                label="Selecione uma pedra"
                                onSelectionChange={handleChangePedra}
                                onOpenChange={handleChangeOpen}
                                onInputChange={handleFilterChange}
                            >
                                {(item) => (
                                    <AutocompleteItem key={item.id} className="capitalize">
                                        {item.nome + ", " + item.tamanho}
                                    </AutocompleteItem>
                                )}
                            </Autocomplete>
                        </div>
                    </div>
                    <div>
                        <Input label="Quantidade"
                               onChange={handleChangeQuantidade}
                               type="number"
                               placeholder="0"
                               align="text-right"
                               value={quantidade}
                               className="drop-shadow"></Input>
                    </div>
                </div>
                <div className="w-fit h-full">
                    <button
                        onClick={(e) => props.onClickDelete(props.item)}
                        className="ml-2 w-[42px] h-[42px] flex justify-center align-middle hover:bg-red-500 active:bg-red-600 items-center rounded-lg bg-red-400 text-white">
                        ×
                    </button>
            </div>
            </div>
        </div>
    )
}