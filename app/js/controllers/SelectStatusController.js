'use strict';

adsApp.controller('SelectStatusController',
    function SelectStatusController($scope){
        $scope.statuses =
            [{name: "Published", value: "Published"},
            {name: "Waiting Approval", value: "WaitingApproval"},
            {name: "Inactive", value: "Inative"},
            {name: "Rejected", value: "Rejected"}];
    }
)