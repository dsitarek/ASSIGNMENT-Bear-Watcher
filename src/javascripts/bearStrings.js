const bearString = (bearName, bearImg, bearDescription) => `<div class="card" style="width: 18rem;">
<img src="${bearImg}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${bearName}</h5>
  <p class="card-text">${bearDescription}</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`;

export default bearString;
