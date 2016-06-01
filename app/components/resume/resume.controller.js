(function () {

    'use strict';

    angular
        .module('app')
        .controller('ResumeController', ['$scope', '$sce', function ($scope, $sce) {


            $scope.getType = function (o) {
                var type = "";
                switch(true) {
                    case _.isBoolean(o):
                        type =  'boolean';
                        break;
                    case _.isNull(o):
                        type =  'null';
                        break;
                    case _.isObject(o) && !_.isArray(o):
                        type =  'object';
                        break;
                    case _.isArray(o):
                        type =  'array';
                        break;
                    case angular.isNumber(o):
                        type =  'number';
                        break;
                    case angular.isString(o):
                        type =  'string';
                        break;
                }
                return type;
            };

            $scope.obj = {
                string: "string",
                integer: 12,
                array: [
                    "pouet", "pouet", "camion"
                ],
                object: {
                    ho: "la belle bleue"
                },
                boolean: true,
                null: null
            };


        }])
    ;

})();