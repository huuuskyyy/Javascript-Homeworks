define(['jquery', 'handlebars'], function () {
    
    var ComboBox = function(people) {
    var postTemplateHTML = document.getElementById('person-template').innerHTML,

	postTemplate = Handlebars.compile(postTemplateHTML);

	document.getElementById('comboBox').innerHTML = postTemplate({people:people});
    
    document.querySelector('.person-item:first-of-type').className = 'selected';
    console.log('here');
    function clickComboBox(e) {
       
            if(e.currentTarget.className === 'selected') {
                e.currentTarget.className = 'person-item';
                $('.person-item').css('display','block');
            } else {
                e.currentTarget.className = 'selected'
                $('.person-item').css('display','none');
            }
        e.stopPropagation(); 
    }
    
    $('#comboBox').on('click', 'div',clickComboBox);
    }
    
    return { ComboBox : ComboBox }
    
});