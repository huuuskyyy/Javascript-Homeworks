var controller = (function () {

    var mainUrl = 'http://jsapps.bgcoder.com/';

    function registerUser() {

        var username = $('#inpt-reg-username').val();
        var nickname = $('#inpt-reg-nickname').val();
        var password = $('#inpt-reg-pass').val();
        var toBeEncripted = (username + password);
        var encripted = CryptoJS.SHA1(toBeEncripted).toString();
        var user = {
            username: username,
            nickname: nickname,
            authCode: encripted
        };

        requester.makeRequest(mainUrl + 'user','POST', user, function (data) {
            alert('Registration successful. Login with your account details.');
        }, function (error) {
            var errorObject = JSON.parse(error.responseText);
            alert('Error !!! '+ errorObject.message);
        });
    }

    function loginUser() {

        var username = $('#inpt-login-username').val();
        var password = $('#inpt-login-pass').val();
        var toBeEncripted = (username + password);
        var encripted = CryptoJS.SHA1(toBeEncripted).toString();
        var user = {
            username: username,
            authCode: encripted
        };

        requester.makeRequest(mainUrl + 'auth', 'POST', user, function (data) {
            sessionStorage['sessionKey'] = data.sessionKey;
            sessionStorage['username'] = data.username;

            $('#application').load('view/logged.html');

        }, function (error) {
            var errorObject = JSON.parse(error.responseText);

            alert('Error !!! ' + errorObject.message);
            $('#application').load('view/initial.html');
        }, {});
    }

    function logoutUser() {

        var sessionKey = sessionStorage['sessionKey'];
        var headers = { 'X-SessionKey': sessionKey };

        requester.makeRequest(mainUrl + 'user', 'PUT', {}, function (data) {
            
        }, function (error) {

        }, headers);
    }

    function getPosts() {

        requester.makeRequest(mainUrl + 'post', 'GET', {}, function (data) {

            var posts = { posts: data };
            viewer.renderPosts(posts);

        }, function (error) {
            var errorObject = JSON.parse(error.responseText);
            alert('Error !!! ' + errorObject.message);
            $('#application').load('view/initial.html');
        }, {});
    }

    function filterPosts() {

        var userFilter = $('#inpt-filter-user').val();
        var textFilter = $('#inpt-filter-text').val();

        var filterURL = mainUrl + 'post?';

        if (textFilter.length > 0) {
            filterURL += 'pattern=' + textFilter;

            if (userFilter.length > 0) {
                filterURL += '&';
            }
        }

        if (userFilter.length > 0) {
            filterURL += 'user=' + userFilter;
        }

        requester.makeRequest(filterURL, 'GET', {}, function (data) {

            var posts = { posts: data };
            viewer.renderPosts(posts);
        }, function (error) {
            var errorObject = JSON.parse(error.responseText);

            alert('Error !!! ' + errorObject.message);
        }, {});

        $('#inpt-filter-user').val('');
        $('#inpt-filter-text').val('');
    }

    //mamka mu i tap sarvar, vsi4ko si ba4ka6e i izvednaj po4na da vra6ta lo6i requesti tap skapan sarvar!!!!!
    function sendMessage() {

        var title = $('#inpt-msg-title').val();
        var text = $('#inpt-msg-text').val();
        var key = sessionStorage['sessionKey'];
        console.log(sessionStorage);
        var message = {
            'title': title,
            'body': text
        };

        var header = {'X-SessionKey': key};
      
        requester.makeRequest(mainUrl +'post', 'POST', message, function (data) {
            console.log(data);
            alert('Message sent');
        }, function (error) {
            //var errorObject = error.responseText;
            alert('Error !!! ' + error.responseText);
        }, header);
    }

    return {
        registerUser: registerUser,
        loginUser: loginUser,
        logoutUser: logoutUser,
        getPosts: getPosts,
        filterPosts: filterPosts,
        sendMessage: sendMessage
    }

})();

