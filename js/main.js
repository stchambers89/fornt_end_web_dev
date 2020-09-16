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
  var listUrl = 

  ol.appendChild(listItem);
}
