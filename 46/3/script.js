const animal = {
    species: "bunny",
    name: "Twix",
    age: 3,
}

function increaseByOne(animal) {
    return animal.age++
}
increaseByOne(animal)
console.log(increaseByOne(animal))

// ett annat sätt skulle väl vara att skriva animal.age = 4 för att ändra värdet på just åldern:

animal.age = 4
console.log(animal.age)