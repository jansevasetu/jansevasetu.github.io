document.addEventListener("DOMContentLoaded", function(){

async function loadSchemes(){

try{

const res = await fetch("data/schemes.json");

const schemes = await res.json();

const input = document.getElementById("searchBox");
const results = document.getElementById("results");

if(!input || !results){
return;
}

input.addEventListener("input", function(){

let query = input.value.toLowerCase().trim();

results.innerHTML="";

if(query.length === 0){
return;
}

let matches = schemes.filter(function(scheme){
return scheme.name.toLowerCase().includes(query);
});

if(matches.length === 0){
results.innerHTML="<p>No schemes found</p>";
return;
}

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

console.log("Search error:", error);

}

}

loadSchemes();

});
