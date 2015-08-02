function getMessages() {

   var receivedMessages = {};

   var receivedResponse =  $.ajax({
        url: "http://crowd-chat.herokuapp.com/posts",
        type: "GET",
        contentType: "application/json"

   });
   
   receivedResponse.then(function (data) {
       
       receivedMessages = { messages: data };
       displayMessages('#template-message', '#messages-container', receivedMessages);
   })
   receivedResponse.fail(function (error) {
       console.log('Error ');
       console.log(error);
   });

}

function displayMessages(templateLocation, parsedTemplateLocation, objects) {

    var template = $(templateLocation).html();
    Mustache.parse(template);
    
    var rendered = Mustache.render(template, objects)
    console.log(rendered);
    $(parsedTemplateLocation).empty();
    $(parsedTemplateLocation).html(rendered);
    
}

function sendMessage() {
    var user = $('#input-user-name').val();
    var userMessage = $('#input-user-text').val();
    $('#input-user-name').val('');
    $('#input-user-text').val('')
    var data = {
        user: user,
        text: userMessage
    };

    postRequest(data);
}

function postRequest(data) {
    var post = $.ajax({
        url: "http://crowd-chat.herokuapp.com/posts",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(data)
    });
}

(function () {
    getMessages();
    setInterval(function () {
        var defer = new jQuery.Deferred();
        defer.resolve(getMessages());
    }, 5000);
}());