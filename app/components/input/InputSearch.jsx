import Image from "next/image";

export default function Input(props) {
    return (
        <div>
           <div className="w-fill flex justify-end items-center relative mb-6 drop-shadow m-10">
                <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900">{props.label}</label>
                <input type="text"
                       id="default-input"
                    placeholder={props.placeholder}
                    className="placeholder:text-gray-400 placeholder:text-left w-full border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5"/>

                <img src="/img/icons8-search-32.png" className="absolute mr-2 w-5" alt="Search Icon" />
            </div>

        </div>
    )
}