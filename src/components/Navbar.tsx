import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
            <ul className="flex items-center justify-end gap-5 divide-x-2">
                <Link to="/">Home</Link>   
                <Link to="/gymleaders">gymleaders</Link>
                <Link to="/eliteFour">eliteFour</Link>   
            </ul>
        </nav>
    )
}