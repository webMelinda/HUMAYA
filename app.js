// const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';
const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=3&q=caramel%2C%20chocolate';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6811cd79f2mshaeecc8887c25b2ep1ef10djsn68aef58ad789',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
};

const cargarRecetas = async () => {
    try {
        const respuesta = await fetch(url, options);
        const result = await respuesta.json();

        if (respuesta.status === 200) {
            let recetas = "";
            result.results.forEach(receta => {
                recetas += `
                <div class="card">
                    <img src="${receta.thumbnail_url}" class="card-img-top" alt="${receta.name}">
                    <div class="card-body">
                      <h5 class="card-title">${receta.name}</h5>
                      <p class="card-text">${receta.description}</p>
                      <a href="#" class="btn btn-outline-light boton">Preparación</a>
                    </div>
                </div>
                `;
            });

            document.getElementById("recetas").innerHTML = recetas;
        } else if (respuesta.status === 401) {
            console.log("Key incorrecta");
        } else if (respuesta.status === 404) {
            console.log("No disponible");
        } else {
            console.log("No sé cuál es el error");
        }
    } catch (error) {
        console.log(error.message);
    }
}

cargarRecetas();
