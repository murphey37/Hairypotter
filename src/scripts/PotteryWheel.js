/*
Create a scripts/PotteryWheel.js module.
Define a variable in the module to have the value of the primary key for each piece of pottery. It should have an initial value of 1.
Define and export a function named makePottery.
The makePottery function must accept the following values as input (i.e. it needs parameters), in the following order.
Shape of the piece of pottery (e.g. "Mug", "Platter")
Weight of the piece (e.g. 1, 5)
Height of the piece (e.g. 3, 7)
The makePottery function must return an object with the following properties on it.
shape
weight
height
id (increment this value each time the function is invoked)
Checking Your Work
In the main.js module, invoke the makePottery function and provide the required values as arguments. Store the object that gets returned into a variable, and then use console.log() to view the object.

Once you have it working, make 5 pieces of pottery in main.js.*/


let primaryKey = 1 // define variable w/ value of primary key, set inital value to 1

export const makePottery = (shape, weight, height) => {
     let pot = {}
     pot.shape = shape,
     pot.weight = weight,
     pot.height = height,
     pot.id = primaryKey ++

     return pot
}

