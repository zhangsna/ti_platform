/**
 * Created by Administrator on 2017/4/26.
 */
angular.module('app')
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state({
                name:'homepage',
                url:'/homepage',
                title:'首页',
                templateUrl:'./pages/homepage.html'
            })
            .state({
                name:'community',
                url:'/community',
                title:'社区团体活动服务',
                templateUrl:'./pages/community.html'
            })
            .state({
                name:'organization',
                url:'/organization',
                title:'党组织活动服务',
                templateUrl:'./pages/organization.html'
            })
            .state({
                name:'residents',
                url:'/residents',
                title:'居民自治活动服务',
                templateUrl:'./pages/residents.html'
            })
    });

angular.module('app').run(function($rootScope){
    $rootScope.$on('$stateChangeStart', function(event,next,nextParam,prev,prevParam){
        $rootScope.title = next.title;
    })
})