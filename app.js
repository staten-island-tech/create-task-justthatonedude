
const DOMSelectors = {
    searchQuery: document.querySelector("#search"),
    form: document.querySelector("#form"),
}

async function apiCall(){
        const userInput = DOMSelectors.searchQuery.value
        const URL = `https://api.aviationapi.com/v1/weather/metar?=${userInput}`
        const response = await fetch(URL,{});
        const result = await response.json();
        console.log(result)
        
}

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    apiCall()
})