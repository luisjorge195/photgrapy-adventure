
import blackSilver from '../assets/blackSilver.png'
import { Link} from "wouter";
export const Navbar = () => {
  return (
    <div className="contenedor absolute flex justify-between items-center mt-5 ">
            <div className='ml-8'>
                <img src={blackSilver} alt='blackSilver' className='w-auto h-16'/>
            </div>
            <div className='text-white font-medium mr-8'>
                <Link href="#" className="mr-10 text-xl">Nosotros</Link>
                <Link href="#" className="mr-10 text-xl">Events</Link>
                <Link href="/login" className="mr-10 text-xl" >Login</Link>
                <Link href="/logout" className='text-xl'>Logout</Link>
            </div>
            
    </div>
  )
}
