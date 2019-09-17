var app = angular.module('ThatzWeather', ['ngAnimate', 'ngRoute', 'ui.bootstrap']);

app.config(function ($routeProvider, $locationProvider, $qProvider) 
{
    $routeProvider.when('/consult',
        {
            template: '<consult></consult>'
        });

    $routeProvider.when('/result',
        {
            template: '<result></result>'
        });

    $routeProvider.when('/background',
    {
        template: '<background></background>'
    });
        
    $locationProvider.html5Mode(true);
    $qProvider.errorOnUnhandledRejections(false);
});


