/*
Create a scripts/PotteryCatalog.js module.
Define a variable in the module with a value of an empty array. This array will store pottery that will be sold. Do not export this array.
Define and export a function named toSellOrNotToSell that is responsible for determining if a piece of pottery should be sold.
The toSellOrNotToSell function must accept a pottery object as input.
If the weight of the piece of pottery is greater than, or equal to, 6 then the function must add a price property with a value of 40.
If the weight of the piece of pottery is less than 6 then the function must add a price property with a value of 20.
If the pottery is not cracked, add the object to the module-level array of items to be sold.
Define and export a function named usePottery returns a copy of the array of items to be sold. Recall which array method creates a copy of the array.
*/
//const potteryInventory = []

/*
 need to 
*/
//import {}

let potteryInventory = []

export const toSellOrNotToSell = (potObj) => {
    
   
    if (potObj.cracked === false) {  //set condition for assigning price && pushing to inventory

         potObj.weight < 6 ? 
            potObj.price = 20 : potObj.price = 40 //set price

        potteryInventory.push(potObj)           // push to potteryInventory Array

 }
    return potObj
}

export const usePottery = () => {
   
    return potteryInventory.map(pot => ({...pot}))
}


/*
export const usePottery = () => {
    return inventory.map(pot => ({...pot}))
}

export const firePottery = (pot, temp) => {
    let potObj = {}
    potObj.fired = true,
    potObj.temp = temp,
    potObj.cracked = ''

    if (potObj.temp <= 2200) {
        potObj.cracked = false;
    } else {
        potObj.cracked = true;
    }
    
    return potObj;
}
   */
