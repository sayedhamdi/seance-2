 // ES 6 ECMA SCRIPT 6 


 // we introduce const et let 
 // non statically typed 

 // js interpreted
 /*
let x = 5
let y = 5
// operation m3a9da
let result = x + y

let x1 = 7
let y1 = 8

let result2 = y1 + x1
console.log(result)


// function 

//input ==> [ // operation // logique ]  ====> resultat 
*/
function sayHello(firstname,lastname){
    if (typeof(firstname) == "string" && firstname.length >0 ){
        console.log(` hello ${firstname}`)
    }else if(typeof(firstname) =="string" && typeof(lastname) == 'string' && firstname.length > 0 && lastname.length > 0 ){
        console.log(` hello ${firstname} ${lastname}`)
    }else{
        console.log('firstname or lastname are empty')

    }
}




// arrow function 
var sayHello1 = ()=>{
    console.log("hello ! ")
}


function add(x,y){
    return `${x} + ${y} = ${x + y}`
}
let add1 = (x,y) => `${x} + ${y} = ${x + y}`;
let add2 = (x,y) =>{
 console.log(`${x} + ${y} = ${x + y}`)
}

// function needs to return one or more things
let firstNumber = ()=>{
    return  0
}

let firstNumber1 = ()=>{
    console.log(0)
}
let fn  = firstNumber()


/*function afficherResultat(x,y){
    //procedure
    let resultat = add(x,y)
    console.log(`resultat : ${resultat}`)
}*/
//afficherResultat(2,5)


let notesSayed = [12,11,19.5,2,0.25] //
let notesSaif = [19,15,20,20,20] //


let calculMoyenne = (...args)=>{
    let  tableauNotes;
    if(Array.isArray(args[0])){
         tableauNotes = args[0]
    }else{
         tableauNotes = args
    }
    if(tableauNotes.length === 0)
       return 'warning : the array is empty please fill in some values'
    let sommme= 0
    for(let i=0;i<tableauNotes.length ; i++){
        sommme+= tableauNotes[i]
    }
    return sommme / tableauNotes.length

}


console.log(calculMoyenne(1,2,3,5,6))
console.log(calculMoyenne([1,2,3,5,6]))

// create a function that calculates a second degree equation

// ax² + bx + c 

// params  a , b ,c 

// delta  = b² - 4ac

// 3 cas  : 
// cas 1 : delata < 0 // impossible

// cas 2 : detla = 0 // solution double x1 = x2  = - b / 2a

// cas 3 : delta > 0 // solution   :
                       //x1 = -b-racine(delta ) / 2a
                       //x2 = -b+racine(delta ) / 2a



/// PGCD plus grand commun diviseur : 
// exemple : 15, 5  =  5

// 

