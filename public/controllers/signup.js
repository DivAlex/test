angular.module('MyApp')
    .controller('SignupCtrl', ['$scope', 'Auth', function($scope, Auth) {
        $scope.signup = function() {
            Auth.signup({
                username: $scope.username,
                password: $scope.password,
                email: $scope.email,
                firstName: $scope.firstName,
                lastName: $scope.lastName
            });
        };
    }]);