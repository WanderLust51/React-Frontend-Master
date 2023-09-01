let json
fetch ('https://rickandmortyapi.com/api')
    .then(reponse => reponse.json())
    .then(function(data){
        json = data
    })

