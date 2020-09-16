const links = 
[
  {
    label: "Week 1 notes"
    
  },

  {
    label: "Week 2 notes"
    
  }
]

var ol = document.querySelector("ol");

for (var i = 0; i < links.length; i++) 
{
  var text = links[i].label;

  var listItem = document.createElement("ol");
  listItem.textContent = text;

  ol.appendChild(listItem);
}