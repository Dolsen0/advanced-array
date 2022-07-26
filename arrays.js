let studentNames = ["Alicia", "Bridgette", "Juice", "Derek"]
let teachers = [
    {
        name: "Damian",
        subjects: "Arrays, Javascript, MongoDB"
    },
    {
        name: "Jonathan",
        subjects: "Arrays, Javascript"
    }
]

// .sort()
//
// returns sorted version of array. Does NOT adjust the array itself.
//
// const sortedStudentNames = studentNames.sort()
// console.log(sortedStudentNames)




//.filter()
//
//filters content and keeps the data. Will only contain data that matches the condition
//
//
//ES5 approach:
// const filteredStudentNames = studentNames.filter(
//     function (student){
//         return student == "Juice"
//     }
// )

//ES6 approach
// const filteredStudentNamesES6 = studentNames.filter(
//     (student) => {
//         return student === "Juice"
//     }
// )



// console.log(filteredStudentNamesES6)


// let studentNames2 = studentNames.filter((student)=>true)
// console.log(studentNames2)

//find()
//returns first element matching criteria


// const studen = studentNames.find((student) => student === "Alicia")
// console.log(studen)

//.some()
//
//decides if "some" items match criteria
//returns true if some element matches criteria


// const someName = studentNames.some((student) => student === "Derek")
// console.log(`someName = ${someName}`)


//.every()
//
//returns true if every element matches criteria.

// const everyName = studentNames.every((name) => name === "Derek")
// console.log(`everyName = ${everyName}`)

//forEach()
//
//iterates over each element
//
//
// studentNames.forEach((student)=>{
//     console.log(student)
// })

//.map()
//
//transforms an array to a new form

// const justTheNames = teachers.map(teacher =>{
//     return teacher.name
// })

// console.log(justTheNames)

//.reduce()
//Able to combine array into single value

let numbers = [10, 20, 30]
let totals = numbers.reduce((accumulator, currentValue, index, array) => {
    return accumulator + currentValue
})

console.log(totals)

let total = 0
for(let i = 0; i < numbers.length; i++){
    total += totals[i]
}


total = numbers.reduce((accumulator,currentValue) => accumulator + currentValue, 0)
console.log(total)