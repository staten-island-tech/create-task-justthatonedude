
const DOMSelectors = {
    container: document.querySelector(".container"),
    searchQuery: document.querySelector("#search"),
    form: document.querySelector("#form"),
}

async function apiCall(){
        const userInput = DOMSelectors.searchQuery.value
        const URL = `https://opensky-network.org/api/states/all?time=1706932554&icao24=${userInput}`
        const response = await fetch(URL,{
            mode: "cors"
        });
        const result = await response.json();
        const data = result.states
        cardInsert(data)
        function cardInsert(array){
            let i = 0
            let arraylen = array.length
            for(i = 0; i < arraylen; i++){
                if (array != null){
                    console.log(array[i])
                    DOMSelectors.container.insertAdjacentHTML(
                        "afterbegin", 
                        `<p class=output>${array[i]}</p>`
                    )
                }
            }
        }
}

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    apiCall()
})

