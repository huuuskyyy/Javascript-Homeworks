var $div = $('<div />');
$div.css({
    width: '200px',
    height: '200px',
    display: 'inline-block',
    position: 'absolute',
    left: '150px',
    top: '150px',
    border: '1px solid black',
    backgroundColor: 'black'

});
$div.appendTo(document.body);

var $prevButton = $('<button />')
$prevButton.css({
    position: 'absolute',
    left: '70px',
    top: '250px'
}).html('Previous').attr('id', 'prev-btn');
$prevButton.appendTo(document.body);

var $nextButton = $('<button />')
$nextButton.css({
    position: 'absolute',
    left: '360px',
    top: '250px',
    width: '60px',
}).html('Next').attr('id', 'next-btn');
$nextButton.appendTo(document.body);

var $images = $('img');
var position = 0;

$images.css({
    position: 'absolute',
    top: '200px',
    left: '200px',
    display: 'none',
    width: '100px',
    height: '100px',
    zIndex: '10'
});

$('.selected').css({
    display: 'block'
});

$('#next-btn').on('click', clickNext);
$('#prev-btn').on('click', clickPrev);

setInterval(clickNext, 5000);

function clickNext() {

    var $current = $('.selected');
    //console.log($current.attr('id'));
    if ($current.next().is('img')) {
        $current.removeClass('selected');
        $current.css('display', 'none');
        $current.next().addClass('selected');
        $('.selected').css({
            display: 'block'
        });
    }
}

function clickPrev() {

    var $current = $('.selected');
    //console.log($current.attr('id'));
    if ($current.prev().is('img')) {
        console.log($current.prev())
        $current.removeClass('selected');
        $current.css('display', 'none');
        $current.prev().addClass('selected');
        $('.selected').css({
            display: 'block'

        });
    }
}