import Image from 'next/image'

export default function Feito() {
    return (
        <div>
            <h2 className="text text-2xl text-neutral-300 font-bold p-2 pl-3">Feito para Hudson</h2>
            <div className='flex gap-5 p-3'>
                <div className=" bg-neutral-800 rounded-lg flex flex-col items-center p-2 hover:bg-neutral-700 cursor-pointer">
                    <Image src={"/img/BornToDie2.jpg"} width={150} height={120} alt="Album Born to Die - Lana del Rey" className='rounded-lg' />
                    <div className='w-full py-2'>
                        <h4 className='font-semibold text-neutral-200 mb-1 mx-2'>Daily Mix 1</h4>
                        <p className='text-sm mx-2'>Lana del Rey, Rihanna, Billie Ellish, Alec Benjamin...</p>
                    </div>
                </div>

                <div className="bg-neutral-800 rounded-lg flex flex-col items-center p-2 hover:bg-neutral-700 cursor-pointer">
                    <Image src={"/img/Honeymoon.jpg"} width={150} height={120} alt="Album Honeymoon - Lana del Rey" className='rounded-lg' />
                    <div className='w-full py-2'>
                        <h4 className='font-semibold text-neutral-200 mb-1 mx-2'>Daily Mix 2</h4>
                        <p className='text-sm mx-2'>Lana del Rey, Rihanna, Billie Ellish, Alec Benjamin...</p>
                    </div>
                </div>

                <div className="bg-neutral-800 rounded-lg flex flex-col items-center p-2 hover:bg-neutral-700 cursor-pointer">
                    <Image src={"/img/Norman.jpg"} width={150} height={120} alt="Album Norman - Lana del Rey" className='rounded-lg' />
                    <div className='w-full py-2'>
                        <h4 className='font-semibold text-neutral-200 mb-1 mx-2'>Daily Mix 3</h4>
                        <p className='text-sm mx-2'>Lana del Rey, Rihanna, Billie Ellish, Alec Benjamin...</p>
                    </div>
                </div>

                <div className="bg-neutral-800 rounded-lg flex flex-col items-center p-2 hover:bg-neutral-700 cursor-pointer">
                    <Image src={"/img/Ultraviolence.jpg"} width={150} height={120} alt="Album Ultraviolence - Lana del Rey" className='rounded-lg' />
                    <div className='w-full py-2'>
                        <h4 className='font-semibold text-neutral-200 mb-1 mx-2'>Daily Mix 4</h4>
                        <p className='text-sm mx-2'>Lana del Rey, Rihanna, Billie Ellish, Alec Benjamin...</p>
                    </div>
                </div>

                <div className="bg-neutral-800 rounded-lg flex flex-col items-center p-2 hover:bg-neutral-700 cursor-pointer">
                    <Image src={"/img/LustForLife.jpg"} width={150} height={120} alt="Album Lust for Life - Lana del Rey" className='rounded-lg' />
                    <div className='w-full py-2'>
                        <h4 className='font-semibold text-neutral-200 mb-1 mx-2'>Daily Mix 5</h4>
                        <p className='text-sm mx-2'>Lana del Rey, Rihanna, Billie Ellish, Alec Benjamin...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}