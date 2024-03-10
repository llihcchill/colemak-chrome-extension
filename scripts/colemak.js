function selectButton() {
  window.addEventListener("mouseup", 
  (event) => {
    const selectedText = window.getSelection();
    const stringSelectedText = selectedText.toString();

    if(stringSelectedText == "") {
      return;
    }

    // 1. make HTML appear at mouse coordinates
    //      - make html doc
    //      - use MouseEvent.x / MouseEvent.y or something
    // 2. find the element that the selected text is under



  }, true
  )
}

selectButton();
