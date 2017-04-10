var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$sce) {
    $scope.users =Array();
   	$scope.issues = [];
   	$scope.template="";
   	$scope.hide=0;
    $scope.addUser = function(user)
    {
    	$scope.users.push(user);
    	$scope.issues[user] = Array();
    	console.log($scope.issues);
    }
   $scope.addIssue= function(issuetmp)
   {

   		$scope.issues[issuetmp.assign].push(issuetmp);
   		//console.log($scope.issues[issuetmp.assign]);
   		//console.log(issuetmp);
   		//console.log($scope.issues);
   		
    	$scope.form1 = {};

   }
   $scope.showIssue=function(usertmp2){
   		$scope.template = '<div class="heading"><center>Issues-'+usertmp2+'</center></div>';
   		for(i=0;i<$scope.issues[usertmp2].length;i++){
   			$scope.template += '<div class="row"><div class="col-md-8">'+$scope.issues[usertmp2][i].summ+'</div><div class="col-md-2">'+$scope.issues[usertmp2][i].prior+'</div><div class="col-md-2">'+$scope.issues[usertmp2][i].type+'</div></div>'
   		}
   		$scope.template = $sce.trustAsHtml($scope.template);
   		$scope.hide=1;
   }
   $scope.showIssuetemplate=function(){
   	$scope.hide=0;
   	$scope.template=$sce.trustAsHtml('');
   }

});
