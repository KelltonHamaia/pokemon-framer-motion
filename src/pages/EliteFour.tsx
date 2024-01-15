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
    }
}

export const EliteFour = () => {
    return (
        <div className="container w-full mx-auto">
        <main className="flex flex-col max-w-4xl min-h-screen py-5 mx-auto ">
                <Navbar />

                <h1 className="py-5 text-2xl font-bold tracking-tighter text-center">Elite Four</h1>
                <p className="text-xl">A Elite Four deste jogo é composta pelos seguintes integrantes: </p>
                <motion.div className="grid grid-cols-2 gap-5 pt-5"
                    variants={gridVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <EliteFourCards />
                </motion.div>

            </main>
        </div>
    )
}