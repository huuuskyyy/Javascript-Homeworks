var viewer = (function () {

    function renderPosts(posts) {
        var template = $('#template-post').html();
        Mustache.parse(template);

        var rendered = Mustache.render(template, posts)
        $('#posts').empty();
        document.getElementById('posts').innerHTML = (rendered);
    }

    return {

        renderPosts: renderPosts
    }
})();