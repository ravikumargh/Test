angular.module('yeomanApp')
    .service('LoginService', function ($q) {
    return {
        loginUser: function (name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            var userData = { username: 'ravikumargh13@gmail.com', password: 'password' };

            //if (name == userData.username && pw == userData.password) {
            if (name  && pw ) {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function (fn) {
                sessionStorage.setItem("lastname", "ravikumargh13@gmail.com");
                promise.then(fn);
                return promise;
            }
            promise.error = function (fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
});