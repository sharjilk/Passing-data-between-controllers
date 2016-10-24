angular.module('NgApp', [])

.controller('AirborneCtrl', function($scope, $rootScope){
	$scope.Message = "Air unit is available for strike.";
	$scope.deployBtn = true;
	
    $scope.AskForSupport = function (evt) {
        $scope.$broadcast("SendDown", "Do you need air support?");
    }
	
	$scope.DeploySupport = function (evt) {
        $rootScope.$broadcast("SendDownAirSupport", "Put down your weapons or we will deploy air support.");
    }

    $scope.$on("SendDown", function (evt, data) {
        $scope.Message = "Air unit is broadcasting a message for all units : " + data;
    });

    $scope.$on("SendUp", function (evt, data) {
        $scope.Message = "Air unit is getting reply using SendUp handler : " + data;
		$scope.deployBtn = false;
    });
})

.controller('ArmoredCtrl', function($scope){
	$scope.Message = "Armored Forces are approaching towards enemy lines.";
	
	$scope.$on("SendDown", function (evt, data) {
		$scope.Message = "Armored forces are listening message using SendDown handler : " + data;
	});

	$scope.$on("SendUp", function (evt, data) {
		$scope.Message = "Armored forces are replying using SendUp handler : " + data;
	});
})
.controller('SealteamCtrl', function($scope){
	$scope.Message = "Seal team is taking the lead.";
	$scope.emitBtn = true;
	
    $scope.$on("SendDown", function (evt, data) {
        $scope.Message = "Seal team is listening message using SendDown handler : " + data;
		$scope.emitBtn = false;
    });

    $scope.ReplyForSupport = function (evt) {
        $scope.$emit("SendUp", "Yes! we need Air support.");
    }

    $scope.$on("SendUp", function (evt, data) {
        $scope.Message = "Seal team is replying using SendUp handler : " + data;
    });

})
.controller('DeltateamCtrl', function($scope){
	$scope.Message = "Delta is team ready for backup.";
	
    $scope.$on("SendDown", function (evt, data) {
        $scope.Message = "Delta team is listening message using SendDown handler : " + data;
    });

    $scope.$on("SendUp", function (evt, data) {
        $scope.Message = "Inside SendUp handler of DeltateamCtrl : " + data;
    });
})

.controller('ArtilleryCtrl', function($scope){
	$scope.Message = "Artillery is supplying ammos to the armored forces.";
	
    $scope.$on("SendDown", function (evt, data) {
        $scope.Message = "Artillery team is listening message using SendDown handler : " + data;
    });

    $scope.$on("SendUp", function (evt, data) {
        $scope.Message = "Inside SendUp handler of InfantryCtrl : " + data;
    });
})

.controller('HostileCtrl', function($scope){
	$scope.Message = "Enemies are getting closer to Seal team.";
	
    $scope.$on("SendDownAirSupport", function (evt, data) {
        $scope.Message = "Hostiles are listening the message from Air unit : " + data;
    });

    //$scope.$on("SendUp", function (evt, data) {
    //    $scope.Message = "Inside SendUp handler of InfantryCtrl : " + data;
    //});
})