if (typeof ASVS === 'undefined') {
    var ASVS = {};
}
/**
 * @todo Fixme
 * @url http://stackoverflow.com/questions/4161369/html-color-codes-red-to-yellow-to-green
 * @param {Number} riskNr
 */
ASVS.getColorForRisk = function(riskRating) {
    document.body.innerHTML = '';
    var red = 255; //i.e. FF
    var green = 0;
    var stepSize = Math.floor((255 + 255) / 100); //how many colors do you want?
    var count = 0;
    var rating;
    while(green < 255)
    {
        green += stepSize;
        if (green > 255) { green = 255; }
        document.body.innerHTML+= '<h1 style="background-color: rgb(' + red + ', ' + green + ', 0)">test</h1>';
        count++;
        rating = (100 - count) / 10;
        console.log('[data-riskrating="' + rating + '"] {'+"\n"+
            '    background-color: rgb(' + red + ', ' + green + ', 0);'+"\n"+
            '}');
    }
    while(red > 0)
    {
        red -= stepSize;
        if(red < 0) { red = 0; }
        document.body.innerHTML+= '<h1 style="background-color: rgb(' + red + ', ' + green + ', 0)">test</h1>';
        count++;
        rating = (100 - count) / 10;
        console.log('[data-riskrating="' + rating + '"] {'+"\n"+
            '    background-color: rgb(' + red + ', ' + green + ', 0);'+"\n"+
            '}');
    }
    console.log(count);
};
ASVS.parseXml = function() {
    $.get('asvs.xml', function(xmlDoc) {
        var rules = [];
        $(xmlDoc).find('item').each(function(i, itemNode) {
            var rule = {};
            var nrs = /V(\d+)\.(\d+)/.exec($(itemNode).attr('id'));
            rule.chapter = +nrs[1];
            rule.nr = +nrs[2];

            rule.levels = $(itemNode).
                find('include:contains("true")').
                map(function(include) {
                    return $(this).attr('level')}).
                map(function() {
                    switch ("" + this) {
                        case "1" : return "1A";
                        case "2" : return "1B";
                        case "3" : return "2A";
                        case "4" : return "2B";
                        case "5" : return "3";
                        case "6" : return "4";
                        default: return "" + this;
                    }
                    return "" + this;
                });

            rule.title = $(itemNode).find('description').text();
            rule.annotation = '';
            rule.passed = {
                title: '',
                description: '',
                helpJustify: '',
            };
            rule.failed = {
                title: '',
                description: ''
            };
            rules[rules.length] = rule;
            console.log(rules);

        });
        console.log(JSON.stringify(rules));
    });
};