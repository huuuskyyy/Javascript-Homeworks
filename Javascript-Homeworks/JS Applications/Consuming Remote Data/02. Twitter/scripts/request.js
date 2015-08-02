/// <reference path="data.js" />

(function () {
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/tweets",
        contentType: "application/json",
        data: JSON.stringify(data),
        success: function (data) {
            data = JSON.parse(data);
            console.log(data);
            displayData(data);

        },
        error: function (error) {
            console.log(error);
        }
    });
})();

    function displayData(tweetData) {
        var line = document.createElement('br');
        for (var i = 0; i < tweetData.length; i++) {
            var div = document.createElement('div');

            var date = document.createElement('p');
            date.innerHTML = tweetData[i].created_at;

            var text = document.createElement('p');
            var textAll = tweetData[i].text;
            var tweetURL = textAll.substring(textAll.indexOf('http'));
            var textOnly = textAll.substring(0, textAll.indexOf('http'));

            var anchor = document.createElement('a');
            anchor.setAttribute('href', tweetURL);
            anchor.innerHTML = 'Link to the post';
            console.log(textOnly);
            console.log(tweetURL);
            text.innerHTML = textOnly;
            div.appendChild(date);
            div.appendChild(text);
            div.appendChild(anchor);
            document.body.appendChild(div);

        }
    }