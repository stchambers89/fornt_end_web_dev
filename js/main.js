const notelinks = 
[
  {label: "Week 1 notes", url: "week1/index.html"},
  {label: "Week 2 notes", url: "week2/index.html"},
  {label: "Week 3 notes", url: "week3/index.html"},
  {label: "Week 4 notes", url: "week4/index.html"},
  {label: "Week 5 notes", url: "week5/index.html"},
  {label: "Week 6 notes", url: "week6/index.html"},
  {label: "Week 7 notes", url: "week7/index.html"},
  {label: "Week 8 notes", url: "week8/index.html"},
  {label: "Week 9 notes", url: "week9/index.html"},
  {label: "Week 10 notes", url: "week10/index.html"}
]

const noteList = document.getElementById("weekList");

for (let i=0; i < notelinks.length; i++)
{
  let listItem = document.createElement("li");
  let anchor = document.createElement("a");

  anchor.setAttribute("href", notelinks[i].url); 
  anchor.innerText = notelinks[i].label;

  listItem.appendChild(anchor);
  noteList.appendChild(listItem);
  
}



