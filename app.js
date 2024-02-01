let arr = [];
const DOMSelectors = {
    container: document.querySelector(".container"),
    searchQuery: document.querySelector("#search"),
    form: document.querySelector("#form"),
}

async function apiCall(){
        const userInput = DOMSelectors.searchQuery.value
        const URL = `https://opensky-network.org/api/states/all?time=1458564121&icao24=${userInput}`
        const response = await fetch(URL,{
            mode: "cors"
        });
        const result = await response.json();
        arr.push(result)
        cardInsert(arr)
}

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    apiCall()
})

function cardInsert(array){
    let i = 0
    let arraylen = array.length
    for(i = 0; i <= arraylen; i++){
        if (array != null){
            DOMSelectors.container.insertAdjacentHTML(
                "afterbegin",
                
            )
        }
    }
}