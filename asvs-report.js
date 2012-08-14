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