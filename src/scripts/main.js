// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'
import { toSellOrNotToSell } from './PotteryCatalog.js'
import { usePottery } from './PotteryCatalog.js'
import { potteryList } from './PotteryList.js'

// Make 5 pieces of pottery at the wheel - below I create 5 variations of mug w/ arguments
let mug1 = makePottery("mug", 2.5, 4)
let mug2 = makePottery("mug", 3, 4)
let mug3 = makePottery("mug", 2, 4.5)
let mug4 = makePottery("mug", 2.5, 5)
let mug5 = makePottery("mug", 4, 3.5)


console.log(mug1, mug2, mug3, mug4, mug5) //print the mugs into existence in the browser 


// Fire each piece of pottery in the kiln - define 5 more mug variables to capture the Fired versions with arguments

let mug1f = firePottery(mug1, 2201)
let mug2f = firePottery(mug2, 2180)
let mug3f = firePottery(mug3, 2181)
let mug4f = firePottery(mug4, 2179)
let mug5f = firePottery(mug5, 2205)

console.log(mug1f, mug2f, mug3f, mug4f, mug5f) // print fired mugs into the browser console


// Determine which ones should be sold, and their price

let mug1S = toSellOrNotToSell(mug1f)            //
let mug2S = toSellOrNotToSell(mug2f)
let mug3S = toSellOrNotToSell(mug3f)
let mug4S = toSellOrNotToSell(mug4f)
let mug5S = toSellOrNotToSell(mug5f)

//console.log(mug1S, mug2S, mug3S, mug4S, mug5S)
console.log(usePottery())
console.log(potteryList())



// Invoke the component function that renders the HTML list

const parentHTMLElement = document.querySelector(".potteryList")

parentHTMLElement.innerHTML = potteryList(usePottery())