import Aside from './components/Aside'
import Main from './components/Main'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="h-screen p-2">
      <div className='flex h-5/6 gap-2'>
        <Aside />
        <Main />
      </div>
      <Footer />
    </div>
  )
}
