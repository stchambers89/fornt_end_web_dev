/*****************************************
 * URL dependant on picture
 *****************************************/
const coreURL = 'https://www.dnd5eapi.co/api/races/';
let race = "";


/*****************************************
 * picture event listeners fire only once
 *  I know there has to be a way to grab the id
 * of the element and convert it to a string
 * I, however, cannot find it. 
 *****************************************/
document.getElementById('dragonborn').addEventListener("click", function()
{
    race = "dragonborn"
    readApi(coreURL, race);
}, {once: true});
document.getElementById('dwarf').addEventListener("click", function()
{
    race = "dwarf"
    readApi(coreURL, race);
}, {once: true});
document.getElementById('elf').addEventListener("click", function()
{
    race = "elf"
    readApi(coreURL, race);
}, {once: true});
document.getElementById('gnome').addEventListener("click", function()
{
    race = "gnome"
    readApi(coreURL, race);
}, {once: true});
document.getElementById('half-elf').addEventListener("click", function()
{
    race = "half-elf"
    readApi(coreURL, race);
}, {once: true});
document.getElementById('halfling').addEventListener("click", function()
{
    race = "halfling"
    readApi(coreURL, race);
}, {once: true});
document.getElementById('human').addEventListener("click", function()
{
    race = "human"
    readApi(coreURL, race);
}, {once: true});
document.getElementById('tiefling').addEventListener("click", function()
{
    race = "tiefling"
    readApi(coreURL, race);
}, {once: true});
//console.log(endpoint)

async function readApi(coreURL, race)
{
    const endpoint = race +'/';
    const incomingResponse = await fetch(coreURL + endpoint);
    const data = await incomingResponse.json();
    let output = `<div class="race_info">
                <ul> 
                    <li class="race_name"> ${data.name} </li>
                    <p> Lifespan: ${data.age} </p>
                    <p> Alignment: ${data.alignment} </p>
                    <p> Size: ${data.size_description} </p>
                    <p> Languages: ${data.language_desc} </p>
                    
                </ul>
                </div>`;

    document.getElementById(race+"_info").innerHTML = output;
}

//readApi(coreURL, endpoint);
//console.log(raceList);
