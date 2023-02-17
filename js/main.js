function getInput(id){
    const getId = document.getElementById(id) ; 
    return getId  ; 
}

//Get Id value  
function getInputValue(id){
    const getId = document.getElementById(id); 
    const inputValue = getId.value ; 
    if(isNaN(inputValue)){
        alert('Please Input a valid Amount')
    }
    else{
        const inputValueNumber = parseInt(inputValue) ; 

        return inputValueNumber ; 
    }
}


function forTest(){
    const rentInputValue = getInputValue('rent-input'); 
    // const clothesInput = getInput('clothes-input') ; 
    const clothesInputValue = getInputValue('clothes-input') ; 
    // const foodInput = getInput('food-input') ; 
    const foodInputValue = getInputValue('food-input') ; 
    const totalExpencesShow = getInput('expencesz') ; 
    const incomeInput = getInputValue('income-input');
    const incomeShow = getInput('balances') ; 
    
    //Let's Calculate 
    const expenceCalculate = rentInputValue + clothesInputValue + foodInputValue ; 

        // console.log('hasib')

        totalExpencesShow.innerText = expenceCalculate ;
    //Income Calculate  ; 
    const balance = incomeInput - expenceCalculate ;
    incomeShow.innerText = balance ; 
    return balance ;
}


function errorFunction(){
    const incomeInput = getInputValue('income-input');
    const foodInputValue = getInputValue('food-input') ; 
    const rentInputValue = getInputValue('rent-input'); 
    if(isNaN(incomeInput) || isNaN(foodInputValue) || isNaN(rentInputValue)){
        alert('Please Input Correct ')        
    }
    else{
        return forTest() ;
    }
}
 

function saveingPart(){
    const incomeValue = getInputValue('income-input');
    const saveAmountValue = getInputValue('save-input');
    const calculate = incomeValue * saveAmountValue / 100;
    const setSaveAmount = getInput('save-set');
    setSaveAmount.innerText = calculate;
    
    //Remaining Balance part   
    const priviousBalance = forTest();
    const setRemaining = getInput('remaining-balance');
    
    if (calculate > priviousBalance) {
        const remainingCalculate = priviousBalance;
        setRemaining.innerText = remainingCalculate;  
        setSaveAmount.innerText = 0;
        alert('You Do not save more then your mony ');
    }
    else {
        const remainingCalculate = priviousBalance - calculate;
        setRemaining.innerText = remainingCalculate;
    }
}



function remainingBalanceError(){
    const incomeValue = getInputValue('income-input');
    const saveAmountValue = getInputValue('save-input');
    if(isNaN(incomeValue) || isNaN(saveAmountValue)){
        alert('Your Some Input Field are empty please check and re submit it ') ; 
    }
    else{
        return saveingPart() ; 
    }
}