document.addEventListener('DOMContentLoaded', function () {
  const resultElement = document.getElementById('result');
  const buttons = document.querySelectorAll('button');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      if (button.id === 'clear') {
        resultElement.textContent = '';
      } else if (button.id === 'equals') {
        try {
          resultElement.textContent = eval(resultElement.textContent);
        } catch (error) {
          resultElement.textContent = 'Error';
        }
      } else if (button.textContent === 'DEL') {
        resultElement.textContent = resultElement.textContent.slice(0, -1);
      } else {
        resultElement.textContent += button.textContent;
      }
    });
  });
});
