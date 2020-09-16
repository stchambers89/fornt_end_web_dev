  
const links = 
[
  {
    label: "Week 1 notes test this",
    url: "week1/index.html"
    
  },

  {
    label: "Week 2 notes",
    url: "week2/index.html"
  }
]

var li = document.getElementById("week_list");

//links.forEach(fill_weeks())

//function fill_weeks(item, index)
for (i=0; i < links.length; i++)
{
  times = 1;
  document.getElementById("test").innerHTML = "this has gone through " + times;
  var listItem = document.createElement("a");
  listItem.setAttribute("href", item[index].url); 
  listItem.innerText = item[index].label;  
  li.appendChild(listItem);
  times++;
}
