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
    var stepSize = 25; //how many colors do you want?
    while(green < 255)
    {
        green += stepSize;
        if (green > 255) { green = 255; }
        document.body.innerHTML+= '<h1 style="background-color: rgb(' + red + ', ' + green + ', 0)">test</h1>';
    }
    while(red > 0)
    {
        red -= stepSize;
        if(red < 0) { red = 0; }
        document.body.innerHTML+= '<h1 style="background-color: rgb(' + red + ', ' + green + ', 0)">test</h1>';
    }
};