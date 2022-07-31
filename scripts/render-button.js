const btnNumberArray = ['1','2','3','4','5','6','7','8','9','0']
const btnOperatorArray = ['+','-','*','/',]

// Render Button Number
const renderBtn = function(paramClass, paramArray, paramData) {
    for(const eachIndex in paramArray) {
        document.querySelector(paramClass).innerHTML +=     
        `
        <button 
            data-id='${paramData}'
            value='${paramArray[eachIndex]}'>${paramArray[eachIndex]}</button>
        `    
    }
}