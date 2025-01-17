import {useEffect, useState} from "react";
import {Input} from "@heroui/input";
import {Autocomplete, AutocompleteItem} from "@nextui-org/react";

export default function ItemInput(props) {
    const animals = [
        {label: "Cat", key: "cat", description: "The second most popular pet in the world"},
        {label: "Dog", key: "dog", description: "The most popular pet in the world"},
        {label: "Elephant", key: "elephant", description: "The largest land animal"},
        {label: "Lion", key: "lion", description: "The king of the jungle"},
        {label: "Tiger", key: "tiger", description: "The largest cat species"},
        {label: "Giraffe", key: "giraffe", description: "The tallest land animal"},
        {
          label: "Dolphin",
          key: "dolphin",
          description: "A widely distributed and diverse group of aquatic mammals",
        },
        {label: "Penguin", key: "penguin", description: "A group of aquatic flightless birds"},
        {label: "Zebra", key: "zebra", description: "A several species of African equids"},
        {
          label: "Shark",
          key: "shark",
          description: "A group of elasmobranch fish characterized by a cartilaginous skeleton",
        },
        {
          label: "Whale",
          key: "whale",
          description: "Diverse group of fully aquatic placental marine mammals",
        },
        {label: "Otter", key: "otter", description: "A carnivorous mammal in the subfamily Lutrinae"},
        {label: "Crocodile", key: "crocodile", description: "A large semiaquatic reptile"},
      ];

      const myFilter = (textValue, inputValue) => {
        if (inputValue.length === 0) {
          return true;
        }
    
        // Normalize both strings so we can slice safely
        // take into account the ignorePunctuation option as well...
        textValue = textValue.normalize("NFC").toLocaleLowerCase();
        inputValue = inputValue.normalize("NFC").toLocaleLowerCase();
    
        return textValue.slice(0, inputValue.length) === inputValue;
      };
    

    const [largura, setLargura] = useState(0)
    const [comprimento, setComprimento] = useState(0)
    const colourOptions = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

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
                <div className="flex w-full gap-2 pr-2">
                    <div className={`w-full drop-shadow`}>
                        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                            <Autocomplete label="Selecione">
                                {animals.map((animal) => (
                                <AutocompleteItem key={animal.key}>{animal.label}</AutocompleteItem>
                                ))}
                            </Autocomplete>
                        </div>
                    </div>
                    <div>
                        <Input label="Quantidade"
                               type="number"
                               placeholder="0"
                               className="drop-shadow"></Input>
                    </div>
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