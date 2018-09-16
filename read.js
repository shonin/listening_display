const fs = require('fs');

let buffer = fs.readFileSync('transmission_of_the_lamp.txt', 'utf-8');

let active = document.getElementById("active");
let past = document.getElementById("past");
let active_count = 0;

let bufferDisplay = () => {
  let buffer_first_space_index = buffer.indexOf(" ");

  active.innerText = active.innerText + " " + buffer.substring(0, buffer_first_space_index);
  active_count++;

  if (active_count > 5) {
    let inner_text_first_space_index = active.innerText.indexOf(" ");
    past.innerText = past.innerText + " " + active.innerText.substring(0, inner_text_first_space_index);
    active.innerText = active.innerText.substring(inner_text_first_space_index + 1);
  }

  if (buffer_first_space_index > 0) {
    buffer = buffer.substring(buffer_first_space_index + 1);
  } else {
    // stop interval when the buffer runs up
    clearInterval(bufferRun);
  }
};

// repeat with the interval of 0.4 seconds
let bufferRun = setInterval(() => bufferDisplay(), 400);