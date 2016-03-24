'use strict';

app.addUser = kendo.observable({
    onShow: function () {
        addUser();
    },
    afterShow: function () {}
});

var addUser = function(){
    $( "#addUserForm" ).submit(function( e ) {
        e.preventDefault();
        
        var username = $('#username').val();
        var age = $('#age').val();
        
        datas.push({
            url : 'images/01.jpg',
            name : username,
            age : age
        });
        $('#username').val('');
        $('#age').val('');
   	});
}