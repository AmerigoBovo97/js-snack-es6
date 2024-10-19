const bikes = [
    {
        name: "caparezza",
        wheight: 15
    },{
        name: "fantozzi",
        wheight: 12
    },{
        name: "marty",
        wheight: 6
    },{
        name: "kishimoto",
        wheight: 9
    },{
        name: "bob",
        wheight: 11
    },{
        name: "igor",
        wheight: 123
    },{
        name: "vittoria",
        wheight: 11e3
    },{
        name: "aldo",
        wheight: 43.5
    },{
        name: "giovanni",
        wheight: 56
    },{
        name: "giacomo",
        wheight: 42
    },
]

let lighterBike = bikes[0]
let minWheightFound = bikes[0].wheight

const bikesLength = bikes.length
for (let i = 1; i < bikesLength; i ++){
    const bike = bikes[i]
    const bikeWheight = bike.wheight
    console.log(bike)
    if (minWheightFound > bikeWheight){
        lighterBike = bike;
        minWheightFound = bikeWheight
    }
}

console.log(`Il vincitore è ${lighterBike.name} con un peso di soli ${minWheightFound}kg`)
console.log(lighterBike)