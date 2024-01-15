type GymLeaderType = {
    name: string,
    

    location:   string,
    specialty: string,
    rewards: string,
    rival?: boolean
}

export const GymLeaderData: GymLeaderType[] = [
    {
        name: "Falkner", 
        location: "Violet City", 
        specialty: "Flying-type", 
        rewards: "Zephyr Badge, TM31, Can use HM05 - Flash"
    },
    {
        name: "Bugsy", 
        location: "Azalea Town", 
        specialty: "Bug-type", 
        rewards: "Insect Badge, TM49, Can use HM01 - Cut"
    },
    {
        name: "Whitney", 
        location: "Goldenrod City", 
        specialty: "Normal-type", 
        rewards: "Plain Badge, TM45, Can use HM04 - Strength"
    },
    {
        name: "Morty", 
        location: "Ecruteak CIty", 
        specialty: "Ghost-type", 
        rewards: "Fog Badge, TM45, Can use HM03 - Surf"
    },
    {
        name: "Chuck", 
        location: "Cyanwood city", 
        specialty: "Fighting-type", 
        rewards: "Storm Badge, TM01, Can use HM02 - Fly"
    },
    {
        name: "Jasmine", 
        location: "Olivine City", 
        specialty: "Steel-type", 
        rewards: "Mineral Badge, TM231"
    },
    {
        name: "Pryce", 
        location: "Mahogany Town", 
        specialty: "Ice-type", 
        rewards: "Glacier Badge, TM16, Can use HM06, Waterfall"
    },
    {
        name: "Clair", 
        location: "Blackthorn City", 
        specialty: "Dragon-type", 
        rewards: "Rising Badge, TM24, Can use HM07, Whirlpool"
    },
    {
        name: "Silver", 
        location: "Victory Road", 
        specialty: "Various-types", 
        rewards: "Money",
        rival: true
    },
]