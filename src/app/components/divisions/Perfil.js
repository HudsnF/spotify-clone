import { ChevronLeft, ChevronRight, ArrowDownToLine } from 'lucide-react'
import Image from 'next/image'

export default function Perfil (){
    return(
        <div className="w-full h-16 p-4 rounded-tl-lg rounded-tr-lg flex justify-between">
            <div className="flex items-center gap-2">
                <button className="bg-zinc-950 text-zinc-400 p-1 rounded-full hover:bg-zinc-800 hover:text-zinc-300 transition-all duration-500"><ChevronLeft size={20} /></button>
                <button className="bg-zinc-950 text-zinc-400 p-1 rounded-full hover:bg-zinc-800 hover:text-zinc-300 transition-all duration-500"><ChevronRight size={20} /></button>
            </div>
            <div className="flex items-center gap-4">
                <div className="bg-zinc-950 w-46 rounded-xl p-1.5">
                    <button className="flex items-center gap-2 text-sm font-bold "><ArrowDownToLine size={16} />Instalar aplicativo</button>
                </div>
                <Image src={"/img/Perfil.jpg"} width={30} height={25} alt="Image of profile" className="rounded-full border-4 border-black" />
            </div>
        </div>
    )
}