let numBefore = 0;
let numAfter = 0;
let opDefined = 0;
let before = 0;
let after = 0;
let op = '';
let saveLastNum = 0;



function addNumbers(before, after) {
    return before.toString() + after.toString();
}  

function multiplyNumbers(before, after) {
    return before * after;
}

function substractNumbers(before, after) {
    return before - after;
}

function divideNumbers(before, after) {
    return before / after;
}

function operator(operator, before, after) {
    switch (operator) 
    {
        case '+':
            return addNumbers(before, after);
        case '-':
            return substractNumbers(before, after);
        case '*':
            return multiplyNumbers(before, after);
        case '÷':
            return divideNumbers(before, after);
    }
}

function calculate(before, operator, after) {
    retuoperator(operator, before, after);
}

function numSave(num) {

    // if op wasn't defined then save for before 
    if (opDefined === 0) {
        if (numBefore === 0) 
        {
            before = num;
            numBefore = 1;
            document.getElementById("screen").innerText += num;

        } 
        else 
        {
            // concatenate the number to the before number
            before = before.toString() + num;
            document.getElementById("screen").innerText = before;

        }
        
    }
    else{
        // if op was defined then save for after
        if (numAfter === 0) {
            after = num;
            numAfter = 1;
            document.getElementById("screen").innerText = num;

        } 
       
        else {
            // concatenate the number to the after number
            after = after.toString() + num;
            document.getElementById("screen").innerText = after;
        }
    }
    // print num before and num after

}

function opSave(opIn) {

    // if there was no num before then give error
    if (numBefore === 0) {
        alert('Please enter a number before the operator');
        
    } 
   
    else if(opIn != '=') {
        // save the operator
        op = opIn;
        document.getElementById("screen").innerText += opIn;


        opDefined = 1;
    }
    if(opIn === '=') {
        // if there is no num after then give error
        if (numAfter === 0) {
            alert('Please enter a number after the operator');
            
        }
       //if there is a number saved after one calculation then save it for before
        
        // if operator was divide and num after is 0 then give error
        else if (op === '÷' && after === 0) {
            alert('Cannot divide by 0');
            
        }
        else 
        {
            // calculate the result
            console.log(operator(op, before, after));
            saveLastNum = operator(op, before, after);
        }
        document.getElementById("screen").innerText = operator(op, before, after);

    }

    while (saveLastNum !== 0) {
        before = saveLastNum;
        saveLastNum = 0;
        numAfter = 0;
        after = 0;
        op = '';
    }

}

function reset() {
 numBefore = 0;
 numAfter = 0;
 opDefined = 0;
 before = 0;
 after = 0;
 op = '';
 document.getElementById("screen").innerText = 0;
 window.location.reload();

}



