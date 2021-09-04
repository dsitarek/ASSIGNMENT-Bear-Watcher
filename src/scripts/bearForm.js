const renderToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const renderForm = () => {
  const domString = `<form id="bearForm">
  <div class="error-message" id="errorMessage"></div>
    <div class="mb-3">
      <label for="bearName" class="form-label">Bear Name:</label>
      <input required type="text" class="form-control" id="bearName">
    <div class="mb-3">
      <label for="bearDescription" class="form-label">Bear Description:</label>
      <textarea rows="5" cols="80" class="form-control" id="bearDescription"></textarea>
    <div class="mb-3">
      <label for="bearURL" class="form-label">Bear Image URL:</label>
      <input required type="text" class="form-control" id="bearURL">

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>`;

  renderToDom('#formContainer', domString);
};

export { renderForm, renderToDom };
