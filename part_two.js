const $ul = $('.ratings ul');
const $submitButton = $('#submit');
const $title = $('#title');
const $rating = $('#rating');
let i = 0;

$submitButton.on('click', (evt) => {
    evt.preventDefault();
    const $newLi = $(`<li id="li${i}">${$title.val()} | Rating: ${$rating.val()}<button type="submit" id=remove${i}>Remove</button></li>`);
    $newLi.appendTo($ul);
    i++;
});

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