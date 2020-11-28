const coreURL = 'https://www.dnd5eapi.co/api/races';








async function readApi()
{
    console.log(`calling read api......`);
    const incomingResponse = await fetch(coreURL);
    const data = await incomingResponse.json();
    console.log(data);
    
    
}

const coll = document.getElementsByClassName("collapsible");

for (let card of coll){
  card.addEventListener("click", function() {
    this.classList.toggle("active", "test");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

