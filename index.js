document.addEventListener('DOMContentLoaded', () => {
  var closeResultBtn = document.querySelectorAll('button.close-result');
  var playBtn = document.querySelector('button#play')
  var resultElement = document.querySelector('div.result')

  function play() {
    var random = Math.random();
    console.log(random)

    if (random >= 0.85) {
      resultElement.classList = 'result win';
    } else {
      resultElement.classList = 'result lose'
    }
  }

  function closeResult() {
    resultElement.classList = 'result closed'
  }

  closeResultBtn.forEach((button) => {
    button.addEventListener('click', closeResult);
  });

  playBtn.addEventListener('click', play);
});