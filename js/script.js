
document.addEventListener("DOMContentLoaded", () => {
    
    const bttnBuscar = document.getElementById("buscar");

    bttnBuscar.addEventListener("click", () => {
        const nombrePokemon = document.getElementById("nombrePokemon").value;
        alert(nombrePokemon);
        fetch('https://pokeapi.co/api/v2/pokemon/'+nombrePokemon)
            .then(response => response.json())
            .then(data => {
                console.log('Datos de' + nombrePokemon + ": ", data);
                console.log('Nombre:', data.name);
                console.log('Altura:', data.height);
                console.log('Peso:', data.weight);
            })
            .catch(error => {
                console.error('Error al obtener el Pokémon:', error);
            });

        /* Explicación del ejemplo:
            •   Se hace una petición a la API de Pokémon para consultar a Ditto.
            •   Se transforma la respuesta a JSON.
            •   Se muestran datos específicos: nombre, altura y peso.
            •   Si ocurre un error (por ejemplo, problema de red), se captura en .catch().
        */
    })


})