import { Pause, Repeat, Shuffle, SkipBack, SkipForward, Heart, ListMusic, Maximize2, Mic2, Smartphone, Volume1 } from "lucide-react";
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className='h-1/6 p-2 flex items-center justify-between'>
            <div className="w-52 flex items-center justify-between">
                <a href="#" className="flex items-center gap-3">
                    <Image src={"/img/BornToDie-2.jpg"} width={60} height={60} alt='Capa do album Born to Die da Lana del Rey' className="rounded-xl" />
                    <div className="text-neutral-300 flex flex-col gap-1">
                        <p className="font-bold text-sm hover:underline">Dark Paradise</p>
                        <p className="text-neutral-400 text-xs hover:underline">Lana del Rey</p>
                    </div>
                </a>
                <a href="#" className="text-neutra-500 hover:text-neutral-300 transition-all duration-500"><Heart size={18} /></a>
            </div>

            <div className="flex w-2/5 flex-col justify-center items-center h-full">
                <div className="flex gap-4 p-3">
                    <button className="text-neutral-500 p-2 hover:text-neutral-300"><Shuffle size={20} /></button>
                    <button className="text-neutral-300 p-2 hover:text-neutral-100"><SkipBack size={20} className="fill-white" /></button>
                    <button className=" p-2 bg-neutral-300 text-black rounded-full "><Pause size={20} className="fill-black" /></button>
                    <button className="text-neutral-300 p-2 hover:text-neutral-100"><SkipForward size={20} className="fill-white" /></button>
                    <button className="text-neutral-500 p-2 hover:text-neutral-300"><Repeat size={20} /></button>
                </div>
                <div className="bg-neutral-500 w-full h-1 rounded-lg">
                    <div className="bg-neutral-300 w-1/4 h-1 rounded-lg"></div>
                </div>
                <span className="flex justify-between w-full text-xs text-neutral-400 p-1"><p>1:04</p><p>4:03</p></span>
            </div>

            <div className="flex items-center gap-3 text-neutral-400">
                <button className="hover:text-neutral-300"><Mic2 size={18} /></button>
                <button className="hover:text-neutral-300"><ListMusic size={18} /></button>
                <button className="hover:text-neutral-300"><Smartphone size={18} /></button>
                <button className="hover:text-neutral-300"><Volume1 size={18} /></button>
                <div className="w-20 bg-neutral-500 h-1 rounded-lg">
                    <div className="w-1/4 bg-neutral-300 h-1 rounded-lg"></div>
                </div>
                <button className="hover:text-neutral-300"><Maximize2 size={18} /></button>
            </div>

        </footer>
    )
}