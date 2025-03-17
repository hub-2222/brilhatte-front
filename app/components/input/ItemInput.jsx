import {useEffect, useState} from "react";
import {Input} from "@heroui/input";
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
import {useInfiniteScroll} from "@nextui-org/use-infinite-scroll";
import React from "react";
import {api} from "../../api/api";

export function useJoiaList({fetchDelay = 0} = {}) {

    const [items, setItems] = React.useState([]);
    const [hasMore, setHasMore] = React.useState(true);
    const [isLoading, setIsLoading] = React.useState(false);
    const [page, setPage] = React.useState(0);
    const [filter, setFilter] = React.useState("");
    const size = 10;

    const loadJoias = async (currentPage, nome) => {
        const controller = new AbortController();
        const {signal} = controller;

        try {
            setIsLoading(true);

            const res = await api
                .get(`/pedras`, { params: {page: currentPage, size, nome}, signal }, )
                .then((res) => {
                    setIsLoading(false);
                    return res;
                })

            let results = res.data.content;

            setHasMore(!res.data.last);
            let newItems = results.filter((item) => !items.some((i) => i.id === item.id));

            setItems((prevItems) => [...prevItems, ...newItems]);

        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };
    const onLoadMore = (nomePedra) => {
        setPage(page + 1);

        loadJoias(page, nomePedra);
    };

    const reset = () => {
        setItems([]);
        setPage(0);
    }

    return {
        items,
        hasMore,
        isLoading,
        onLoadMore,
        reset
    };
}

export default function ItemInput(props) {
    const [isOpen, setIsOpen] = React.useState(false);
    const {items, hasMore, isLoading, onLoadMore, reset} = useJoiaList({fetchDelay: 1500});
    const [filter, setFilter] = useState("")
    const [quantidade, setQuantidade] = useState(props.value.quantidade)

    const [, scrollerRef] = useInfiniteScroll({
        hasMore,
        isEnabled: isOpen,
        shouldUseLoader: true,
        onLoadMore,
    });

    const [largura, setLargura] = useState(0)
    const [comprimento, setComprimento] = useState(0)

    useEffect(() => {
        setLargura(props.item.largura)
        setComprimento(props.item.comprimento)
    }, []);

    function handleChangePedra(keyPedra) {
        if (!isOpen) {
            return;
        }
        let pedra = items.filter((item) => item.id == keyPedra)[0];
        props.onChangePedra(pedra)
    }

    function handleChangeQuantidade(e) {
        setQuantidade(e.target.value)
        props.onChangeQuantidade(e.target.value)
    }

    function handleOpenChange(open) {
        if(open) {
            onLoadMore();
        }
        setIsOpen(open);
    }

    function handleFilterChange(value) {
        if (filter !== value) {
            reset();
            setFilter(value);
        }
    }

    useEffect(() => {
        if (!isOpen) {
            return;
        }
        onLoadMore(filter)
    }, [filter])

    return (
        <div>
            <div className="flex flex-row w-full items-center">
                <div className="flex w-full gap-2 pr-2">
                    <div className={`w-full drop-shadow`}>
                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                            <Autocomplete defaultItems={items}
                                          inputValue={props.value.nome}
                                          allowsCustomValue
                                          isLoading={isLoading}
                                          scrollRef={scrollerRef}
                                          label="Selecione"
                                          onInputChange={handleFilterChange}
                                          onOpenChange={handleOpenChange}
                                          onSelectionChange={handleChangePedra}>
                                {(item) => (
                                    <AutocompleteItem key={item.id} className="capitalize">
                                        {item.nome}, {item.tamanho}
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