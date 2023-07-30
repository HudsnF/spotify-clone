import Image from "next/image"

export default function Albums() {
    return (
        <div>
            <div className="pl-3 pb-3 text-3xl font-extrabold text-neutral-200">
                <h1>Boa Noite</h1>
            </div>
            <div className='grid grid-cols-3'>
                <div className="flex bg-neutral-800 m-3 text-neutral-200 hover:bg-neutral-700 transition-all duration-500 cursor-pointer rounded-lg overflow-hidden">
                    <Image src={"/img/Ultraviolence.jpg"} width={80} height={80} alt='' />
                    <div className="h-20  flex flex-col justify-center p-3 font-bold">
                        <p>ULTRAVIOLENCE</p>
                        <p className="text-neutral-400 text-xs">Lana Del Rey</p>
                    </div>
                </div>

                <div className="flex bg-neutral-800 m-3 text-neutral-200 hover:bg-neutral-700 transition-all duration-500 cursor-pointer rounded-lg overflow-hidden">
                    <Image src={"/img/BlueBanisters.jpg"} width={80} height={80} alt='' />
                    <div className="h-20  flex flex-col justify-center p-3 font-bold">
                        <p>Blue Banisters</p>
                        <p className="text-neutral-400 text-xs">Lana Del Rey</p>
                    </div>
                </div>

                <div className="flex bg-neutral-800 m-3 text-neutral-200 hover:bg-neutral-700 transition-all duration-500 cursor-pointer rounded-lg overflow-hidden">
                    <Image src={"/img/BornToDie.jpg"} width={80} height={80} alt='' />
                    <div className="h-20  flex flex-col justify-center p-3 font-bold">
                        <p>Born to Die</p>
                        <p className="text-neutral-400 text-xs">Lana Del Rey</p>
                    </div>
                </div>

                <div className="flex bg-neutral-800 m-3 text-neutral-200 hover:bg-neutral-700 transition-all duration-500 cursor-pointer rounded-lg overflow-hidden">
                    <Image src={"/img/BornToDie2.jpg"} width={80} height={80} alt='' />
                    <div className="h-20  flex flex-col justify-center p-3 font-bold">
                        <p>Born to Die - The Paradise Edition</p>
                        <p className="text-neutral-400 text-xs">Lana Del Rey</p>
                    </div>
                </div>

                <div className="flex bg-neutral-800 m-3 text-neutral-200 hover:bg-neutral-700 transition-all duration-500 cursor-pointer rounded-lg overflow-hidden">
                    <Image src={"/img/Honeymoon.jpg"} width={80} height={80} alt='' />
                    <div className="h-20  flex flex-col justify-center p-3 font-bold">
                        <p>Honeymoon</p>
                        <p className="text-neutral-400 text-xs">Lana Del Rey</p>
                    </div>
                </div>

                <div className="flex bg-neutral-800 m-3 text-neutral-200 hover:bg-neutral-700 transition-all duration-500 cursor-pointer rounded-lg overflow-hidden">
                    <Image src={"/img/Norman.jpg"} width={80} height={80} alt='' />
                    <div className="h-20  flex flex-col justify-center p-3 font-bold">
                        <p>Norman Fucking Rockwell!</p>
                        <p className="text-neutral-400 text-xs">Lana Del Rey</p>
                    </div>
                </div>
            </div>
        </div>
    )
}