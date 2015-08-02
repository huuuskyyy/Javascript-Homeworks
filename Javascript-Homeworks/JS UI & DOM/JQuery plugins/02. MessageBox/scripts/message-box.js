(function ($) {
    $.fn.messageBox = function () {
        var $this = $(this);
        var $container = $('<div id="container" />');
        var $messageBox = $('<div id="message-box" />').html('I\' message').css('width', '250px');
        var $successButton = $('<button id="success-btn" />').text('Success message');
        var $errorButton = $('<button id="error-btn" />').text('Error message');

        $successButton.on('click', function () {

            var opacity = 0;
            var $box = $('#message-box').html(' ').css('opacity', opacity);
            $box.html('Success message').css('background-color', 'green');

            var intervalFadeIn = setInterval(function () {
                opacity += 0.05;
                $box.css('opacity', opacity);
                if (opacity > 1) {
                    window.clearInterval(intervalFadeIn);

                    var intervalFadeOut = setInterval(function () {
                        opacity -= 0.02;
                        $box.css('opacity', opacity);
                        if (opacity < 0) {
                            window.clearInterval(intervalFadeOut);
                        }
                    }, 50)
                }
            }, 50)

        })

        $errorButton.on('click', function () {
            var opacity = 0;
            var $box = $('#message-box').html(' ').css('opacity', opacity);
            $box.html('Error message').css('background-color', 'red');

            var intervalFadeIn = setInterval(function () {
                opacity += 0.05;
                $box.css('opacity', opacity);
                if(opacity > 1)
                {
                    window.clearInterval(intervalFadeIn);
                    var intervalFadeOut = setInterval(function () {
                        opacity -= 0.02;
                        $box.css('opacity', opacity);
                        if (opacity < 0) {
                            window.clearInterval(intervalFadeOut);
                        }
                    }, 50)
                }
            }, 50)

        })

        $messageBox.appendTo($container);
        $successButton.appendTo($container);
        $errorButton.appendTo($container);

        $container.appendTo(document.body);

        return $this;
    }
}(jQuery));