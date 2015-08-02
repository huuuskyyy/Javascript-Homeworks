(function ($) {
    $.fn.dropdown = function () {

        var $this = $(this);
        $this.hide();

        var $div = $('<div />').addClass('dropdown-list-container');
        var $ul = $('<ul />').addClass('dropdown-list-options').css('list-style-type', 'none');
        var $options = $(this).find('option');

        for (var i = 0; i < $options.length; i++) {
            var $currentOption = $options[i];

            var $li = $('<li />')
                .addClass('dropdown-list-option')
                .html($currentOption.innerHTML)
                .data('data-value', $currentOption.value)
                .css({
                    border: '1px solid black',
                    width: '100px',
                    textAlign: 'center',
                    color: 'black'
                });

            $li.on('click', function () {
                var $this = $(this);
                var $dataValue = $this.data('data-value');
                var $selector = "option[value=\'" + $dataValue + "\']";

                if ($this.css('color') == 'rgb(0, 0, 0)') {
                    $('#dropdown').find($selector).attr('selected', 'selected');
                    $this.css('color', 'rgb(245, 0, 0)');
                } else {
                    $this.css('color', 'rgb(0, 0, 0)');
                    $('#dropdown').find($selector).removeAttr('selected', '');
                }

            });

            $li.appendTo($ul);

        }

        $ul.appendTo($div);
        $this.after($div);

        return $this;
    }
}(jQuery));