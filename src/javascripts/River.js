import { renderForm, renderToDom } from './bearForm';
import bearString from './bearStrings';

const bearArray = [{
  bearName: 'Ted',
  bearImg: 'https://tinyurl.com/439x599d',
  bearDescription: "I'm a BEAR!!!!"
}];

const renderBears = (arr) => {
  let domString = '';
  arr.forEach((bear) => { domString += bearString(bear.bearName, bear.bearImg, bear.bearDescription); });

  renderToDom('#cardContainer', domString);
};

const addBear = (e) => {
  e.preventDefault();
  const bearName = document.getElementById('bearName').value;
  const bearDescription = document.getElementById('bearDescription').value;
  const bearImg = document.getElementById('bearURL').value;

  bearArray.push({
    bearName,
    bearImg,
    bearDescription
  });

  renderBears(bearArray);
};

const bearEvents = () => document.getElementById('bearForm').addEventListener('submit', (e) => addBear(e));

const init = () => {
  renderForm();
  renderBears(bearArray);
  bearEvents();
};

export default init;
