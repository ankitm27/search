//file of personCtrl
var app = angular.module('myApp', []);

app.controller('personCtrl',function($scope,$http,$window){
        //$scope.name is class  
        $scope.name = function(fullName){


        //http request is send with object fullname to find by university
        $http.post('/course',fullName).success(function(response){
        $scope.university = "search - " +fullName.firstName;
        if(response.error){
        //$scope.x is initialized by response.error at time of error
        $scope.x = response.error;
        }else{
        //$scope.x is initialized by response at time of response and converted into json
        console.log(fullName);
        $scope.coursename = null;
        fullName.firstName=null;
        $scope.y = null;
        $scope.z = JSON.stringify(response);
         if($scope.z.length > 2){
         $scope.x = $scope.z
}           
         else {
             $scope.x = "please use specific university name"; 
}         
}
        }).error(function(error){     //at time of unsuccessful request
          console.log(error);
        });
      }

        //$scope.name1 class  
        $scope.name1 = function(course){
        //http request is send with object course to find by course
          $http.post('/university',course).success(function(response){
          $scope.coursename = "search- " +course.courseName;
           if(response.error){
            $scope.y = response.error;
          }else{
           $scope.university = null;
           $scope.x = null;
           course.courseName = null; 
           $scope.k = JSON.stringify(response);
           if($scope.k.length <= 2){
              $scope.y = "please use specific course name";
}          
else{
      $scope.y = $scope.k
}


}
        }).error(function(error){
          console.log(error);
        });
      }
});

