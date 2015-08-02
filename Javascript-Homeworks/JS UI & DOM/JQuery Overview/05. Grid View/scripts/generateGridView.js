var students = [
            {
                firstName: 'Pesho',
                lastName: 'Peshov',
                grade: 4,
                additionalInfo: {
                    city: 'Varna',
                    pet: 'cat',
                    age: '22'
                }
            },
            {
                firstName: 'Gosho',
                lastName: 'Goshov',
                grade: 4,
                additionalInfo: {
                    city: 'Sofia',
                    pet: 'dog',
                    age: '18'
                }
            },
            {
                firstName: 'Tosho',
                lastName: 'Toshov',
                grade: 4,
                additionalInfo: {
                    city: 'Plovdiv',
                    pet: 'ninja-turtle',
                    age: '28'
                }
            },
            {
                firstName: 'Misho',
                lastName: 'Mishov',
                grade: 4,
                additionalInfo: {
                    city: 'Pleven',
                    pet: 'alien',
                    age: '26'
                }
            },
];

var $div = $('<div />').addClass('menu').css({
    width: '300px',
    height: '130px',
    border: '1px solid black',
    'margin-bottom': '20px'
});

var $inputFirst = $('<input type="text" id="first-item" placeholder="Enter first column value"">');
var $inputSecond = $('<input type="text" id="second-item" placeholder="Enter second column value" ">');
var $inputThird = $('<input type="text" id="third-item" placeholder="Enter third column value"">');

var $addMainItem = $('<button>Add item to main table</button>');
$addMainItem.on('click', function () {

    var $tempRow = $('<tr />');

    var $colOne = $('<td />').html($('#first-item').val());
    var $colTwo = $('<td />').html($('#second-item').val());
    var $colThree = $('<td />').html($('#third-item').val());

    $colOne.appendTo($tempRow);
    $colTwo.appendTo($tempRow);
    $colThree.appendTo($tempRow);

    $tempRow.on('click', function () {
        if ($(this).find('.additional-info').css('display') == 'block') {
            $(this).find('.additional-info').css('display', 'none');
            $(this).find('.additional-info').removeClass('selected');

        } else {
            $(this).find('.additional-info').css('display', 'block');
            $(this).find('.additional-info').addClass('selected');
        }

    });

    var $additionalTable = $('<table />');

    $additionalTable.attr('class', 'additional-info');

    $additionalTable.css('border-collapse', 'collapse');

    var $additionalHeadRow = $('<tr />');
    var $additionalHeader = $('<th />').html('City');
    $additionalHeader.appendTo($additionalHeadRow);

    $additionalHeader = $('<th />').html('Pet');
    $additionalHeader.appendTo($additionalHeadRow);

    $additionalHeader = $('<th />').html('Age');
    $additionalHeader.appendTo($additionalHeadRow);

    $additionalHeadRow.appendTo($additionalTable);

    $additionalTable.css('display', 'none');

    $additionalTable.appendTo($tempRow);

    $tempRow.appendTo($('#main'));

});

var $addNestedItem = $('<button>Add nested item</button>');

$addNestedItem.on('click', function () {

    var $tempRow = $('<tr />');

    var $colOne = $('<td />').html($('#first-item').val());
    var $colTwo = $('<td />').html($('#second-item').val());
    var $colThree = $('<td />').html($('#third-item').val());

    $colOne.appendTo($tempRow);
    $colTwo.appendTo($tempRow);
    $colThree.appendTo($tempRow);

    $tempRow.appendTo($('.selected'));
});

$inputFirst.appendTo($div);
$inputSecond.appendTo($div);
$inputThird.appendTo($div);
$addMainItem.appendTo($div);
$addNestedItem.appendTo($div);

$div.appendTo(document.body);
$('input').css('margin', '5px');

createBaseTable(students);

function createBaseTable(arguments) {

    var $table = $('<table id="main"/>');
    $table.css('border-collapse', 'collapse');

    var $headRow = $('<tr />');
    var $header = $('<th />').html('First name');
    $header.appendTo($headRow);

    $header = $('<th />').html('Last name');
    $header.appendTo($headRow);

    $header = $('<th />').html('Grade');
    $header.appendTo($headRow);

    $headRow.appendTo($table);

    for (var i = 0; i < arguments.length; i++) {

        var $currentRow = $('<tr />');
        var $fName = $('<td />').html(arguments[i].firstName);
        var $lName = $('<td />').html(arguments[i].lastName);
        var $grade = $('<td />').html(arguments[i].grade);
        var $additionalInfo = addAdditionalInfo(arguments[i].additionalInfo);

        $fName.appendTo($currentRow);
        $lName.appendTo($currentRow);
        $grade.appendTo($currentRow);
        $additionalInfo.appendTo($currentRow);

        $currentRow.on('click', function () {
            if ($(this).find('.additional-info').css('display') == 'block') {
                $(this).find('.additional-info').css('display', 'none');
                $(this).find('.additional-info').removeClass('selected');

            } else {
                $(this).find('.additional-info').css('display', 'block');
                $(this).find('.additional-info').addClass('selected');
            }

        });

        $currentRow.appendTo($table);
    }

    $table.appendTo(document.body);

}

function addAdditionalInfo(objectWithInfo) {

    var $additionalTable = $('<table />');

    $additionalTable.attr('class', 'additional-info');

    $additionalTable.css('border-collapse', 'collapse');

    var $additionalHeadRow = $('<tr />');
    var $additionalHeader = $('<th />').html('City');
    $additionalHeader.appendTo($additionalHeadRow);

    $additionalHeader = $('<th />').html('Pet');
    $additionalHeader.appendTo($additionalHeadRow);

    $additionalHeader = $('<th />').html('Age');
    $additionalHeader.appendTo($additionalHeadRow);

    $additionalHeadRow.appendTo($additionalTable);

    var $additionalCurrentRow = $('<tr />');
    var $city = $('<td />').html(objectWithInfo.city);
    var $pet = $('<td />').html(objectWithInfo.pet);
    var $age = $('<td />').html(objectWithInfo.age);

    $city.appendTo($additionalCurrentRow);
    $pet.appendTo($additionalCurrentRow);
    $age.appendTo($additionalCurrentRow);

    $additionalCurrentRow.appendTo($additionalTable);

    $additionalTable.css('display', 'none');

    return $additionalTable;
}