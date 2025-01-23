import Image from "next/image";
import {Input} from "@heroui/input";

export default function Page(props) {
    return (
        <div>
           <div className="w-fill md:px-0 px-4 flex justify-end items-center relative mt-6 mb-6 drop-shadow">
              <Input label={props.label}
                     placeholder={props.placeholder}
                     className="drop-shadow"></Input>
                <img src="/img/icons8-search-32.png" className="absolute mr-2 w-5" alt="Search Icon" />
            </div>

        </div>
    )
}