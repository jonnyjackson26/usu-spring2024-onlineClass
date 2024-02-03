let madLibsMessageElement=document.getElementById('madLibsMessage');
document.getElementById('submitMadLibs').addEventListener('click',() => {
    let person=document.getElementById('person').value;
    let place=document.getElementById('place').value;
    let adjective=document.getElementById('adjective').value;
    let gerund=document.getElementById('gerund').value;
    let adverb=document.getElementById('adverb').value;

    let madLibsMessage;
    if(person=="" || place=="" || adjective=="" || gerund=="" || adverb=="" ) {
        madLibsMessage='Please ensure that each input field has a word in it. Try Again.';
    } else {
        madLibsMessage = `Once upon a time, a person named ${person} was ${gerund} in ${place}. ${person} is a very ${adjective} person, so when he had finished he took a break and ${adverb} returned to ${gerund}. The end. `;
    }
    madLibsMessageElement.innerHTML=madLibsMessage;
});