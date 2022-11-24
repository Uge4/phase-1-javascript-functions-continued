
// code your solution here

function saturdayFun(activity = `roller-skate`){
    
    return `This Saturday, I want to ${activity}!`;
    
}
saturdayFun()


function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}


function wrapAdjective(flair = '*'){
    function inner (banana = "special"){
        console.log(`You are *${banana}*!`);
        return `You are ${flair}${banana}${flair}!`;
    }
    return inner;
 
}

wrapAdjective(`||`);