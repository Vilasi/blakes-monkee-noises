const monkeeList = document.querySelector('.monkee-noises-list');

const monkeeNoisesArray = [];

for (let i = 0; i < 1; i++) {
  monkeeNoisesArray.push(1);
}

monkeeList.innerHTML = '';

monkeeNoisesArray.forEach((num) => {
  console.log(num);
  monkeeList.innerHTML += `<li class="list-group-item text-center">
          <audio controls><source src="audio/${num}.mp3" type="audio/mpeg" /></audio>
        </li>`;
});