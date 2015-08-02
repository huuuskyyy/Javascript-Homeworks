(function ($) {

    $.fn.listView = function (items) {
        var $outpurTarget = this;
        var $templateHtml = $outpurTarget.html();
        var templateCompiled = Handlebars.compile($templateHtml);
        $outpurTarget.empty();

        items.forEach(function (item) {
            var generatedHTML = templateCompiled(item);
            $outpurTarget.append(generatedHTML);
        });

        return $outpurTarget;
    };

}(jQuery));