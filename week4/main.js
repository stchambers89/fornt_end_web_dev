const form = document.forms['search'];
form.addEventListener ('submit', search, false);

input.value = 'Search Here';

function search(event) 
{
    alert(`Form Submitted, you searched for: ${input.value}`);
    event.preventDefault();
}


const input = form.elements.searchInput;
input.addEventListener('focus', function(){
    if (input.value==='Search Here') {
        input.value = '' 
    }
}, false);

input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Search Here';
    } }, false);