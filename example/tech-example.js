//var RSSCombiner = require('rss-combiner');
var RSSCombiner = require('../lib');
var fs = require('fs');

var techFeedConfig = {
    size: 100,
    feeds: [
        'http://feeds.feedburner.com/esriDevelopers',
        'http://feeds.feedburner.com/ArcgisDevelopers',
        'http://www.avuxi.com/feed',
        'http://feeds.feedburner.com/mapbox/SzPO',
        'http://feeds.feedburner.com/CartoBlog',
        'http://feeds.feedburner.com/GeoblinkGeospatialBusinessIntelligence',
        'http://www.geografiainfinita.com/feed/',
        'http://gersonbeltran.com/feed/',
        'http://www.feedrinse.com/services/rinse/?rinsedurl=ec78daf9a9f504a693c09d61b73d51ac',
        'http://www.feedrinse.com/services/rinse/?rinsedurl=d64f6a2793758519efc1f97cfb087514',
        'http://www.feedrinse.com/services/rinse/?rinsedurl=9e21a61718b1717c8c1a99015313659e',
        'http://www.feedrinse.com/services/rinse/?rinsedurl=488186ae5f4133afdda488bfb7615fa9',
        'http://www.feedrinse.com/services/rinse/?rinsedurl=0e54bbaf02ac39930c66f490805da6a9',
        'http://www.feedrinse.com/services/rinse/?rinsedurl=2222ca31e0175def8c3b7aa871d023ae',
        'http://www.feedrinse.com/services/rinse/?rinsedurl=24dc825356011882c82c793425c067ee',
        'http://www.feedrinse.com/services/rinse/?rinsedurl=5e4ea8c03e8c1a074468f5ff5fa258bd',
        'http://www.feedrinse.com/services/rinse/?rinsedurl=4b31e48def518fb4252e7e58fc074321',
        'http://www.feedrinse.com/services/rinse/?rinsedurl=c6fe2d4968971917042ef6a035e78005',
        'http://www.feedrinse.com/services/rinse/?rinsedurl=bea9c92361a3ac28511d70c6ddc74f20',
        'http://www.feedrinse.com/services/rinse/?rinsedurl=ec804f00ea3e2182d06f485596dd2e96',
        'http://www.feedrinse.com/services/rinse/?rinsedurl=c5ea45f5ca9375727e86d9a3dcef9eb3',
        'http://www.feedrinse.com/services/rinse/?rinsedurl=685078ab323454513855edcd7e5918d0',
        'http://www.feedrinse.com/services/rinse/?rinsedurl=12a1a0c0529b43f8c9d6d63e92b4e3a6',
        'http://www.feedrinse.com/services/rinse/?rinsedurl=ae8a8a25a0d0a79d61b1d05b66b1c145',
        'http://www.feedrinse.com/services/rinse/?rinsedurl=8c0c30859ed1e2cdbf7627e809deb644',
        'http://www.feedrinse.com/services/rinse/?rinsedurl=f6f0e0948f9552e7d8a5f58783943f84',
        'http://www.feedrinse.com/services/rinse/?rinsedurl=1169f5d3cbb40c45b5266065da696247',
        'http://www.feedrinse.com/services/rinse/?rinsedurl=a34852be5e03b2f15366edb39b2fbf01',
        'http://www.feedrinse.com/services/rinse/?rinsedurl=f42399d08161019cf700b5963bcc55df',
        'http://www.feedrinse.com/services/rinse/?rinsedurl=1a0c5bc77f7129d86994848e3e83791a',
        'http://www.feedrinse.com/services/rinse/?rinsedurl=f9ed7b8480125e214406d2b6788f8241',
        'http://www.feedrinse.com/services/rinse/?rinsedurl=726d3a01c1e48b466873a8b68e4ae203',
        'http://www.feedrinse.com/services/rinse/?rinsedurl=591d5892698367f6641bb13839258051',
        'http://www.feedrinse.com/services/rinse/?rinsedurl=0ebf7a806dd9282b38d27476b00835af',
        'http://www.feedrinse.com/services/rinse/?rinsedurl=fef63f503d20e2b86f0772d993112584',
        'http://www.feedrinse.com/services/rinse/?rinsedurl=ddaba3208b4b0cfd2206395eaf5b63cd',
        'http://www.feedrinse.com/services/rinse/?rinsedurl=5ed57a2ae76f3d49f3ce4ad12681b3fd',
        'http://www.feedrinse.com/services/rinse/?rinsedurl=9b3a24e3aaf0a7eac53be9a1da2b27ad',
        'http://feedrinse.com/announcements/feed/?mid=e199b86667591cacd466438ff760bec7'
    ],
    pubDate: new Date()
};

RSSCombiner(techFeedConfig)
    .then(function (feed) {
        var xml = feed.xml({ indent: true });
        fs.writeFile('xml/tech-example.xml', xml, function (err) {
            if (err) {
                console.error(err);
            } else {
                console.log('Tech feed written');
            }
        });
    });


