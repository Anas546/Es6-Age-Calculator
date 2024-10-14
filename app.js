let userInput = document.querySelector("#userInput")
let btn = document.querySelector("#btn")
let age = document.querySelector("#age")


btn.addEventListener("click", () => {
    // User Date
if (userInput.value === "") {
    alert("Please! Enter your date of birth")
} else {
 let userDate = new Date(userInput.value)
//  console.log("user date", userDate)   
 let userYear = userDate.getFullYear() // user year
//  console.log(userYear)
let userMonth = userDate.getMonth() // user month 
let userDay = userDate.getDate()    // user date

 //Current Date
let now = new Date()
let nowYear = now.getFullYear() // current year

let nowMonth = now.getMonth() // current month
let nowDay = now.getDate()    // current date

let yearAge = nowYear - userYear
let monthAge = nowMonth - userMonth
let dateAge = nowDay - userDay



age.innerHTML = `Your Age is : ${yearAge} Years , ${monthAge} Months, ${dateAge} Days`
}
})

