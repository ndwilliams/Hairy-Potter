// Imports go first
import { firePottery } from "./Kiln.js"
import { makePottery } from "./PotteryWheel.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 30, 12)
let bowl = makePottery("bowl", 40, 8)
let vase = makePottery("vase", 100, 30)
let plate = makePottery("plate", 80, 4)
let teaKettle = makePottery("kettle", 200, 25)
console.log(teaKettle)
console.log(bowl)

// Fire each piece of pottery in the kiln
firePottery(mug, 2300)
firePottery(bowl, 2100)
firePottery(vase, 2550)
firePottery(plate, 1800)
firePottery(teaKettle, 1600)

console.log(mug)
console.log(bowl)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



