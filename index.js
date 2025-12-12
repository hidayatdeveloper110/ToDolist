
document.body.style.background =
"linear-gradient(270deg,#6c5ce7,#00cec9,#a29bfe)";
document.body.style.backgroundSize = "600% 600%";
document.body.style.animation = "bg 10s infinite alternate";
document.body.style.height = "100vh";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";

const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");

input.style.fontSize = "18px";
input.style.padding = "12px";
input.style.borderRadius = "10px";
input.style.border = "none";
input.style.outline = "none";
input.style.transition = "0.3s";
input.style.boxShadow = "0 0 10px cyan";

input.onfocus = () => input.style.boxShadow = "0 0 25px white";
input.onblur = () => input.style.boxShadow = "0 0 10px cyan";

addBtn.style.padding = "12px 20px";
addBtn.style.marginTop = "10px";
addBtn.style.border = "none";
addBtn.style.borderRadius = "10px";
addBtn.style.fontWeight = "bold";
addBtn.style.fontSize = "16px";
addBtn.style.cursor = "pointer";
addBtn.style.transition = "0.2s";
addBtn.style.background = "black";
addBtn.style.color = "white";
addBtn.style.boxShadow = "0 0 15px white";

let scale = true;
setInterval(()=>{
  addBtn.style.transform = scale? "scale(1.05)" : "scale(1)";
  scale = !scale;
},600);

function addTodo() {
  const text = input.value.trim();

  if (!text) {
    input.style.animation = "shake 0.3s";
    setTimeout(()=>input.style.animation="",300);
    return;
  }

  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");

  span.textContent = text;
  delBtn.textContent = "✖";

  li.style.listStyle = "none";
  li.style.marginTop = "10px";
  li.style.padding = "12px";
  li.style.width = "280px";
  li.style.background = "rgba(0,0,0,0.6)";
  li.style.color = "white";
  li.style.display = "flex";
  li.style.justifyContent = "space-between";
  li.style.borderRadius = "12px";
  li.style.transition = "0.4s";
  li.style.transform = "scale(0) rotate(180deg)";
  li.style.boxShadow = "0 0 15px lime";

  li.onmouseenter = ()=> li.style.boxShadow = "0 0 30px yellow";
  li.onmouseleave = ()=> li.style.boxShadow = "0 0 15px lime";

  delBtn.style.border = "none";
  delBtn.style.background = "red";
  delBtn.style.color = "white";
  delBtn.style.borderRadius = "50%";
  delBtn.style.cursor = "pointer";
  delBtn.style.transition = "0.3s";
  delBtn.onmouseenter =()=> delBtn.style.transform="rotate(90deg) scale(1.2)";
  delBtn.onmouseleave =()=> delBtn.style.transform="rotate(0) scale(1)";

  delBtn.onclick = () => {
    li.style.transform = "scale(2) rotate(360deg)";
    li.style.opacity = "0";
    li.style.boxShadow = "0 0 50px red";
    setTimeout(()=>list.removeChild(li),400);
  };

  li.appendChild(span);
  li.appendChild(delBtn);
  list.appendChild(li);

  setTimeout(()=> li.style.transform = "scale(1) rotate(0)",10);
  input.value = "";
}

addBtn.addEventListener("click", addTodo);
input.addEventListener("keydown", e => {
  if (e.key === "Enter") addTodo();
});

const style = document.createElement("style");
style.textContent = `
@keyframes bg {
  0% {background-position:0% 50%}
  50% {background-position:100% 50%}
  100% {background-position:0% 50%}
}
@keyframes shake {
  0%{transform:translateX(0)}
  25%{transform:translateX(-5px)}
  50%{transform:translateX(5px)}
  75%{transform:translateX(-5px)}
  100%{transform:translateX(0)}
}
`;
document.head.appendChild(style);