  
const links = 
[
  {
    label: "Week 1 notes",
    url: "week1/index.html"
    
  },

  {
    label: "Week 2 notes",
    url: "week2/index.html"
  }
]

var li = document.getElementById("week_list");

for (var i = 0; i < links.length; i++) 
{
  var listItem = document.createElement("a");
  listItem.setAttribute("href", links[i].url); 
  listItem.textContent = links[i].label;  
  li.appendChild(listItem);
}
