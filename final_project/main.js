const coreURL = 'https://www.dnd5eapi.co/api/';
const raceList = ['dragonborn', 'dwarf', 'elf', 'gnome', 'half-elf', 'half-orc', 'halfling', 'human', 'tiefling'];
const classesList = ['barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'ranger',
'rouge', 'sorcerer', 'warlock', 'wizard'];





async function readClasses(classes)
{
    console.log(`calling read api......`);
    const incomingResponse = await fetch('classes.json');
    const data = await incomingResponse.json();
    console.log(data);

    let output = `
                    ${data.class[0].intro}
                    
                `;

    document.getElementById(classes+"_info").innerHTML = output;
    
    
}

async function readRaceApi(race)
{
    console.log(`calling read api......`);
    const incomingResponse = await fetch(`${coreURL}races/${race}/`);
    const data = await incomingResponse.json();
    console.log(data);

    let output = `
                    <p> Lifespan: ${data.age} </p>
                    <p> Alignment: ${data.alignment} </p>
                    <p> Size: ${data.size_description} </p>
                    <p> Languages: ${data.language_desc} </p>
                    
                `;

    document.getElementById(race+"_info").innerHTML = output;
    
    
}

const coll = document.getElementsByClassName("collapsible");

for (let card of coll){
  card.addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
    let contentName = content.id;
    console.log(contentName);
    if(raceList.some(a => a === contentName))
    {
      readRaceApi(contentName);
    }
    else{
      console.log(`you clicked the ${contentName} class`)
      readClasses(contentName)
    }
    
  });
}

let barbarian = document.getElementById('barbarian_info');



