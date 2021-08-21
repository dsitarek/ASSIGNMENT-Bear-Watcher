const bearString = (bearName, bearImg, bearDescription, fish, timeCaught, timeTried) => `<div class="card" id='card--${bearName}'>
<img src="${bearImg}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${bearName}</h5>
  <p class="card-text">${bearDescription}</p>
  <div class="card-fish">
    <div>
        <h6>Fish Caught: ${fish}</h6>
     <ul>${timeCaught}</ul>
     </div>
     <div>
    <h6>Times Tried:</h6>
    <ul>${timeTried}</ul>
  </div>
  </div>
  <button class="btn btn-primary" id="caughtBtn--${bearName}">Caught a fish</a>
  <button class="btn btn-primary" id="triedBtn--${bearName}">Tried to catch a fish</a>
</div>
</div>`;

export default bearString;
