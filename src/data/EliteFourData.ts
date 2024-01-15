type EliteFour = {
    name: string,
    specialty: string,
    image_url: string,
    post_game_boss?: boolean
}

export const EliteFourMembers:EliteFour[] = [
    { name: "Will", specialty: "Psychic-type", image_url: "/images/elite/will.png"},
    { name: "Koga", specialty: "Poison-type", image_url: "/images/elite/koga.png"},
    { name: "Bruno", specialty: "Fighting-type", image_url: "/images/elite/bruno.png"},
    { name: "Karen", specialty: "Dark-type", image_url: "/images/elite/karen.png"},
    { name: "Lance", specialty: "Dragon-type", image_url: "/images/elite/lance.png"},
    { name: "Red", specialty: "Various-types", post_game_boss: true, image_url: "/images/elite/red.jpg"},
]