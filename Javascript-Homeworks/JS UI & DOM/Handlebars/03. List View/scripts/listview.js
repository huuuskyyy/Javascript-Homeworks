(function ($) {

    $.fn.listView = function (items) {
        var $outpurTarget = this;
        var templateId = $outpurTarget.attr('data-template');
        var templateSource = $('#' + templateId).html();
        var templateCompiled = Handlebars.compile(templateSource);

        items.forEach(function (item) {
            var generatedHTML = templateCompiled(item);
            $outpurTarget.append(generatedHTML);
        });

        return $outpurTarget;
    };

}(jQuery));