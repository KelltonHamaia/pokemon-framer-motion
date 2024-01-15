import { motion } from "framer-motion"
import { GymLeaderData } from "../data/GymLeaderData" 

const divCardVariant = {
    hidden: {
        x: '-100vw'
    },
    visible: {
        x: '0',
    }
} 


export const GymLeaderCard = () => {
    return (
        <>
            {GymLeaderData.map((member, index) => (
                <motion.div
                    variants={divCardVariant}
                    key={index}
                    className={`flex p-2 rounded shadow-sm shadow-blue-300  ${member.rival ? 'bg-red-950 text-white col-span-2 flex justify-center' : 'bg-zinc-100'}`}
                >
                    <div className={`flex items-center ${member.rival ? "justify-evenly p-2": 'flex-1'}`}>
                        <img src={`/images/gyms/${member.name.toLowerCase()}.png`} alt={member.name} className="h-32 rounded max-w-56 cover"/>
                    </div>
                    <div className="flex flex-col p-2 pt-5 w-44 description">
                        <h3 className="font-semibold">{member.name}</h3>
                        <span className="text-sm">{member.specialty}</span>
                        <span className="">Recompensas: {member.rewards}</span>
                        {member.rival && 
                            <p className={`text-red-600 font-bold`}> Rival</p>
                        }
                    </div>
                </motion.div>
            ))}
        </>
    )
}
