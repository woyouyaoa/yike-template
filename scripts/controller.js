//该模块用于创建项目所需的所有控制器
angular.module('Controllers',[])
.controller('NavCont',['$scope',function($scope){
	//在模型层模拟数据
	$scope.navs=[
				{"link":"#/today","icon":"icon-home","text":"今日一刻"},
				{"link":"#/older","icon":"icon-file-empty","text":"往期内容"},
				{"link":"#/author","icon":"icon-pencil","text":"热门作者"},
				{"link":"#/category","icon":"icon-menu","text":"栏目浏览"},
				{"link":"#/favourite","icon":"icon-heart","text":"我的喜欢"},
				{"link":"#/settings","icon":"icon-cog","text":"设置"}
				];
}])
.controller('todayCont',["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	$rootScope.title="今日一刻";
	$rootScope.index= 0;
	$http({
		url:'./api/today.php'
	}).then(function(data){
		$rootScope.loaded=true;
		$scope.datas=data.data;
	})
}])
.controller('olderCont',["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	$rootScope.title="往期内容";
	$rootScope.index= 1;
	$rootScope.loaded=false;
	$http({
		url:'./api/older.php'
	}).then(function(data){
		$rootScope.loaded=true;
		$scope.datas=data.data;
	})
}])
.controller('authorCont',["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	$rootScope.title="热门作者";
	$rootScope.index= 2;
	$rootScope.loaded=false;
	$http({
		url:'./api/author.php'
	}).then(function(data){
		$rootScope.loaded=true;
		$scope.datas=data.data;
	})
}])
.controller('categoryCont',["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	$rootScope.title="栏目浏览";
	$rootScope.index= 3;
	$rootScope.loaded=false;
	$http({
		url:'./api/category.php'
	}).then(function(data){
		$rootScope.loaded=true;
		$scope.datas=data.data;
	})
}])
.controller('favouriteCont',["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	$rootScope.loaded=false;
	$rootScope.title="我的喜欢";
	$rootScope.index= 4;
	$http({
		url:'./api/favourite.php'
	}).then(function(data){
		$rootScope.loaded=true;
		$scope.datas=data.data;
	})
}])
.controller('settingsCont',["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	$rootScope.loaded=true;
	$rootScope.title="设置";
	$rootScope.index= 5;
	$http({
		url:'./api/settings.php'
	}).then(function(data){
		$scope.datas=data.data;
	})
}])
.controller('categoryIdCont',["$scope","$http","$rootScope",function($scope,$http,$rootScope){
	$rootScope.title="文章列表";
	$rootScope.loaded=false;
	$http({
		url:'./api/list.php'
	}).then(function(data){
		console.log(data.data);
		$rootScope.loaded=true;
		$scope.datas=data.data;
	})
}])

