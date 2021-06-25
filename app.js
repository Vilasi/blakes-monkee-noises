const monkeeList = document.querySelector('.monkee-noises-list');
const playAll = document.querySelector('.btn');

const monkeeNoisesArray = [];

// numbers loop for use in the <li> generating script
for (let i = 1; i < 5; i++) {
  monkeeNoisesArray.push(i);
}

monkeeList.innerHTML = '';

// generate audio <li> elements
monkeeNoisesArray.forEach((num) => {
  console.log(num);
  monkeeList.innerHTML += `<li class="list-group-item text-center">
          <audio controls><source src="audio/${num}.mp3" type="audio/mpeg" /></audio>
        </li>`;
});

// play all audio at once
playAll.addEventListener('click', (event) => {
  let monkees = document.querySelectorAll('audio');

  monkees.forEach((monke) => monke.play());
});
