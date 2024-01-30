
const DOMSelectors = {
    searchQuery: document.querySelector("#search"),
    form: document.querySelector("#form"),
}

async function apiCall(){
        const userInput = DOMSelectors.searchQuery.value
        const URL = `https://opensky-network.org/api/states/all?icao24=${userInput}`
        const response = await fetch(URL,{
            mode: "cors"
        });
        const result = await response.json();
        console.log(result)
        
}

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    apiCall()
})