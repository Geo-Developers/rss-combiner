var express = require('express')
var app = express()

app.use('/static', express.static('public'))

app.get('/', function (req, res) {

  fs = require('fs')
  fs.readFile('example/xml/tech-example.xml', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(data);
    res.send(data);
  });
  updateFeed();




})

var updateFeed = function(){
  var RSSCombiner = require('./lib');
  var fs = require('fs');

  var techFeedConfig = {
      size: 20,
    feeds: [
        'http://feeds.feedburner.com/esriDevelopers',
        'http://feeds.feedburner.com/ArcgisDevelopers',
        'http://www.avuxi.com/feed',
        'http://feeds.feedburner.com/mapbox/SzPO',
        'http://feeds.feedburner.com/CartoBlog',
        'http://feeds.feedburner.com/GeoblinkGeospatialBusinessIntelligence',
        'http://www.geografiainfinita.com/feed/',
        'http://gersonbeltran.com/feed/',
        'http://www.contunegocio.es/autor/gerson.beltran/feed/',
        'http://feeds.feedburner.com/GoogleGeoDevelopersBlog',
        'http://alpoma.net/carto/?feed=rss2',
        'http://leafletjs.com/atom.xml',
        'http://www.genbeta.com/tag/geolocalizacion/rss2.xml',
        'http://mappinggis.com/feed/',
        'http://feeds.feedburner.com/bingMaps',
        'http://feeds.feedburner.com/GoogleMapsMania',
        'http://feeds.feedburner.com/thematicmapping',
        'http://odoe.net/blog/feed/',
        'http://feeds.feedburner.com/orbemapa/bamo',
        'http://feeds.feedburner.com/SitumTechnologies',
        'http://blog.mapillary.com/rss.xml',
        'http://www.francisortiz.com/feeds/posts/default?alt=rss',
        'http://www.weeklyosm.eu/es/feed',
        'http://feeds.feedburner.com/ThunderheadExplorer'
    ],
      pubDate: new Date()
  };

  RSSCombiner(techFeedConfig)
      .then(function (feed) {
          var xml = feed.xml({ indent: true });
          fs.writeFile('example/xml/tech-example.xml', xml, function (err) {
              if (err) {
                  console.error(err);
              } else {
                  console.log('Tech feed written');
              }
          });

        });
};

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
