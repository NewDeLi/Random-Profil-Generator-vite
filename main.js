import './style.css'
import Chance from "chance";
const chance = new Chance();
console.log(chance.name)

window.addEventListener("load", (event) => {
  
  document.querySelector("#app").innerHTML = `
  <main>
  <h1>Hello ${chance.name({ middle_initial: true })}!</h1>
  <img class="main-img" src=${chance.avatar({protocol:"https"})}
  <div>
    <p>
    Hey my name is ${chance.first()} and I am ${chance.profession()}.
    </p>
    <p>
    I am${chance.age()} years old and come from ${chance.city()}.
    </p>
    <p>
    If i could be like an animal i would be like ${chance.animal()}.
    </p>
  </div>
  <div>
  <p><img>${chance.phone()}</p>
  <p><img>${chance.email()}</p>
  </div>
  </main>
  
`;
});
