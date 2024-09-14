import Image from "next/image";

const Card = () => {
    return (
        <div className="flex m-10 rounded-lg bg-white shadow-lg shrink-0 shadow-black-500/50 ">
            <div className="flex flex-col">
                <Image
                    src="/img/ARTE_-_ELEG0018.jpg"
                    alt="Logo"
                    className=''
                    height={1}
                    width={180}
                    objectFit='cover'
                    objectPosition='center'
                />
            </div>

            <div className="p-5">
                <h1>AMAR0199 - 517BL000024</h1>
                <ul> Pedras:
                    <li>Sextavado black 3mm - 24700 peças</li>
                    <li>Sextavado gold 3mm - 4439 peças</li>
                    <li>Sextavado brow 3mm - 10547 peças</li>
                </ul>
            </div>
        </div>
    )
}

export default Card