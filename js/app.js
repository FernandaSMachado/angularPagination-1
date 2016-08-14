(function(){
    'use strict';

    var module = angular.module('app', ['Pagination']);

    module.controller('ServerPaginationCtrl', function($scope, $http, SeverPaginate) {
        var success = function(response) {
            SeverPaginate.configure({
                data: response.data.data,
                next: response.data.paging.next,
                prev: response.data.paging.previous,
                total: response.data.summary.total_count,
                goToPage: goToPage
            });

            $scope.paginate = SeverPaginate.getData();
        }

        var goToPage = function(url) {
            $http.get(url).then(success);
        }

        goToPage('resource/data.json');
    });
})()