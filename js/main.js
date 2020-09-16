const links = 
[
  {
    label: "Week1 notes"
    
  },

  {
    label: "Week 2 notes"
    
  }
]

var ul = document.querySelector("ul");

for (var i = 0; i < links.length; i++) {
  var link = links[i].label;

  var listItem = document.createElement("ul");
  listItem.textContent = link;

  ol.appendChild(listItem);
}