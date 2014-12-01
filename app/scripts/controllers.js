angular.module('basicApp')
  .controller('MainCtrl', function ($scope) {
                $scope.users = [
                  {name: 'Yoni', hobby: 'Fishing', id: 1},
                  {name: 'David', hobby: 'Hen teasing', id: 2},
                  {name: 'Shimon', hobby: 'Fire Fighting', id: 3}
                ];

                $scope.moreDetails = function(user){
                  angular.element(document.getElementById('user-details'+user.id)).toggle();
                }

                $scope.edit = function(user){
                  $rootScope.selectedUser = user;
                }
              });
