var textInput;

window.addEventListener("mousedown", 
  (event) => {
    window.addEventListener("mousemove", mousemoveListener, {passive: true});
  }
);

function mousemoveListener(event) {
  textInput = document.elementFromPoint(event.clientX, event.clientY);
}



window.addEventListener("mouseup", 
  (event) => {
  const selectedText = window.getSelection();
  const stringSelectedText = selectedText.toString();

  if(stringSelectedText == "") {
    return;
  }

  // 1. make a keymap, see if a seperate json file would work or just a dictionary
  // 2. insert that into textInput

  }, true
)
