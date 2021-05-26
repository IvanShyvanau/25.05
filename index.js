/*console.log(document.body);
document.title = "123";
console.log(document.location);

let div = document.getElementById('test');
console.log(div);

const block = document.querySelectorAll("#test")
console.log('block: ', block);

let element = document.getElementsByClassName('parent bold');
console.log('element: ', element);
for (let item of element) {
  item.style.fontWeight = "bold";
}

function change() {
  let button = document.getElementsByTagName("button")[0];
  button.classList.toggle('enabled');
  if (button.classList.contains('enabled')) {
    button.innerHTML = "вкл";
    button.style.color = "red";
  } else {
    button.innerHTML = "выкл";
    button.style.color = "white";
  }
}

const toStop = document.querySelectorAll('.move');
toStop.addEventListener('click', () => {
  if (move.animationPlayState) {
    btn.style.animationPlayState('paused');
  }
});


const move = document.querySelectorAll('.move');

function change() {
  const button = document.getElementsByClassName('.btn');

  button.classList.toggle('enabled');
  if (button.classList.contains('enabled')) {
    button.innerHTML = "вкл";
    button.style.color = "red";
  } else {
    button.innerHTML = "выкл";
    button.style.color = "white";
  }
}
*/
//const elem = document.querySelector('.move');
//const btn = document.querySelector('.btn');

/*function change() {
  btn.addEventListener("click", () => {
    console.log('Button clicked');
  });
}*/

var elem = document.querySelector('.move');
var button = document.querySelector("button");
button.addEventListener("click", function () {
  if (elem.classList.toggle('active')) {
    button.innerHTML = "Запустить";
    console.log('Остановить');
    button.style.backgroundColor = 'green';
    elem.style.animationPlayState = 'paused';
    elem.innerHTML = 'У тебя получилось';
    elem.style.color = 'green';
    elem.style.fontSize = '18px';
  } else {
    button.innerHTML = "Остановить";
    console.log('Запустить');
    button.style.backgroundColor = 'red';
    elem.style.animationPlayState = 'running';
    elem.innerHTML = 'останови меня';
    elem.style.color = 'red';
    elem.style.fontSize = '14px';
  }
});