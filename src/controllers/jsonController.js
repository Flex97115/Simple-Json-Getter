/**
 * Created by Gery on 28/07/15.
 */
'use strict';

app
    .controller('jsonIndex' , function($scope , $http){

        //URL
        var url = '';

        $http.get(url).success( function (response) {
            //Get Json and set it in scope
            $scope.elements = response.element;
        }).error( function(){
            //On error
            console.log('ERROR');
        });
    })