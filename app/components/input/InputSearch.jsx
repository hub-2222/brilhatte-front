import Image from "next/image";
import {useState} from "react";
import {Input} from "@heroui/input";

export default function CustomInput(props) {
    const [valueSearch, setValueSearch] = useState()

    function handleSearch(e, value) {
        e.preventDefault();
        e.stopPropagation();

        setValueSearch(value)
        props.onChange(value)
    }

    return (
        <div>
           <div className="w-fill md:px-0 px-4 flex justify-end items-center relative mt-6 mb-6 drop-shadow">
                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900">{props.label}</label>
                <Input onBlur={(e) => handleSearch(e, e.target.value)}
                       label={props.label}
                       placeholder={props.placeholder}
                       className="drop-shadow"></Input>

                <img onClick={handleSearch} src="/img/icons8-search-32.png" className="absolute mr-2 w-5" alt="Search Icon" />
            </div>
        </div>
    )
}