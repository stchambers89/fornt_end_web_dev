const coreURL = 'https://www.dnd5eapi.co/api/';
const raceList = ['dragonborn', 'dwarf', 'elf', 'gnome', 'half-elf', 'half-orc', 'halfling', 'human', 'tiefling'];
const classList = ['barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'ranger', 'rouge', 'sorcerer', 'warlock', 'wizard'];
const classLength = classList.length;




async function readClasses(playerClass){
  const incomingResponse = await fetch('playerClass.json');
  const data = await incomingResponse.json();
  let index;
  for(let i = 0; i < classLength; i++){
    if(playerClass === classList[i]){
      index = i;
    }
  }

  let output = `
                  ${data.class[index].intro}
                  ${data.class[index].history}
                  ${data.class[index].personality}
                  ${data.class[index].creation}
                  
              `;

  document.getElementById(`${playerClass}_info`).innerHTML = output; 
}

async function readRaceApi(race)
{
  const incomingResponse = await fetch(`${coreURL}races/${race}/`);
  const data = await incomingResponse.json();
  console.log(data);

  let output = `  <p> <span class='headText'>Lifespan</span><hr class="line"> ${data.age} </p>
                  <p> <span class='headText'>Alignment</span><hr class="line"> ${data.alignment} </p>
                  <p> <span class='headText'>Size</span><hr class="line"> ${data.size_description} </p>
                  <p> <span class='headText'>Languages</span><hr class="line"> ${data.language_desc} </p>`;

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
      content.style.maxHeight =  "400px";
      content.style.overflow.y = "scroll";
    } 
    let contentName = content.id;
    if(raceList.some(a => a === contentName))
    {
      readRaceApi(contentName);
    }
    else
    {
      readClasses(contentName);
    }
    
  });
}




