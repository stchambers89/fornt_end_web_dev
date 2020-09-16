const links = 
[
  {
    label: "Week 1 notes",
    url: "week1/index.html"
    
  },

  {
    label: "Week 2 notes"
    
  }
]

var ol = document.querySelector("ol");

for (var i = 0; i < links.length; i++) 
{
  var text = links[i].label;
  var url = links[i].url

  var listItem = document.createElement("ol");
  listItem.textContent = text;
 <!-- document.getElementById("ol").setAttribute("href", links[i].url); not sure if this will work. -->
  listItem.setAttribute("href", links[i].url); 
  ol.appendChild(listItem);
}
