var requester = (function () {

    function makeRequest(url, type, data, success, error, header) {

        $.ajax({
            url: url,
            type: type,
            data: data,
            headers: header,
            timeout : 5000,
            success: success,
            error: error
        });
    }

    return {
        makeRequest: makeRequest
    }
})();