import { motion } from "framer-motion"
import { Navbar } from "../components/Navbar"

const mainVariants = {
    hidden: {
        opacity: 0,
        x: '-100vw',
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 0.1,
            when: "beforeChildren",
            staggerChildren: 0.25
        }
    }
}

const childrenVariants = {
    hidden: {
        x: "100vw",
    },
    visible: {
        x: 0,
    }
}

export const Home = () => {
    return (
        <div className="container w-full pb-10 mx-auto">
            <motion.main className="flex flex-col max-w-4xl min-h-screen pt-5 mx-auto"
                variants={mainVariants}
                initial="hidden"
                animate="visible"
            >
                <Navbar />
                
                <h1 className="py-4 text-2xl font-bold tracking-tighter text-center md:py-5">Pokémon Crystal</h1>
                <motion.img src="/images/pokemon.jpg" alt="pokemon" className="w-full p-4 mx-auto rounded md:h-96"
                    variants={childrenVariants}
                />

                <motion.section
                    variants={childrenVariants}
                >
                    <h2 className="py-5 ml-2 text-2xl font-semibold tracking-tighter">História</h2>
                    <p className="p-4">
                        O jogo se passa na região de Johto, e protagoniza a segunda geração de jogos Pokémon,
                        onde dessa vez, estamos na pele de Ethan ou da novs personagem Kris. Você recebe seu pokémon do Prof. Elm, encara ginásios,
                        e conforme avança no jogo, descobre que a Equipe Rocket voltou a funcionar e o seu Líder, Giovanni, também está de volta. Então você os combate, 
                        e por fim encara a Elite Four, composta por: Will, Koga, Bruno, Karen e por fim, Lance!
                    </p>
                </motion.section>

                <motion.section
                    variants={childrenVariants}
                >
                <h2 className="py-5 ml-2 text-2xl font-semibold tracking-tighter">Característias</h2>
                    <p className="p-4">
                        Algumas características dessa série, é que 
                        é a primeira que possui o sistema de Day-care, isso é, deixar um pokemon neste lugar, para que ele evolua, além da possibilidade de 
                        <em> breeding</em>, ou seja, se o pokémon tiver um outro pokemon junto e que seja compatível, existe uma chance de você receber um ovo de um dos NPC's!
                        Neste jogo também é possível encontrar os lendários da região de Johto: Suicune, Raikou, Entei, Lugia, Ho-oh e celebi! <br />
                        Já no pós-jogo, podemos visitar a região de Kanto, e ter acesso aos líderes de ginásio, os lendários Zapdos, Moltres, Articuno e Mewtwo, bem como o desafio final: Red. 
                    </p>
                </motion.section>
        
            </motion.main>
        </div>
    )
}