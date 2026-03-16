async function searchSchemes(){

const res = await fetch('/data/schemes.json');

const schemes = await res.json();

const input = document.getElementById("searchBox");

const results = document.getElementById("results");

input.addEventListener("keyup", function(){

let query = input.value.toLowerCase();

results.innerHTML="";

schemes.filter(scheme =>

scheme.name.toLowerCase().includes(query)

).forEach(scheme => {

results.innerHTML +=

`<div class="scheme-card">

<h3>${scheme.name}</h3>

<p>${scheme.benefit}</p>

<a href="${scheme.url}">View Details</a>

</div>`;

});

});

}

searchSchemes();
