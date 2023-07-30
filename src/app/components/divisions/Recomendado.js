import Image from "next/image"

export default function Recomendado(){
    return(
        <div className='border-t-2 border-neutral-800 pt-2 mt-4'>
            <h2 className="text text-2xl text-neutral-300 font-bold p-2 pl-3">Recomendado</h2>
            <div className='flex gap-5 p-3'>
                <div className=" bg-neutral-800 rounded-lg flex flex-col items-center p-2 hover:bg-neutral-700 cursor-pointer">
                    <Image src={"/img/Best.jfif"} width={150} height={120} alt="" className='rounded-lg' />
                    <div className='w-full py-2'>
                        <h4 className='font-semibold text-neutral-200 mb-1 mx-2'>Best of the Decade</h4>
                        <p className='text-sm mx-2'>Lana del Rey, Rihanna, Billie Ellish, Alec Benjamin...</p>
                    </div>
                </div>

                <div className="bg-neutral-800 rounded-lg flex flex-col items-center p-2 hover:bg-neutral-700 cursor-pointer">
                    <Image src={"/img/NoRepeat.jfif"} width={150} height={120} alt="Album Honeymoon - Lana del Rey" className='rounded-lg' />
                    <div className='w-full py-2'>
                        <h4 className='font-semibold text-neutral-200 mb-1 mx-2'>No Repeat</h4>
                        <p className='text-sm mx-2'>Lana del Rey, Rihanna, Billie Ellish, Alec Benjamin...</p>
                    </div>
                </div>

                <div className="bg-neutral-800 rounded-lg flex flex-col items-center p-2 hover:bg-neutral-700 cursor-pointer">
                    <Image src={"/img/Top50.jfif"} width={150} height={120} alt="Album Norman - Lana del Rey" className='rounded-lg' />
                    <div className='w-full py-2'>
                        <h4 className='font-semibold text-neutral-200 mb-1 mx-2'>Top 50 - Global</h4>
                        <p className='text-sm mx-2'>Lana del Rey, Rihanna, Billie Ellish, Alec Benjamin...</p>
                    </div>
                </div>

                <div className="bg-neutral-800 rounded-lg flex flex-col items-center p-2 hover:bg-neutral-700 cursor-pointer">
                    <Image src={"/img/Ultraviolence.jpg"} width={150} height={120} alt="Album Ultraviolence - Lana del Rey" className='rounded-lg' />
                    <div className='w-full py-2'>
                        <h4 className='font-semibold text-neutral-200 mb-1 mx-2'>O Melhor</h4>
                        <p className='text-sm mx-2'>Lana del Rey, Rihanna, Billie Ellish, Alec Benjamin...</p>
                    </div>
                </div>

                <div className="bg-neutral-800 rounded-lg flex flex-col items-center p-2 hover:bg-neutral-700 cursor-pointer">
                    <Image src={"/img/Top50B.jfif"} width={150} height={120} alt="" className='rounded-lg' />
                    <div className='w-full py-2'>
                        <h4 className='font-semibold text-neutral-200 mb-1 mx-2'>Top 50 - Brasil</h4>
                        <p className='text-sm mx-2'>Lana del Rey, Rihanna, Billie Ellish, Alec Benjamin...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}