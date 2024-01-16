import { Link } from 'react-router-dom'

export const Navbar = () => {

    return (
        <nav>
            <ul className="flex items-center justify-end gap-4 mr-4 divide-x-2">
                <Link
                    className='pl-3 text-sm font-semibold text-center md:text-regular' 
                    to="/"
                >
                    Home
                </Link>   
                <Link
                    className='pl-3 text-sm font-semibold text-center md:text-regular' 
                    to="/gymleaders"
                >
                    Gym Leaders
                </Link>
                <Link
                    className='pl-3 text-sm font-semibold text-center md:text-regular' 
                    to="/eliteFour"
                >
                    Elite Four
                </Link>   
            </ul>
        </nav>
    )
}