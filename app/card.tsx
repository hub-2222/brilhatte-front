import Image from "next/image";

export default function Cards(props) {
    return (
        <div>
            <ul className="grid grid-cols-1 gap-y-10 gap-x-6 items-start p-8">
                <li className="relative flex flex-col sm:flex-row items-start">
                    <div className="order-1 sm:ml-4 ">
                        <h3 className="mb-1 text-slate-900 font-semibold">
                            <span className="mb-1 block text-sm leading-6 text-indigo-500">{props.nome}</span>
                        </h3>
                        <div className="prose prose-slate prose-sm text-slate-600">
                            <span>
                                Pedras:
                                <ul>
                                    <li>

                                    </li>
                                </ul>
                            </span>
                        </div>
                    </div>
                    <Image 
                        src="/img/ARTE_-_ELEG0018.jpg" 
                        alt=""
                        className="mb-6 h-26 w-24 shadow-md rounded-lg bg-slate-50 sm:mb-0"
                        width="1162" 
                        height="1600"
                    />
                </li>
            </ul>
        </div>
    )
}