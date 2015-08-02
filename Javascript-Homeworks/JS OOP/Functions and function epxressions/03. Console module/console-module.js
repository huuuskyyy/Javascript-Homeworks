var specialConsole = (function () {

    function extractText(strings) {
        if (strings.length == 1) {
            return strings[0];

        } else {

            var text = strings[0];
            var target;

            for (var i = 1; i < strings.length; i++) {

                target = "\\{" + (i - 1) + "\\}";
                var re = new RegExp(target, "g");
                text = text.replace(re, strings[i]);

            }

            return text;
        }
    }

    function writeLine() {

        var textToBeDisplayed = extractText(arguments);

        console.log(textToBeDisplayed);
    }

    function writeError() {

        var textToBeDisplayed = extractText(arguments);

        console.error(textToBeDisplayed);
    }

    function writeWarning() {

        var textToBeDisplayed = extractText(arguments);

        console.warn(textToBeDisplayed);
    }

    return {

        writeLine: writeLine,
        writeError: writeError,
        writeWarning: writeWarning
    };

})();