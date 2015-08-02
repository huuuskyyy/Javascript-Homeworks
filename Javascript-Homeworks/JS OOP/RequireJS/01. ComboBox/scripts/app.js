(function () {
    require.config({
        paths: {
            'jquery': 'libs/jquery-2.1.1',
            'handlebars': 'libs/handlebars-v1.3.0'
        }
    });

    require(['index'], function (index) {
        index.run();
    })
}());