import { renderForm, renderToDom } from './bearForm';
import bearString from './bearStrings';

const bearArray = [{
  bearName: 'Ted',
  bearImg: 'https://tinyurl.com/439x599d',
  bearDescription: "I'm a BEAR!!!!",
  fish: 0,
  timeCaught: [],
  timeAttempted: [],
}, {
  bearName: 'Yogi',
  bearImg: 'https://tinyurl.com/5fzkj43r',
  bearDescription: 'I like picnic baskets',
  fish: 0,
  timeCaught: [],
  timeAttempted: [],
}
];

const renderBears = (arr) => {
  let domString = '';
  let caughtTimeString = '';
  let triedTimeString = '';
  arr.forEach((bear) => {
    caughtTimeString = '';
    triedTimeString = '';
    bear.timeCaught.forEach((time) => { caughtTimeString += `<li>${time}</li>`; });
    bear.timeAttempted.forEach((time) => { triedTimeString += `<li>${time}</li>`; });
    domString += bearString(bear.bearName, bear.bearImg, bear.bearDescription, bear.fish, caughtTimeString, triedTimeString);
  });

  renderToDom('#cardContainer', domString);
};

const errorMessage = () => {
  const error = 'That bear already exists';
  renderToDom('#errorMessage', error);
};

const addBear = (e) => {
  e.preventDefault();
  const bearName = document.getElementById('bearName').value;
  const bearDescription = document.getElementById('bearDescription').value;
  const bearImg = document.getElementById('bearURL').value;

  if (bearArray.find((bear) => bear.bearName === bearName)) {
    errorMessage();
  } else {
    bearArray.push({
      bearName,
      bearImg,
      bearDescription,
      fish: 0,
      timeCaught: [],
      timeAttempted: [],
    });
    document.getElementById('errorMessage').innerHTML = '';
    document.getElementById('bearForm').reset();
  }
  renderBears(bearArray);
};

const catchFish = (e) => {
  const target = e.target.id;
  if (target.startsWith('caughtBtn')) {
    const time = new Date();
    const targetBear = target.split('--');
    const [, b] = targetBear;
    const bearIndex = bearArray.findIndex((bear) => bear.bearName === b);
    bearArray[bearIndex].fish += 1;
    bearArray[bearIndex].timeCaught.push(`${time.getMonth()}/${time.getDate()} ${time.getHours()}:${(time.getMinutes() < 10 ? '0' : '') + time.getMinutes()}`);
    renderBears(bearArray);
  }
};

const missedFish = (e) => {
  const target = e.target.id;
  if (target.startsWith('triedBtn')) {
    const time = new Date();
    const targetBear = target.split('--');
    const [, b] = targetBear;
    const bearIndex = bearArray.findIndex((bear) => bear.bearName === b);
    bearArray[bearIndex].timeAttempted.push(`${time.getMonth()}/${time.getDate()} ${time.getHours()}:${(time.getMinutes() < 10 ? '0' : '') + time.getMinutes()}`);
    renderBears(bearArray);
  }
};
const bearEvents = () => {
  document.getElementById('bearForm').addEventListener('submit', (e) => addBear(e));
  document.getElementById('cardContainer').addEventListener('click', (e) => missedFish(e));
  document.getElementById('cardContainer').addEventListener('click', (e) => catchFish(e));
};

const init = () => {
  renderForm();
  renderBears(bearArray);
  bearEvents();
};

export default init;
