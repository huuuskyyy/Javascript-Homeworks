(function () {
    var data = [{
        number: 1,
        title: "Course introduction",
        date1: "Some date here",
        date2: "Different date here"
    },
        {
            number: 2,
            title: "First lection",
            date1: "Some date here",
            date2: "Different date here"
        },
        {
            number: 3,
            title: "Second lection",
            date1: "Some date here",
            date2: "Different date here"
        },
        {
            number: 4,
            title: "Third lection",
            date1: "Some date here",
            date2: "Different date here"
        },
        {
            number: 5,
            title: "Forth lection",
            date1: "Some date here",
            date2: "Different date here"
        }
    ];

    var tableSourceTemplate = document.getElementById('table-template').innerHTML;
    var template = Handlebars.compile(tableSourceTemplate);
    var generatedTableByTemplate = template({ tableCells: data });

    var tableTemplateOutput = document.getElementById('handlebars-table-output');
    tableTemplateOutput.innerHTML = generatedTableByTemplate;
}());