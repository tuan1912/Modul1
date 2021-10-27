let products=[];
function display() {
    let boardProduct = document.getElementById("display");
    let data = "<table>";
    for ( let i = 0; i < products.length; i++) {
        data += "<tr>";
        data+="<td>"+ products[i]+ "</td>"
        data+= "<td>" + "<button onclick='edit()'>Edit</button>" +"<td>"
    }
}