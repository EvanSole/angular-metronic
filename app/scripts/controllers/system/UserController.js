
define(['scripts/controllers/controllers','scripts/services/services'], function(controller) {
    "use strict";
    controller.controller('UserController',['$scope','$rootScope','$state', 'sync', 'url','commonDataSource', 
        function ($scope, $rootScope,$state, $sync, $url, commonDataSource ) {
      
        console.log(" UserController ... "); 

         var associateDataSource = new kendo.data.DataSource({
                    data: []
                });

         $sync($url.demoUrl, "GET", {wait: false} )
                .then(function (data) {
                    //刷新页面
                    //$state.reload();
                }, function () {
                    //$state.reload();
                });



	    $scope.mainGridOptions = {
                dataSource: {
                    type: "odata",
                    transport: {
                        read: "//demos.telerik.com/kendo-ui/service/Northwind.svc/Employees"
                    },
                    pageSize: 5,
                    serverPaging: true,
                    serverSorting: true
                },
                toolbar: ["create"],
                editable: "popup",
                sortable: true,
                pageable: true,
                dataBound: function() {
                    this.expandRow(this.tbody.find("tr.k-master-row").first());
                },
                columns: [{
                    field: "FirstName",
                    title: "First Name",
                    width: "120px"
                    },{
                    field: "LastName",
                    title: "Last Name",
                    width: "120px"
                    },{
                    field: "Country",
                    width: "120px"
                    },{
                    field: "City",
                    width: "120px"
                    },{
                    field: "Title"
                }]
        };

    }])
})