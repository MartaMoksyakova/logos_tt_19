let textForm = document.forms['textForm'];

textForm.move.addEventListener('click', function(){
    let text = textForm.text.value;
    if(text=='') false;
    else textForm.placeholderText.placeholder = text;
});
textForm.placeholderInput.addEventListener('blur', function(){
    let plcholderInput = textForm.placeholderInput.value;
    textForm.placeholderInput.placeholder = plcholderInput;
    textForm.placeholderInput.value = '';
})


