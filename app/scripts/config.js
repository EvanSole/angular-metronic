define(['app'],function(app){
    "use strict";
     
     //localUrl 
     window.BASEPATH = "http://127.0.0.1:9000/";

     app.constant('url', {
        
        	loginUrl : window.BASEPATH + '/api/login',
            userUrl : window.BASEPATH + '/api/user',
            roleUrl : window.BASEPATH + '/api/role',
       
     });

});