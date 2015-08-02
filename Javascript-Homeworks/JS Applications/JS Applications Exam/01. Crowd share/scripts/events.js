(function () {
    attachEvents();

})();


function attachEvents() {

    $('body').on('click', '#btn-reg-user', controller.registerUser);

    $('body').on('click', '#btn-filter', controller.filterPosts);

    $('body').on('click', '#btn-logout-user', controller.logoutUser);

    $('body').on('click', '#btn-msg', controller.sendMessage);
}