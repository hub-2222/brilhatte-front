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

    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch(event, event.target.value)
        }
    };

    return (
        <div className="flex w-full gap-2 justify-between items-center">
           <div className="w-full md:px-0 pl-4 flex justify-end items-center relative mt-6 mb-6 drop-shadow">
                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900">{props.label}</label>
                <Input onBlur={(e) => handleSearch(e, e.target.value)}
                       label={props.label}
                       onKeyDown={handleEnterPress}
                       placeholder={props.placeholder}
                       className="drop-shadow">
                </Input>

            </div>
            <div className="flex gap-1 text-white p-2 md:mr-0 mr-4 hover:bg-[#445869] active:bg-[#3d4f5e] bg-[#566878] rounded-medium drop-shadow hover:cursor-pointer">
                <svg onClick={(e) => handleSearch(e, e.target.value)}xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M80-200v-80h400v80H80Zm0-200v-80h200v80H80Zm0-200v-80h200v80H80Zm744 400L670-354q-24 17-52.5 25.5T560-320q-83 0-141.5-58.5T360-520q0-83 58.5-141.5T560-720q83 0 141.5 58.5T760-520q0 29-8.5 57.5T726-410l154 154-56 56ZM560-400q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/></svg>
                <span className="md:block hidden">Buscar</span>
            </div>
        </div>
    )
}