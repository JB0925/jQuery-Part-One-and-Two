const $ul = $('.ratings ul');
const $submitButton = $('#submit');
const $title = $('#title');
const $rating = $('#rating');
// create a counter for giving each li and remove button a unique id.
let i = 0;

// prevent form submission and append a new li and button to the ul.
$submitButton.on('click', (evt) => {
    evt.preventDefault();
    const $newLi = $(`<li id="li${i}">${$title.val()} | Rating: ${$rating.val()}<button type="submit" id=remove${i}>Remove</button></li>`);
    $newLi.appendTo($ul);
    i++;
});

// event listener on the ul to handle removing the li and button from the ul on click.
$ul.on('click', (evt) => {
    if (evt.target.id.includes('remove')) {
        const idNumber = evt.target.id.slice(6);
        const liToRemove = $(`#li${idNumber}`);
        liToRemove.css('opacity', '0');
        setTimeout(() => {
            liToRemove.remove();
        }, 1000);
    };
});