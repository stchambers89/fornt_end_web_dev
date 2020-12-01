const coreURL = 'https://www.dnd5eapi.co/api/';
const raceList = ['dragonborn', 'dwarf', 'elf', 'gnome', 'half-elf', 'half-orc', 'halfling', 'human', 'tiefling'];






async function readClasses(playerClass)
{
    console.log(`calling class Json......`);
    const incomingResponse = await fetch('playerClass.json');
    const data = await incomingResponse.json();
    console.log(data);
    // need to see if passes in the player class, then loop through with conditional playerClass === class[i].class
    //may want to edit the json for readability. 
    let output = `
                    ${data.class[0].intro}
                    ${data.class[0].history}
                    ${data.class[0].personality}
                    ${data.class[0].creation}
                    
                `;

    document.getElementById(`${playerClass}_info`).innerHTML = output; 
}

async function readRaceApi(race)
{
  console.log(`calling read api......`);
  const incomingResponse = await fetch(`${coreURL}races/${race}/`);
  const data = await incomingResponse.json();
  console.log(data);

  let output = `  <p> <h3>Lifespan</h3><hr class="line"> ${data.age} </p>
                  <p> <h3>Alignment</h3><hr class="line"> ${data.alignment} </p>
                  <p> <h3>Size</h3><hr class="line"> ${data.size_description} </p>
                  <p> <h3>Languages</h3><hr class="line"> ${data.language_desc} </p>`;

  document.getElementById(`${race}_info`).innerHTML = output;
    
}

const coll = document.getElementsByClassName("collapsible");

for (let card of coll){
  card.addEventListener("click", function() 
  {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight)
    { // *may have fixed with auto scroll* need aditional conditional to look at parent node, playstyle/race/class depends on how large the box is. ALso need to not make this hard coded for different view heights. 
      content.style.maxHeight = null;
    } 
    else 
    {
      content.style.maxHeight =  "350px";
      content.style.overflow = "auto";
    } 
    let contentName = content.id;
    console.log(contentName);
    if(raceList.some(a => a === contentName))
    {
      console.log(`Race selceted and fired`)
      readRaceApi(contentName);
    }
    else
    {
      console.log(`class selceted and fired`)
      readClasses(contentName)
    }
    
  });
}




