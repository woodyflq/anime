let formButton = document.getElementById("formButton");
let formInputCity = document.getElementById("input-city")
let resultContent = document.getElementById("result-content")


formButton.addEventListener("click", onClickEvent) 

function onClickEvent(event) {

    let cidade = formInputCity.value

    let url = `https://api.jikan.moe/v4/anime/${cidade}/full`
    

    fetch(url)
        .then(function(response){
            return response.json()
        }).then(function(json){


            let name = json.title
            let episodes = json.episodes
            let status = json.status
            let score = json.score
            let rank = json.rank
            let popularity = json.popularity
            let synopsis = json.synopsis

            

            let html= `Nome: <h2>${name}</h2>`
            html += `Episódios: <h2>${episodes}</h2>`
            html += `Status: <h2>${status}</h2>`
            html += `Nota: <h2>${score}</h2>`
            html += `Rank: <h2>${rank}</h2>`
            html += `Popularidade: <h2>${popularity}</h2>`
            html += `Sinopse: <h2>${synopsis}</h2>`



            document.getElementById("result-content").innerHTML = html;



        })
        



}
