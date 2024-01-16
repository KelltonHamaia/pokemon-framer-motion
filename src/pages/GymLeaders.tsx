import { motion } from "framer-motion"
import { GymLeaderCard } from "../components/GymLeaderCard"
import { Navbar } from "../components/Navbar"


const gridVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            type: 'spring',
            when: 'beforeChildren',
            duration: 0.25,
            staggerChildren: 0.1,
        }
    },
    exit: {
        x: "-100vw",
        transition: { ease: 'easeInOut' }
    }
}

export const GymLeaders = () => {
    return (
        <main className="flex flex-col max-w-4xl min-h-screen py-5 mx-auto">
            <Navbar />
            <h1 className="py-5 text-2xl font-bold tracking-tight text-center">Gym Leaders</h1>
            <p className="ml-4 text-xl font-semibold md:mx-2">Líderes de ginásio de Johto:</p>

            <motion.div className="flex flex-col gap-5 p-4 md:px-2 md:py-5 md:grid md:grid-cols-2"
                variants={gridVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <GymLeaderCard />
            </motion.div>
        </main>
    )
}