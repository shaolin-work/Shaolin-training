const state = {
day:1,
pushLevel:1,
stanceLevel:1,
coreLevel:1,
mode:"push"
};

function getWorkout(){
let push = 10 + state.pushLevel*2;
let stance = 30 + state.stanceLevel*10;
let core = 30 + state.coreLevel*10;

return [
`Push-ups: ${push}`,
`Horse stance: ${stance}s`,
`Plank: ${core}s`
];
}

function completeDay(){
state.day++;
state.pushLevel++;
state.stanceLevel++;
state.coreLevel++;
render();
}

function render(){
const app = document.getElementById("app");
app.innerHTML = "";

const card = document.createElement("div");
card.className="card";

card.innerHTML = `
<h3>Day ${state.day}</h3>
${getWorkout().map(x=>`<div>${x}</div>`).join("")}
<button onclick="completeDay()">Complete Day</button>
`;

app.appendChild(card);
}

render();
