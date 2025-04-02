

const title = document.getElementById("title");
const ptag = document.querySelector("p");
const ptag2 = document.querySelector("p#paragraph2");
const h2tags =document.querySelectorAll("h2");

console.log(document.getElementById("transform").innerText);
const change = document.getElementById("transform");
change.innerText = "pika pika cuuu";
change.style.backgroundColor = "yellow";
change.style.fontSize = "50px";
//font-size (css) == fontSize (js)


const image = document.getElementById("image");
image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfpg9E31kyD-1kfVs_46c4TlpCfFVSWokgkg&s";

const newh1 = document.createElement("h1");
newh1.innerText = "hello new element";
document.body.append(newh1);
console.log(newh1);

const newdiv = document.createElement('div');
newdiv.className = 'container';
newdiv.style.backgroundColor = "green";
document.body.append(newdiv);
newdiv.style.width = "100px";
newdiv.style.height = "100px";
console.log(newdiv);



console.log(title);
console.log(ptag);
console.log(ptag2);
console.log(h2tags);
console.log(change.style);