/**
 * Created by Gery on 28/07/15.
 */
'use strict';

app.config(
    function ($routeProvider){
        $routeProvider
            .when('/',{
                controller: 'jsonIndex',
                templateUrl: 'src/views/json/index.html'
            });
    }
);