const renderToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const renderForm = () => {
  const domString = `<form id="bearForm">
    <div class="mb-3">
      <label for="bearName" class="form-label">Bear Name</label>
      <input type="text" class="form-control" id="bearName">
    <div class="mb-3">
      <label for="bearDescription" class="form-label">Bear Name</label>
      <textarea rows="5" cols="80" class="form-control" id="bearDescription"></textarea>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>`;

  renderToDom('#formContainer', domString);
};

export { renderForm, renderToDom };
