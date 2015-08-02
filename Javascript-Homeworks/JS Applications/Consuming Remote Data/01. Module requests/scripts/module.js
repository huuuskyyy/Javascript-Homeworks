var request = (function(){
    
    function getJSON(url, headers) {
        
        $.ajax({
            type: "GET",
            url: url,
            headers : headers || {},
            success: function (data) {
                console.log("Success get");
                console.log(data);
            },
            error: function(error){
                console.log("Error");
                console.log(error);
            }
        })
    }
    
    function postJSON(url, data, headers) {
        
        $.ajax({
            type: "POST",
            url: url,
            data : data,
            headers : headers || {},
            success: function(data){
                console.log("Success post");
                console.log(data);
            },
            error: function(error){
                console.log("Error");
                console.log(error);
            }
        })
    }
    
    return {
        getJSON : getJSON,
        postJSON : postJSON
    };
    
})();