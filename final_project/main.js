import {playerCharacter} from './playerCharacter.js'

const coreURL = 'https://www.dnd5eapi.co/api/';
const playStyleList = ['brazen', 'shadow', 'arcane'];
const styleLength = playStyleList.length;
const raceList = ['dragonborn', 'dwarf', 'elf', 'gnome', 'half-elf', 'half-orc', 'halfling', 'human', 'tiefling'];
const classList = ['barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'ranger', 'rouge', 'sorcerer', 'warlock', 'wizard'];
const classLength = classList.length;
const line = "<hr class='line'>";
const coll = document.getElementsByClassName("collapsible");

//Listen for user even and fire appropriate function
for (let card of coll){
  card.addEventListener("click", function(){
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){ 
      // *may have fixed with auto scroll* need aditional conditional to look at parent node, playstyle/race/class depends on how large the box is. ALso need to not make this hard coded for different view heights. 
      content.style.maxHeight = null;
    } 
    else {
      content.style.maxHeight =  "400px";
      //content.style.overflow.y = "scroll";
    } 
    let contentName = content.id;
    if(raceList.some(a => a === contentName)){
      readRaceApi(contentName);
    }
    else if (classList.some(a => a === contentName)){
      readClasses(contentName);
    }
    else if (playStyleList.some(a => a === contentName)){
      readPlayStyle(contentName);
    }
    
  });
}

//Player Style Suggestions
async function readPlayStyle(playerStyle){
  const incomingResponse = await fetch('playStyle.json');
  const data = await incomingResponse.json();
  
  let i;
  for(let index = 0; index < styleLength; index++){
    if(playerStyle === playStyleList[index]){
      i = index;
    }
  }
 
    let suggestList = data.playStyle[i].suggest;
    for(let j = 0; j < suggestList.length; j++){
          console.log(suggestList[j]);
          document.getElementById(`${playerStyle}_list`).innerHTML += `<li> ${suggestList[j]} </li>`;
        }
  
  let output = `
                <p> <span class='headText'>${data.playStyle[i].introHead}</span>${line}${data.playStyle[i].intro} </p>`

  document.getElementById(`${playerStyle}_info`).innerHTML = output; 
}

//gather race info from API and display
async function readRaceApi(race){
  const incomingResponse = await fetch(`${coreURL}races/${race}/`);
  const data = await incomingResponse.json();
  
  let output = `  
                <p> <span class='headText'>Lifespan</span>${line} ${data.age} </p>
                <p> <span class='headText'>Alignment</span>${line} ${data.alignment} </p>
                <p> <span class='headText'>Size</span>${line} ${data.size_description} </p>
                <p> <span class='headText'>Languages</span>${line} ${data.language_desc} </p>`;

  document.getElementById(`${race}_info`).innerHTML = output; 
}

//read class info from json
async function readClasses(playerClass){
  const incomingResponse = await fetch('playerClass.json');
  const data = await incomingResponse.json();
  let i;
  for(let index = 0; index < classLength; index++){
    if(playerClass === classList[index]){
      i = index;
    }
  }

  let output = `
              <p> <span class='headText'> ${data.class[i].class} ${data.class[i].introHead}</span>${line}${data.class[i].intro} </p>
              <p> <span class='headText'>${data.class[i].historyHead}</span>${line}${data.class[i].history}</p>
              <p> <span class='headText'>${data.class[i].personalityHead}</span>${line}${data.class[i].personality}</p>
              <p> <span class='headText'> Your ${data.class[i].class}</span>${line}${data.class[i].creation}</p>`;

  document.getElementById(`${playerClass}_info`).innerHTML = output; 
}

let character = new playerCharacter('Dragonborn', 'Paladin');

console.log(character.displayCharacter());
