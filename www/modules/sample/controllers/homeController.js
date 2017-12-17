angular.module('app').controller('homeController',['$rootScope','$scope','utils',function($rootScope,$scope,utils){
	$scope.vo = {
        slides:[{
            lbpicNum:1,
            lbpicUrl:'images/home/Greenhouse1.jpg'
        },{
            lbpicNum:2,
            lbpicUrl:'images/home/Greenhouse2.jpg'
        },{
            lbpicNum:3,
            lbpicUrl:'images/home/Greenhouse3.jpg'
        },{
            lbpicNum:4,
            lbpicUrl:'images/home/Greenhouse4.jpg'
        },{
            lbpicNum:5,
            lbpicUrl:'images/home/Greenhouse5.jpg'
        }]
    };

    $scope.vc = {
        slideBox:function(){
            utils.http(Service.slideBox).success(function(response){
                $scope.vo.slides = response.data.packageList.packages.response.lbpiclist.lbpic;
            });
        }
    }

    $scope.ready = function(){
        // $scope.vc.slideBox();
    }();
}]);