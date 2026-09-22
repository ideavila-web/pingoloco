// =====================================================
// POKÉMON CARD DATABASE
// =====================================================

// Buscamos el botón
const botonPokemon =
    document.getElementById("botonPokemon");

// Buscamos el lugar donde aparecerá la carta
const resultado =
    document.getElementById("resultado");


// =====================================================
// CONSULTAR CHARMANDER
// =====================================================

botonPokemon.addEventListener("click", function () {

    // Cambiamos temporalmente el contenido
    resultado.innerHTML = `
        <div class="waiting">
            <div class="waiting-ball">
                <div></div>
            </div>

            <p>
                CARGANDO CARTA...
            </p>

            <small>
                Conectando con PokéAPI
            </small>
        </div>
    `;


    // Consultamos Charmander
    fetch(
        "https://pokeapi.co/api/v2/pokemon/charmander"
    )

        // Convertimos la respuesta a JSON
        .then(function (response) {

            return response.json();

        })


        // Recibimos los datos
        .then(function (pokemon) {

            console.log(pokemon);


            // =================================================
            // ESTADÍSTICAS
            // =================================================

            const hp =
                pokemon.stats[0].base_stat;

            const ataque =
                pokemon.stats[1].base_stat;

            const defensa =
                pokemon.stats[2].base_stat;

            const ataqueEspecial =
                pokemon.stats[3].base_stat;

            const defensaEspecial =
                pokemon.stats[4].base_stat;

            const velocidad =
                pokemon.stats[5].base_stat;


            // Total
            const total =
                hp +
                ataque +
                defensa +
                ataqueEspecial +
                defensaEspecial +
                velocidad;


            // =================================================
            // NOMBRE
            // =================================================

            const nombre =
                pokemon.name
                    .charAt(0)
                    .toUpperCase() +
                pokemon.name.slice(1);


            // =================================================
            // TIPOS
            // =================================================

            const tipos =
                pokemon.types
                    .map(function (tipo) {

                        return `
                            <span class="type-badge">
                                ${tipo.type.name.toUpperCase()}
                            </span>
                        `;

                    })
                    .join("");


            // =================================================
            // CARTA
            // =================================================

            resultado.innerHTML = `

                <article class="pokemon-card">

                    <div class="card-inner">


                        <!-- HEADER -->

                        <div class="card-header">

                            <div class="card-name">

                                <h2>
                                    ${nombre}
                                </h2>

                            </div>

                            <div class="hp">

                                HP ${hp}

                            </div>

                        </div>


                        <!-- IMAGEN -->

                        <div class="image-area">

                            <img
                                src="${pokemon.sprites.front_default}"
                                alt="Charmander 8 bit"
                                class="pokemon-image"
                            >

                        </div>


                        <!-- TIPO -->

                        <div class="type-row">

                            ${tipos}

                        </div>


                        <!-- DESCRIPCIÓN -->

                        <div class="card-description">

                            Pokémon de tipo fuego.
                            Charmander almacena una pequeña
                            llama en la punta de su cola,
                            característica que refleja su energía
                            y personalidad.

                        </div>


                        <!-- ESTADÍSTICAS -->

                        <div class="stats-title">

                            <span>
                                BASE STATS
                            </span>

                            <span>
                                ${total}
                            </span>

                        </div>


                        <!-- HP -->

                        <div class="stat">

                            <div class="stat-top">

                                <span>
                                    HP
                                </span>

                                <span>
                                    ${hp}
                                </span>

                            </div>

                            <div class="stat-bar">

                                <div
                                    class="stat-fill"
                                    style="width: ${Math.min(hp / 2.55, 100)}%"
                                ></div>

                            </div>

                        </div>


                        <!-- ATAQUE -->

                        <div class="stat">

                            <div class="stat-top">

                                <span>
                                    ATAQUE
                                </span>

                                <span>
                                    ${ataque}
                                </span>

                            </div>

                            <div class="stat-bar">

                                <div
                                    class="stat-fill"
                                    style="width: ${Math.min(ataque / 2.55, 100)}%"
                                ></div>

                            </div>

                        </div>


                        <!-- DEFENSA -->

                        <div class="stat">

                            <div class="stat-top">

                                <span>
                                    DEFENSA
                                </span>

                                <span>
                                    ${defensa}
                                </span>

                            </div>

                            <div class="stat-bar">

                                <div
                                    class="stat-fill"
                                    style="width: ${Math.min(defensa / 2.55, 100)}%"
                                ></div>

                            </div>

                        </div>


                        <!-- ATAQUE ESPECIAL -->

                        <div class="stat">

                            <div class="stat-top">

                                <span>
                                    ATQ. ESPECIAL
                                </span>

                                <span>
                                    ${ataqueEspecial}
                                </span>

                            </div>

                            <div class="stat-bar">

                                <div
                                    class="stat-fill"
                                    style="width: ${Math.min(ataqueEspecial / 2.55, 100)}%"
                                ></div>

                            </div>

                        </div>


                        <!-- DEFENSA ESPECIAL -->

                        <div class="stat">

                            <div class="stat-top">

                                <span>
                                    DEF. ESPECIAL
                                </span>

                                <span>
                                    ${defensaEspecial}
                                </span>

                            </div>

                            <div class="stat-bar">

                                <div
                                    class="stat-fill"
                                    style="width: ${Math.min(defensaEspecial / 2.55, 100)}%"
                                ></div>

                            </div>

                        </div>


                        <!-- VELOCIDAD -->

                        <div class="stat">

                            <div class="stat-top">

                                <span>
                                    VELOCIDAD
                                </span>

                                <span>
                                    ${velocidad}
                                </span>

                            </div>

                            <div class="stat-bar">

                                <div
                                    class="stat-fill"
                                    style="width: ${Math.min(velocidad / 2.55, 100)}%"
                                ></div>

                            </div>

                        </div>


                        <!-- DATOS FÍSICOS -->

                        <div class="physical-data">


                            <div class="data-box">

                                <span>
                                    ALTURA
                                </span>

                                <strong>
                                    ${pokemon.height / 10} m
                                </strong>

                            </div>


                            <div class="data-box">

                                <span>
                                    PESO
                                </span>

                                <strong>
                                    ${pokemon.weight / 10} kg
                                </strong>

                            </div>


                            <div class="data-box">

                                <span>
                                    ID
                                </span>

                                <strong>
                                    #${String(pokemon.id).padStart(3, "0")}
                                </strong>

                            </div>


                        </div>


                        <!-- FOOTER DE CARTA -->

                        <div class="card-footer">

                            <span>
                                POKÉMON CARD DATABASE
                            </span>

                            <span>
                                POKÉAPI
                            </span>

                        </div>


                    </div>

                </article>

            `;

        })


        // =================================================
        // ERROR
        // =================================================

        .catch(function (error) {

            console.error(error);

            resultado.innerHTML = `

                <div class="error-message">

                    <h2>
                        Error al cargar Pokémon
                    </h2>

                    <p>
                        No se pudo conectar con PokéAPI.
                    </p>

                </div>

            `;

        });

});