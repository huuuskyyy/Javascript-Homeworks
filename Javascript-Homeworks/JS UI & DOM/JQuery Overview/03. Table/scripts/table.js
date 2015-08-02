var students = [
            {
                firstName: 'Pesho',
                lastName: 'Peshov',
                grade: 4
            },
            {
                firstName: 'Gosho',
                lastName: 'Goshov',
                grade: 4
            },
            {
                firstName: 'Tosho',
                lastName: 'Toshov',
                grade: 4
            },
            {
                firstName: 'Misho',
                lastName: 'Mishov',
                grade: 4
            },
];

var $table = $('<table />');
$table.css('border-collapse', 'collapse');

var $headRow = $('<tr />');
var $header = $('<th />').html('First name');
$header.appendTo($headRow);

$header = $('<th />').html('Last name');
$header.appendTo($headRow);

$header = $('<th />').html('Grade');
$header.appendTo($headRow);

$headRow.appendTo($table);

for (var i = 0; i < students.length; i++) {

    var $currentRow = $('<tr />');
    var $fName = $('<td />').html(students[i].firstName);
    var $lName = $('<td />').html(students[i].lastName);
    var $grade = $('<td />').html(students[i].grade);

    $fName.appendTo($currentRow);
    $lName.appendTo($currentRow);
    $grade.appendTo($currentRow);

    $currentRow.appendTo($table);
}

$table.appendTo(document.body);

var $tableStyle = $('tr, td, th');
$tableStyle.css({
    border: '1px solid black',
    margin: '0',
    padding: '0',
    width: '100px',
    textAlign: 'center'
});