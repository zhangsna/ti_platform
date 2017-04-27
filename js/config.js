/**
 * Created by Administrator on 2017/4/26.
 */
angular.module('app')
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state({
                name:'homepage',
                url:'/homepage',
                title:'��ҳ',
                templateUrl:'./pages/homepage.html'
            })
            .state({
                name:'community',
                url:'/community',
                title:'������������',
                templateUrl:'./pages/community.html'
            })
            .state({
                name:'organization',
                url:'/organization',
                title:'����֯�����',
                templateUrl:'./pages/organization.html'
            })
            .state({
                name:'residents',
                url:'/residents',
                title:'�������λ����',
                templateUrl:'./pages/residents.html'
            })
    });

angular.module('app').run(function($rootScope){
    $rootScope.$on('$stateChangeStart', function(event,next,nextParam,prev,prevParam){
        $rootScope.title = next.title;
    })
})