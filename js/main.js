var app = angular.module('myApp', ['ui.router']);

app.controller('myCtrl', function ($scope) {
    $scope.inputEmpty = false;
    $scope.search = '';
    $scope.removeInputValue = function () {
        $scope.search = '';
    }
    $scope.$watch('search', function () {
        if ($scope.search == '') {
            $scope.inputEmpty = false;
        } else {
            $scope.inputEmpty = true;
        }
    })
});

app.config(function($stateProvider){
    var comment = {
        name:'comment',
        url:'/comment',
        template:'comment'
    };
    var contacts = {
        name:'contacts',
        url:'/contacts',
        template:'contacts'
    };
    var more = {
        name:'more',
        url:'/more',
        template:'more'
    };

    $stateProvider.state(comment);
    $stateProvider.state(contacts);
    $stateProvider.state(more);
});

app.run(['$rootScope', '$location', function ($rootScope, $location) {
    /* 监听路由的状态变化 */
    $rootScope.$on('$stateChangeSuccess', function (evt, current, previous) {
        $rootScope.url = $location.path();
    });
}])