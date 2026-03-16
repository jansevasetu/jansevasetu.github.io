document.addEventListener("DOMContentLoaded", function(){

const form = document.getElementById("searchForm");
const input = document.getElementById("searchBox");
const results = document.getElementById("results");

if(!form || !input || !results){
return;
}

form.addEventListener("submit", async function(e){

e.preventDefault();

const query = input.value.toLowerCase().trim();

results.innerHTML="Searching...";

try{

const res = await fetch("./data/schemes.json")
const schemes = await res.json();

let matches = schemes.filter(function(scheme){
return scheme.name.toLowerCase().includes(query);
});

results.innerHTML="";

if(matches.length === 0){
results.innerHTML="<p>No schemes found.</p>";
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

}catch(error){

results.innerHTML="Search error. Please try again.";

}

});

});
