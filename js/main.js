const links = 
[
  {
    label: "Week 1 notes JS updated",
    url: "week1/index.html"
    
  },

  {
    label: "Week 2 notes",
    url: "week2/index.html"
  }
]

var li = document.getElementById("week_list");

links.forEach(fill_weeks())

function fill_weeks(item, index)
{
  times = 1;
  document.getElementById("test").innerHTML = "this has gone through " + times;
  var listItem = document.createElement("a");
  listItem.setAttribute("href", links.url); 
  listItem.innerText = links.label;  
  li.appendChild(listItem);
  times++;
}
