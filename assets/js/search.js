async function loadSchemes(){

try{

const res = await fetch('/data/schemes.json');

const schemes = await res.json();

const input = document.getElementById("searchBox");

const results = document.getElementById("results");

/* अगर page में search elements नहीं हैं तो script stop */

if(!input || !results){
return;
}

/* search function */

input.addEventListener("keyup",function(){

let query = input.value.trim().toLowerCase();

results.innerHTML="";

/* empty search */

if(query.length === 0){
return;
}

/* filter schemes */

let matches = schemes.filter(function(scheme){

return scheme.name.toLowerCase().includes(query);

});

/* no results */

if(matches.length === 0){

results.innerHTML = "<p>No schemes found.</p>";

return;

}

/* render results */

matches.forEach(function(scheme){

results.innerHTML += `

<div class="card">

<h3>${scheme.name}</h3>

<p>${scheme.benefit}</p>

<a href="${scheme.url}">View Details</a>

</div>

`;

});

});

}catch(error){

console.error("Scheme search error:", error);

}

}

loadSchemes();
