
import { HomeIcon, Search, Library, Plus, ArrowRight, ChevronDown, Pin, PinIcon } from 'lucide-react'
import Image from 'next/image'

export default function Aside() {
    return (
        <aside className="w-80 h-full flex flex-col gap-2">
            <nav className="h-1/5 p-6 bg-neutral-900 flex flex-col gap-5 justify-center rounded-lg">
                <a href="#" className="flex items-center gap-5 font-bold  hover:text-neutral-200 transition-all duration-200"><HomeIcon size={24} />Início</a>
                <a href="#" className="flex items-center gap-5 font-bold  hover:text-neutral-200 transition-all duration-200"><Search size={24} />Buscar</a>
            </nav>

            <div className="bg-neutral-900 h-5/6 rounded-lg">
                <div className='flex justify-between p-4 pl-6 h-1/6'>
                    <a href='#' className='flex items-center gap-2 font-bold hover:text-neutral-200 transition-all duration-200'><Library size={26} />Sua Biblioteca </a>
                    <div className='flex gap-3 items-center'>
                        <a href='#' className='rounded-full p-0.5 hover:bg-neutral-800 hover:text-neutral-200 transition-all duration-500'><Plus size={24} /> </a>
                        <a href='#' className='rounded-full p-0.5 hover:bg-neutral-800 hover:text-neutral-200 transition-all duration-200'><ArrowRight size={24} /> </a>
                    </div>
                </div>

                <div className="pl-4 pb-2 bg-neutral-900 flex gap-2">
                    <button className="bg-neutral-800 py-1.5 px-3 rounded-3xl font-semibold text-sm text-neutral-200 hover:bg-neutral-700 transition-all duration-200">Playlists</button>
                    <button className="bg-neutral-800 py-1.5 px-3 rounded-3xl font-semibold text-sm text-neutral-200 hover:bg-neutral-700 transition-all duration-200">Albums</button>
                </div>


                <div className='px-2 py-2 h h-72 overflow-y-scroll scrollbar-thin scrollbar-thumb-neutral-600 scrollbar-track-transparente
                '>
                    <div className='py-2 px-2 flex justify-between'>
                        <a href='#' className="rounded-full p-1 hover:bg-neutral-700 transition-all duration-200"><Search size={18} /></a>
                        <a href='#' className=" flex items-center gap-2 text-sm font-semibold hover:text-neutral-200 transition-all duration-200">Recents <ChevronDown size={18} /></a>
                    </div>

                    <div className='flex items-center gap-2 py-2 rounded-lg cursor-pointer hover:bg-neutral-800' >
                        <Image src={"/img/LikedSong.jfif"} width={50} height={40} alt='' className='rounded-md ml-2' />
                        <div>
                            <p className='font-semibold text-neutral-200'>Liked Songs</p>
                            <p className='flex items-center gap-1 text-neutral-300 text-sm'><PinIcon size={15} className='fill-green-400 text-green-400' /> Playlist - 767 músicas</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 py-2 rounded-lg cursor-pointer hover:bg-neutral-800' >
                        <Image src={"/img/Arcade.jfif"} width={50} height={40} alt='' className='rounded-md ml-2' />
                        <div>
                            <p className='font-semibold text-neutral-200'>Rádio de Arcade</p>
                            <p className='flex items-center gap-1 text-neutral-300 text-sm'>Playlist - Spotify</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 py-2 rounded-lg cursor-pointer hover:bg-neutral-800' >
                        <Image src={"/img/LDRComplete.jfif"} width={50} height={40} alt='' className='rounded-md ml-2' />
                        <div>
                            <p className='font-semibold text-neutral-200'>Lana Del Rey Complete</p>
                            <p className='flex items-center gap-1 text-neutral-300 text-sm'>Playlist - Lana Del Rey</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 py-2 rounded-lg cursor-pointer hover:bg-neutral-800' >
                        <Image src={"/img/DidYouKnow.jpg"} width={50} height={40} alt='' className='rounded-md ml-2' />
                        <div>
                            <p className='font-semibold text-neutral-200'>A&W</p>
                            <p className='flex items-center gap-1 text-neutral-300 text-sm'>Álbum - Lana Del Rey</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 py-2 rounded-lg cursor-pointer hover:bg-neutral-800' >
                        <Image src={"/img/BornToDie.jpg"} width={50} height={40} alt='' className='rounded-md ml-2' />
                        <div>
                            <p className='font-semibold text-neutral-200'>Born To Die</p>
                            <p className='flex items-center gap-1 text-neutral-300 text-sm'>Álbum - Lana Del Rey</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 py-2 rounded-lg cursor-pointer hover:bg-neutral-800' >
                        <Image src={"/img/Ultraviolence.jpg"} width={50} height={40} alt='' className='rounded-md ml-2' />
                        <div>
                            <p className='font-semibold text-neutral-200'>Ultraviolence</p>
                            <p className='flex items-center gap-1 text-neutral-300 text-sm'>Álbum - Lana Del Rey</p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}