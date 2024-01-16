import { motion } from "framer-motion"
import { EliteFourCards } from "../components/EliteFourCard"
import { Navbar } from "../components/Navbar"

const gridVariants = {
    hidden: {
        opacity: 0,
        x: '100vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            duration: 0.25,
            when: "beforeChildren",
            staggerChildren: 0.25
        }
    },
    exit: {
        x: "100vw",
        transition: { ease: 'easeInOut' }
    }
}

export const EliteFour = () => {
    return (
        <main className="flex flex-col max-w-4xl min-h-screen py-5 mx-auto ">
            <Navbar />
            
            <h1 className="py-5 text-2xl font-bold tracking-tight text-center">Elite Four</h1>
            <p className="ml-4 text-xl font-semibold md:mx-2">Elite Four de Johto: </p>
            
            <motion.div className="flex flex-col gap-5 p-4 md:px-2 md:py-5 md:grid md:grid-cols-2"
                variants={gridVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <EliteFourCards />
            </motion.div>
        </main>
    )
}