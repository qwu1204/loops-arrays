// loop
var count = 1;
var list = '';

while (count < 11) {
  list += '<li>current count is: ' + count + '</li>';
  count += 1;
}

// output results
document.write("<h1>Loops</h1>");
document.write("<ul>" + list + "</ul>");

var myItems = [["question one","answer one"],["question two","answer two"]];

var secondList = "<ul>";

var i = 0;
while(i < myItems.length){
 secondList += "<li>" + myItems[i] + "</li>";
}

secondList += "</ul>";
document.write("<p>"+myItems[0]+"</p>");
