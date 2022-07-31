const display = document.querySelector('.display')

// Render elements into .display
const renderDisplayReplace = function(param) { display.innerHTML  = param }
const renderDisplayAppend  = function(param) { display.innerHTML += param }

// Global Event Listener
const globalEventListener = function (paramType,paramSelect) {
    document.addEventListener(paramType, (e) => { 
        
        const btnDataId = e.target.dataset.id
        const btnValue  = e.target.value
                
        // if it's a button
        if(e.target.matches(paramSelect)) {
            switch (btnDataId) {
                case "number":
                    renderDisplayAppend(btnValue)
                    break
                
                case "operator":
                    renderDisplayAppend(btnValue)
                    break
                
                case "clear":
                    renderDisplayReplace('')
                    break
                
                case "calculate":
                    display.innerHTML = stringMath(display.innerHTML)
                    break
            }
        }
    })
}

// const customRect = document.createElement("div")
// customRect.className = "custom-rect"
// customRect.style.width = "300px"
// customRect.style.height = "300px"
// customRect.style.backgroundColor = "yellow"
// document.body.append(customRect)