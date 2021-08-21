import { renderForm, renderToDom } from './bearForm';

const bearArray = [{
  bearName: 'Ted',
  bearImg: 'https://tinyurl.com/439x599d',
  bearDescription: "I'm a BEAR!!!!"
}];

const bearString = (bearName, bearImg, bearDescription) => `<div class="card" style="width: 18rem;">
<img src="${bearImg}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${bearName}</h5>
  <p class="card-text">${bearDescription}</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`;

const renderBears = (arr) => {
  let domString = '';
  arr.forEach((bear) => { domString += bearString(bear.bearName, bear.bearImg, bear.bearDescription); });

  renderToDom('#cardContainer', domString);
};

const init = () => {
  renderForm();
  renderBears(bearArray);
};

export default init;
