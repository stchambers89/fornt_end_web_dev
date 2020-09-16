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

links.forEach(fill_weeks())
 
function fill_weeks()
{
  var listItem = document.createElement("a");
  listItem.setAttribute("href", links[i].url); 
  listItem.innerText = links[i].label;  
  li.appendChild(listItem);
}
