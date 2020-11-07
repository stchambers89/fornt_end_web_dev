let list = [];

document.getElementById('getApi').addEventListener('click', getApi);

function getApi()
{
    fetch('https://swapi.dev/api/planets/')
    .then( (response) => response.json())
    .then((data) => {
        let output = ''; 
        console.log(data)
        data.results.forEach(function(planet){
            output += ` <div class="planet_card">
                        <ul> 
                            <li class="planet_name"> ${planet.name} </li>
                            <li> Climate: ${planet.climate} </li>
                            <li> Terrain: ${planet.terrain} </li>
                            <li> Population: ${planet.population} </li>
                            <li> Planetary Rotation: ${planet.rotation_period} hours </li>
                            <li> Full solar rotaion: ${planet.orbital_period} days</li>  
                        </ul>
                        </div>`;
        });

        document.getElementById('output').innerHTML = output;
     });
}

getApi();