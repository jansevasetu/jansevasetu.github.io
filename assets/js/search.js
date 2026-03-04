function searchSchemes() {

let input = document.getElementById("searchInput").value.toLowerCase();

let schemes = document.querySelectorAll(".scheme-item");

schemes.forEach(function(item){

let text = item.textContent.toLowerCase();

if(text.includes(input)){
item.style.display = "block";
}else{
item.style.display = "none";
}

});

}
