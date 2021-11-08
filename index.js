let array = []

    function fillArray(){
        
        const length = Number(document.getElementById("arrayLength").value)
        const min = Number(document.getElementById("arrayLow").value)
        const max = Number(document.getElementById("arrayHigh").value)

        if(length && max && min){

            array = []

            if(length > (max-min)){
                document.getElementById("resultsText").hidden = true
                document.getElementById("arrayLengthText").innerHTML = "Please select an array length that fits between the array range. " + max + "-" + min + "=" + (max-min)

            }else if(Number.isInteger(length) === false || Number.isInteger(min) === false || Number.isInteger(max) === false){

                document.getElementById("resultsText").hidden = true
                document.getElementById("integerText").innerHTML = "Values must be integers."
            }else{

                for(let i = 0; i < length;) {

                document.getElementById("integerText").innerHTML = "";
                document.getElementById("arrayLengthText").innerHTML = "";
                document.getElementById("resultsArray").innerHTML = "";
            
                const random = Math.floor(Math.random() * (max-min + 1)) + min;

                const duplicateChecker = array.includes(random)

                if(duplicateChecker === false){

                    array.push(random)

                    i++

                }


        }

                const ordering = document.querySelector('input[name="ordering"]:checked').value

                if(ordering === "smallestToLargest"){
                    array.sort((a,b) => a-b)
                }else if(ordering === "largestToSmallest"){
                    array.sort((a,b) => b-a);
                }

                document.getElementById("resultsText").hidden = false
                document.getElementById("resultsArray").innerHTML = "[" + array + "]"
                document.getElementById("copyText").innerHTML = "Click on the array to copy to clipboard"
            }
        }

    }

function copyToClipboard(){

navigator.clipboard.writeText("[" + array + "]")

document.getElementById("copyText").innerHTML = "Copied to clipboard!"

}