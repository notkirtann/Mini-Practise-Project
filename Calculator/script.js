const display = document.getElementById("display");
function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = ""
}

function calculate(){
    try {
        let result = eval(display.value); // Calculate once
        if (result === 7) { 
            // Use a comparison without magic numbers if possible
            display.value = "SIUUUUUUUUU";
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Error: " + error.message; 
        // Provide more informative error messages
    }
}