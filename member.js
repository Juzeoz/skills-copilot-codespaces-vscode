function skillMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skill-member/skill-member.html',
        controller: 'skillMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: 'm'
        }
    };
} 