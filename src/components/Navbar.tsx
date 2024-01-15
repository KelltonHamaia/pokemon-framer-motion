import { motion } from "framer-motion"

const liVariants = {
    hover: {
        scale: 1.1,
        y: -5,
        fontWeight: "bold",
        textDecoration: "underline",
        transition: {
            type: "spring",
            stiffness: 120
        }
    }
}

export const Navbar = () => {
    return (
        <nav>
            <ul className="flex justify-end gap-5 divide-x-2">
                <motion.li
                    className="px-4 text-center"
                    variants={liVariants}
                    whileHover="hover"
                >
                    <a href="/">Home</a>
                </motion.li>
                
                <motion.li
                    className="px-4 text-center"
                    variants={liVariants}
                    whileHover="hover"
                >
                    <a href="/gymleaders">Gym Leaders</a>
                </motion.li>

                <motion.li
                    className="px-4 text-center"
                    variants={liVariants}
                    whileHover="hover"
                >
                    <a href="/eliteFour">Elite Four</a>
                </motion.li>
                
            </ul
            >
        </nav>
    )
}