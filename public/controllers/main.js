angular.module('MyApp')
    .controller('MainCtrl', ['$scope', 'User', function($scope, User) {

        $scope.headingTitle = 'Usel list';

        $scope.users = User.query();

        $scope.delete = function() {

            console.log('delete');

            //User.delete($scope).success(function() {
            //    console.log('eee');
            //}).err(function(){
            //    console.log('zz');
            //});
        };

    }]);