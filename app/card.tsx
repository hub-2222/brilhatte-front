import Image from "next/image";

export default function Cards() {
    return (
        <div>
            <ul className="grid grid-cols-1 gap-y-10 gap-x-6 items-start p-8">
                <li className="relative flex flex-col sm:flex-row items-start">
                    <div className="order-1 sm:ml-6 ">
                        <h3 className="mb-1 text-slate-900 font-semibold">
                            <span className="mb-1 block text-sm leading-6 text-indigo-500">Headless UI</span>Completely unstyled, fully accessible UI components
                        </h3>
                        <div className="prose prose-slate prose-sm text-slate-600">
                            <p>Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.</p>
                        </div>
                    </div>
                    <Image 
                        src="/img/ARTE_-_ELEG0018.jpg" 
                        alt=""
                        className="mb-6 shadow-md w-full rounded-lg bg-slate-50 sm:w-[17rem] sm:mb-0"
                        width="1162" 
                        height="1600" 
                    />
                </li>
            </ul>
        </div>
    )
}