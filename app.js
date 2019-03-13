document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.getElementById('number').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);

      let output = '';

      if(response.type === 'success') {
        for(i = 0; i < response.value.length; i++) {
          var responseValue = response.value[i];
          output += `<li>${responseValue.joke}</li>`;
        }
      } else {
        output += '<li>Something went wrong<</li>'
      }

      document.querySelector('.jokes').innerHTML = output;

      console.log(response);
    }
  }

  xhr.onerror = function() {
    document.querySelector('.jokes').innerHTML = '<li>Not found API!!</li>';
  }

  xhr.send();

  e.preventDefault();
}