var app = angular.module('guerraTI', ['angularUtils.directives.dirPagination']);
app.controller('listarDados', function($scope, $http){
    $scope.dados = []; //declara uma array vazia com o nome 'dados'
    $http.get("dados.json").success(function(response){
        $scope.dados = response;
    });

    $scope.ordenar = function(keyname){
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    };
});