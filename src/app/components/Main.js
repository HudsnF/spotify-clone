
import Albums from './divisions/Albums'
import Playlists from './divisions/Playlists'
import Perfil from './divisions/Perfil'

export default function Main() {
    return (
        <main className='flex-1 bg-neutral-900 overflow-y-scroll rounded-lg scrollbar scrollbar-thumb-neutral-600 scrollbar-track-transparente'>
            <Perfil/>
            <Albums/>
            <Playlists/>        
        </main>
    )
}