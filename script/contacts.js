let input = ['name', 'phone', 'email', 'txt'];
let info = [0, 0, 0, 0];
let button = document.getElementById('submit');

// make button disabled
button.disabled = true;

// checking if every field has something in it, and then enable button
for (let i = 0; i < input.length; i++) {
  document.getElementById(input[i]).addEventListener('keyup', function(event) {
    // if value of input is empty - 0, if value have some text - 1
    {event.target.value === '' ? info[i] = 0 : info[i] = 1};

    // checking if all array has number 1, if so we enable submit button
    {info.every((element) => element === 1) ? button.disabled = false : button.disabled = true};
  })
}