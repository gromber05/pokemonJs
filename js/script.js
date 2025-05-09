
document.addEventListener("DOMContentLoaded", () => {
    
    const bttnBuscar = document.getElementById("buscar");
    const resultadosDiv = document.getElementById("resultados");

    bttnBuscar.addEventListener("click", () => {
        const nombrePokemon = document.getElementById("nombrePokemon").value;
        fetch('https://pokeapi.co/api/v2/pokemon/'+nombrePokemon)
            .then(response => response.json())
            .then(data => {

                const tipos = data.types.map(tipoInfo => tipoInfo.type.name)

                resultadosDiv.innerHTML =
                    `
                        <div>
                            <h2>Datos de: ${nombrePokemon}</h2>
                            <p>Nombre: ${data.name}</p>
                            <p>Altura: ${data.height}m</p>
                            <p>Peso: ${data.weight}kg</p>
                            <p>Tipos: ${tipos.join(", ")}</p>
                            <img src="${data.sprites.front_default}">
                            <img src="${data.sprites.back_default}">
                        </div>
                    `;

                resultadosDiv.style.display = "block";    
            })
            .catch(error => {
                alert('Error al obtener el Pokémon:' + error);
            });

        /* Explicación del ejemplo:
            •   Se hace una petición a la API de Pokémon para consultar a Ditto.
            •   Se transforma la respuesta a JSON.
            •   Se muestran datos específicos: nombre, altura y peso.
            •   Si ocurre un error (por ejemplo, problema de red), se captura en .catch().
        */
    })


})