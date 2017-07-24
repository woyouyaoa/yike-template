	var yike = angular.module('yike',['Controllers',"ngRoute"]);
	yike.run(['$rootScope',function($rootScope){
		$rootScope.collapsed = false;
		$rootScope.toggle=function(){
			$rootScope.collapsed = !$rootScope.collapsed;
			var dds = document.querySelectorAll(".navs dd"); 
            var bd=document.querySelector(".body");
			if($rootScope.collapsed){
                bd.style.background="#ccc";
                bd.style.opacity="0.5";
				for(var i=0;i<dds.length;i++){
					dds[i].style.transform="translate(0)";
					dds[i].style.transitionDuration= (i+1)*0.15+'s';
				}
			}else{
                bd.style.background="white";
                bd.style.opacity="1";
				for(var i=0;i<dds.length;i++){
					dds[i].style.transform="translate(-100%)";
					dds[i].style.transitionDuration=(dds.length-i+1)*0.15+'s';
				}
			}
		}
	}]);
	yike.config(function($locationProvider){
		$locationProvider.hashPrefix("");
	});
	yike.config(["$routeProvider",function($routeProvider){
		$routeProvider.when("/today",{
            templateUrl:"./view/today.html",
            controller:"todayCont"
        })
        .when("/older",{
            templateUrl:"./view/today.html",
            controller:"olderCont"
        })
        .when("/author",{
            templateUrl:"./view/author.html",
            controller:"authorCont"
        })
        .when("/category",{
            templateUrl:"./view/category.html",
            controller:"categoryCont"
        })
        .when("/favourite",{
            templateUrl:"./view/favourite.html",
            controller:"favouriteCont"
        })
        .when("/settings",{
            templateUrl:"./view/settings.html",
            controller:"settingsCont"
        })
        .when("/:id",{
            templateUrl:"./view/list.html",
            controller:"categoryIdCont"
        })
        .otherwise({
        	redirectTo:"/today"
        })
	}]);
