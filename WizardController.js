angular.module('asvs', []).
    /**
     * Recursively average values in object
     * @image http://images.wikia.com/transformers/images/b/b9/Ravageboxart.jpg
     */
    filter('ravg', function() {
        "use strict";
        function collectValues(obj) {
            var values = [], objKey, value;
            for (objKey in obj) {
                // Guard against inherited properties
                if (!obj.hasOwnProperty(objKey)) {
                    continue;
                }

                value = obj[objKey];
                if (typeof value === 'object') {
                    values = values.concat(collectValues(value));
                }
                else {
                    values[values.length] = +value;
                }
            }
            return values;
        }

        return function ravg(obj) {
            var avg, values = collectValues(obj);
            avg = values.reduce(function(prev, cur) { return prev + cur; }, 0) / values.length;
            return Math.floor(avg * 10) / 10;
        };
    });

function WizardController($scope, ravgFilter) {
    "use strict";
    function getNewReport() {
        var report = {};
        report.chapters = ASVS.chapters;
        report.rules = ASVS.rules;
        report.rules = report.rules.map(function(rule) {
            rule.risk = { factors: ASVS.risk.factors };
            rule.showEdit = 'hide';
            rule.showPass = 'hide';
            rule.showFail = 'hide';
            rule.enableReset = 'disabled';
            return rule;
        });
        report.rules[0].showEdit = '';
        return report;
    }

    var report = (typeof localStorage !== 'undefined') && JSON.parse(localStorage.getItem('report'));
    if (!report) {
        report = getNewReport();
    }
    $scope.report = report;

    $scope.enableReset = 'disabled';
    $scope.showPass = 'hide';
    $scope.showFail = 'hide';

    $scope.getStatusClass = function(rule) {
        return rule.status === 'passed' ? 'pass' : 'fail';
    };
    $scope.hideIfPassed = function(rule) {
        return rule.status !== 'passed' ? '' : 'hide';
    };
    $scope.hideIfFailed = function(rule) {
        return rule.status !== 'passed' ? 'hide' : '';
    };

    $scope.pass = function(rule) {
        rule.status = 'passed';

        rule.enableReset = '';
        rule.showPass = '';
        rule.showFail = 'hide';
    };
    $scope.fail = function(rule) {
        rule.status = 'failed';

        rule.enableReset = '';
        rule.showPass = 'hide';
        rule.showFail = '';
    };
    $scope.reset = function(rule) {
        $("[name=status]").removeAttr("checked");
        delete rule.status;

        rule.enableReset = 'disabled';
        rule.showPass = 'hide';
        rule.showFail = 'hide';
    };
    $scope.getCurrentRule = function() {
        return report.rules.filter(function(rule) { return rule.showEdit !== 'hide'; }).shift();
    };
    $scope.edittedIsLast = function() {
        var rule = $scope.getCurrentRule();
        var lastRule = report.rules[report.rules.length - 1];
        return rule.chapter === lastRule.chapter && rule.nr === lastRule.nr ? '' : 'hide';
    };
    $scope.edittedIsNotLast = function() {
        var rule = $scope.getCurrentRule();
        return $scope.edittedIsLast(rule) === 'hide' ? '' : 'hide';
    };
    $scope.edittedIsNotFirst = function() {
        var rule = $scope.getCurrentRule();
        var firstRule = report.rules[0];
        return rule.chapter === firstRule.chapter && rule.nr === firstRule.nr ? 'hide' : '';
    };
    $scope.edittedPercentage = function() {
        var percentage = 0;
        report.rules.forEach(function(rule, index) {
            if (rule.showEdit !== 'hide') {
                percentage = (index) / report.rules.length * 100;
            }
        });
        return percentage;
    };
    $scope.belongsToChapterIndex = function($index) {
        return function(rule) {
            return rule.chapter === $index;
        };
    };

    $scope.next = function() {
        var setEdit = false;
        for (var i = 0; i < report.rules.length; i++) {
            if (setEdit === true) {
                report.rules[i - 1].showEdit = 'hide';
                report.rules[i].showEdit = '';
                break;
            }
            if (report.rules[i].showEdit !== 'hide') {
                setEdit = true;
            }
        }
    };
    $scope.prev = function() {
        var setEdit = false;
        for (var i = report.rules.length - 1; i >= 0; i--) {
            if (setEdit === true) {
                report.rules[i + 1].showEdit = 'hide';
                report.rules[i].showEdit = '';
                break;
            }
            if (report.rules[i].showEdit !== 'hide') {
                setEdit = true;
            }
        }
    };
    $scope.done = function() {
        $('#wizard').dialog('close');
    };

    $scope.getRiskRatingDescription = function(riskFactors) {
        var riskRating = ravgFilter(riskFactors);
        var riskRange;
        for (var i = 0; i < ASVS.risk.ranges.length; i++) {
            riskRange = ASVS.risk.ranges[i];
            if (riskRating >= riskRange.start && riskRating < riskRange.end) {
                return riskRange.title;
            }
        }
        return 'Unknown';
    };

    $scope.getChapterTitle = function(chapter) {
        return ASVS.chapters[chapter-1];
    };

    function saveLoop() {
        localStorage.setItem('report', JSON.stringify($scope.report));
        return true;
    }
    if (typeof localStorage !== 'undefined') {
        setInterval(saveLoop, 10000);
    }
}

WizardController.$inject = ['$scope','ravgFilter'];