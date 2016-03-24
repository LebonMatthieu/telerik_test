'use strict';

app.home = kendo.observable({
    onShow: function () {
        showList();
    },
    afterShow: function () {}
});

var datas = [
    {
        url: "images/01.jpg",
        name: "Heisenberg",
        age: 30
    },
    {
        url: "images/02.jpg",
        name: "Obama",
        age: 30
    },
    {
        url: "images/03.jpg",
        name: "Anonymous",
        age: "N/A"
    }
      ];


var dataSource = new kendo.data.DataSource({
    transport: {
        read: function (o) {
            o.success(datas);
        }
    }
});

$.ajax({
    url: "datas.json",
    dataType: "text",
    success: function (data) {

        var json = $.parseJSON(data);

        
    }
});

var showList = function () {
    $("#usersList").kendoMobileListView({
        dataSource: dataSource,
        template: "<div class='img-size'><img src='#: url #'></div><div class='user-info'><p>#: name # </p><p><span>Age: #: age #</span></p></div>"
    });
}