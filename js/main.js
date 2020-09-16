const links = [
  {
    label: "Week1 notes",
    url: "week1/index.html"
  },
  {
    label: "Week 2 notes",
    url: "week2/index.html"
  }
]

var ol = document.querySelector("ol");

for (var i = 0; i < links.length; i++) {
  var link = links[i].label;

  var listItem = document.createElement("ol");
  listItem.textContent = link.url;

  ol.appendChild(listItem);
}