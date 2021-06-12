$(function() {
    console.log('Let\'s get ready to party with jQuery!');
    const r = $colorInputs.eq(0).val();
    const g = $colorInputs.eq(1).val();
    const b = $colorInputs.eq(2).val();
    const rgb = `${r}, ${g}, ${b}`; 
    $('body').css('background-color', `rgb(${rgb})`)
});

let $articleImage = $('article img');
$articleImage.addClass('image-center');

let $lastParagraph = $('article p').eq(-1);
$lastParagraph.remove();

let $title = $('#title').eq(0);

const randomFontSize = () => Math.floor(Math.random() * 101);
$title.css('font-size', `${randomFontSize()}px`);

let $orderedList = $('ol');
let $newLi = $('<li>I like coding in JavaScript.</li>');
$newLi.appendTo($orderedList);

let $aside = $('aside');
$aside.html('<p>I\'m sorry about that list! What a silly idea.');

let $colorInputs = $('input');
$colorInputs.on('change', () => {
    const r = $colorInputs.eq(0).val();
    const g = $colorInputs.eq(1).val();
    const b = $colorInputs.eq(2).val();
    const rgb = `${r}, ${g}, ${b}`; 
    $('body').css('background-color', `rgb(${rgb})`)
});

$articleImage.on('click', () => $articleImage.remove());
