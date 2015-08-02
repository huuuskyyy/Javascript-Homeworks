 var app = $.sammy('#application', function () {

            this.get('#/', function () {
                $('#application').load('view/initial.html');
                controller.getPosts();
            });

            this.get('#/register', function () {

                $('#application').load('view/initial.html');
                controller.getPosts();
            });

            this.get('#/login', function () {

                $('#application').load('view/logged.html');
                controller.getPosts();

            });

            this.get('#/logout', function () {

                $('#application').load('view/initial.html');
                controller.getPosts();
            });
        });

        app.run('#/');

