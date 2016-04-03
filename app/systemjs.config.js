/**
 * Created by beto_ on 27/03/2016.
 */
var dependencies = {
    "angular": "bower_components/angular/angular.js",
    "route": "bower_components/angular-route/angular-route.js",
    "animate": "bower_components/angular-animate/angular-animate.min.js",
    "aria": "bower_components/angular-aria/angular-aria.min.js",
    "messages": "bower_components/angular-messages/angular-messages.min.js",
    "material": "bower_components/angular-material/angular-material.min.js",
    "fire": "bower_components/firebase/firebase.js",
    "angularfire": "bower_components/angularfire/dist/angularfire.min.js",
    "main" : "../built/Main"
}
System.config({
    defaultJSExtensions: true,
    baseURL: "./",
    map: dependencies
});
/*
var promisses = [];
for(var dep in dependencies){
    promisses.push(System.import(dep));
};

Promise.all(promisses)
    .then(function() {
    console.log("dependencies are loaded");
});

*/
/*
Promise.all([
    System.import('angular'),
        System.import('route'),
        System.import('animate'),
        System.import('aria'),
        System.import('messages'),
        System.import('material'),
        System.import('fire'),
        System.import('angularfire'),
        System.import('main')
]).then(function() {
    console.log("dependencies are loaded");
});*/

System.import('angular')
    .then(function () {
        System.import('route')
            .then(function () {
                System.import('animate')
                    .then(function () {
                        System.import('aria')
                            .then(function () {
                                System.import('messages')
                                    .then(function () {
                                        System.import('material')
                                            .then(function () {
                                                System.import('fire')
                                                    .then(function () {
                                                    System.import('angularfire')
                                                        .then(function () {
                                                            System.import('main');
                                                    })
                                                });
                                            });
                                    });
                            });
                    });
            });
    });
