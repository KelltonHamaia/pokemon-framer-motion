import { EliteFourMembers } from "../data/EliteFourData";
import { motion } from "framer-motion"


const EliteFourVariants = {
    hidden: {
        x: '100vw',
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1
    }
}


export const EliteFourCards = () => {
    return (
        <>
            {EliteFourMembers.map((member, index) => (
                <motion.div
                    variants={EliteFourVariants}
                    initial="hidden"
                    animate="visible"
                    key={index}
                    className={`flex flex-col md:flex-row p-2 rounded shadow-sm shadow-blue-300  ${member.post_game_boss ? 'bg-red-300' : 'bg-zinc-100'}`}
                >
                    <div className="flex-1">
                        <img src={member.image_url} alt={member.name} className="w-full rounded md:h-32 md:max-w-56"/>
                    </div>
                    <div className="flex flex-col p-2 pt-5 w-44 description">
                        <h3 className="font-semibold">Treinador: {member.name}</h3>
                        <span>Tipo: {member.specialty}</span>
                        {member.post_game_boss && 
                            <p className="font-bold text-red-700">Final Boss</p>
                        }
                    </div>
                </motion.div>
            ))}
        </>
    )
}