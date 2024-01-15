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
}

const divCardVariant = {
    hidden: {
        x: '-100vw'
    },
    visible: {
        x: '0',
    }
} 

export const GymLeaders = () => {
    return (
        <div className="container w-full mx-auto">
            <main className="flex flex-col max-w-4xl min-h-screen py-5 mx-auto">
                <Navbar />
                <h1 className="py-5 text-2xl font-bold tracking-tighter text-center">Gym Leaders</h1>
                <p className="text-xl">Estes são os líderes de ginásio deste jogo: </p>
                
                <motion.div className="grid grid-cols-2 gap-5 pt-5"
                    variants={gridVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <GymLeaderCard />
                </motion.div>
            </main>
        </div>
    )
}