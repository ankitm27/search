/**
 * Created by ayush on 14/6/16.
 */
var app = angular.module('university');


/**
 * Created by ayush on 14/6/16.
 */
app.controller('search', function($scope, $http, $rootScope){

    // Initializes Variables
    // ----------------------------------------------------------------------------
    $scope.formData = {};
    var coords = {};
    var lat = 0;
    var long = 0

    // Functions
    // ----------------------------------------------------------------------------
    // Creates a new user based on the form fields

    $scope.createUser = function() {

        // Grabs all of the text box fields
        var userData = {
            course: $scope.course
        };
    };
});
