const teams = [ //For copyright reasons we couldn't include the names of real football teams, so we replaced them with the names of the clans in Naruto
    {
        teamName : "Uzumaki",
        goals : 0,
        fauls : 0
    },{
        teamName : "Uchiha",
        goals : 0,
        fauls : 0
    },{
        teamName : "Senju",
        goals : 0,
        fauls : 0
    },{
        teamName : "Nara",
        goals : 0,
        fauls : 0
    },{
        teamName : "Hyūga",
        goals : 0,
        fauls : 0
    },{
        teamName : "Akimichi",
        goals : 0,
        fauls : 0
    },{
        teamName : "Senju",
        goals : 0,
        fauls : 0
    },{
        teamName : "Sarutobi",
        goals : 0,
        fauls : 0
    },{
        teamName : "Hatake",
        goals : 0,
        fauls : 0
    },{
        teamName : "Aburame",
        goals : 0,
        fauls : 0
    },
]

/**
 * return a random integer in a specific range
 *
 * @param {number} min the minimun number
 * @param {number} maxthe maximun number
 * @returns {number} random number
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//replace team goals and fauls with a random integer
for (let team of teams){
    team.goals = getRndInteger(0, 15)
    team.fauls = getRndInteger(0, 25)
}

//create another array with team's name and fauls
const faulList = []
for (let team of teams){
    faulList.push({teamName : team.teamName, fauls : team.fauls})
}

console.log(faulList)