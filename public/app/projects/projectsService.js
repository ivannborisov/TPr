(function(){

    angular.module('app')
        .factory('projects', function($q, ProjectResource){
            return {
                checkForNewProjects: function(currNum){


                    var deffered = $q.defer();

                    ProjectResource.query().$promise.then(function(results){
                        if(currNum === results.length){
                            console.log('There is no new projects');
                            deffered.resolve(false);
                        }
                        else {
                            console.log('Adding new projects');
                            resData = {
                                projects:results.slice(0,8),
                                projectsLength: results.length
                            }
                            deffered.resolve(resData);
                        }
                    });

                    return deffered.promise;


                }

            }
        });

}());