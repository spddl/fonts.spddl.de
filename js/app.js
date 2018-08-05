  angular.module('App', ['ngRoute','me-lazyload','ngAnimate']).directive('imageonload', function() {
    return {
        restrict: 'A',
        link: function(scope, element) {
          element.on('load', function() {
            // Set visibility: true + remove spinner overlay
            element.removeClass('spinner-hide')
            element.addClass('spinner-show')
            element.parent().find('span').remove()
          })
          scope.$watch('ngSrc', function() {
            // Set visibility: false + inject temporary spinner overlay
            element.addClass('spinner-hide');
          })
        }
    };
}).directive("mAppLoading", function( $animate ) {
      return({
          link: link,
          restrict: "C"
      });
      function link( scope, element, attributes ) {
          $animate.leave( element.children().eq( 1 ) ).then(
              function cleanupAfterAnimation() {
                  element.remove();
                  scope = element = attributes = null;
              }
          )
      }
  }
).controller('Ctrl', function($scope, $location) {
    'use strict';
    $scope.onload = true;

    $scope.items = [{
      name: '04b_19',
      imgur: 'http://imgur.com/a/Z2X5l',
      upload: 1413496800000
    }, {
      name: 'A Dripping Marker',
      imgur: 'http://imgur.com/a/p6lAf',
      upload: 1417215600000
    }, {
      name: 'A Lolita Scorned',
      imgur: 'http://imgur.com/a/VJjK9',
      upload: 1421794800000
    }, {
      name: 'AR DESTINE',
      imgur: 'http://imgur.com/a/kmgQz',
      upload: 1430431200000
    }, {
      name: 'Ace Attorney',
      imgur: 'http://imgur.com/a/OIaCe',
      upload: 1413669600000
    }, {
      name: 'Acmo Display SSi',
      imgur: 'http://imgur.com/a/h4ZIK',
      upload: 1433628000000
    }, {
      name: 'Adler',
      imgur: 'http://imgur.com/a/SiIvP',
      upload: 1413669600000
    }, {
      name: 'Adventure',
      imgur: 'http://imgur.com/a/8UbG0',
      upload: 1417215600000
    }, {
      name: 'AgencyFB',
      imgur: 'http://imgur.com/a/Fo4jC',
      upload: 1413496800000
    }, {
      name: 'Alte DIN 1451 Mittelschrift',
      imgur: 'http://imgur.com/a/faEic',
      upload: 1428098400000
    }, {
      name: 'American Captain',
      imgur: 'http://imgur.com/a/OGMhw',
      upload: 1409090400000
    }, {
      name: 'Andy Bold',
      imgur: 'http://imgur.com/a/Jp7KT',
      upload: 1437256800000
    }, {
      name: 'Angry Birds',
      imgur: 'http://imgur.com/a/DVyGp',
      upload: 1422226800000
    }, {
      name: 'Anjelika Rose',
      imgur: 'http://imgur.com/a/QvS8V',
      upload: 1419375600000
    }, {
      name: 'Arial',
      imgur: 'http://imgur.com/a/GEi5I',
      upload: 1418425200000
    }, {
      name: 'Avengeance Heroic Avenger',
      imgur: 'http://imgur.com/a/6lbaS',
      upload: 1416697200000
    }, {
      name: 'Badaboom BB',
      imgur: 'http://imgur.com/a/6pBh0',
      upload: 1432504800000
    }, {
      name: 'Banana Chip Muffins',
      imgur: 'http://imgur.com/a/tBWw0',
      upload: 1446505200000
    }, {
      name: 'Bebas Neue',
      imgur: 'http://imgur.com/a/qAmyM',
      upload: 1407794400000
    }, {
      name: 'Bender',
      imgur: 'http://imgur.com/a/BW1CC',
      upload: 1420066800000
    }, {
      name: 'Bern Sans CT',
      imgur: 'http://imgur.com/a/xtbS2',
      upload: 1411250400000
    }, {
      name: 'Big Noodle Titling',
      imgur: 'http://imgur.com/a/cnkJu',
      upload: 1437256800000
    }, {
      name: 'Biko',
      imgur: 'http://imgur.com/a/3bNJN',
      upload: 1430431200000
    }, {
      name: 'Birth of a Hero',
      imgur: 'http://imgur.com/a/mHVYC',
      upload: 1416092400000
    }, {
      name: 'Bombardier',
      imgur: 'http://imgur.com/a/ALc5K',
      upload: 1418425200000
    }, {
      name: 'Bourgeois',
      imgur: 'http://imgur.com/a/sjE5u',
      upload: 1416092400000
    }, {
      name: 'Breamcatcher',
      imgur: 'http://imgur.com/a/XmUK1',
      upload: 1419375600000
    }, {
      name: 'CSS',
      imgur: 'http://imgur.com/a/UhZXj',
      upload: 1418425200000
    }, {
      name: 'Calibri',
      imgur: 'http://imgur.com/a/uV3VW',
      upload: 1437256800000
    }, {
      name: 'Capture it',
      imgur: 'http://imgur.com/a/u9bhp',
      upload: 1424991600000
    }, {
      name: 'Catenary Stamp',
      imgur: 'http://imgur.com/a/A7X89',
      upload: 1421794800000
    }, {
      name: 'Cerbetica',
      imgur: 'http://imgur.com/a/cyUv0',
      upload: 1428530400000
    }, {
      name: 'CheekyRabbit',
      imgur: 'http://imgur.com/a/nghxe',
      upload: 1407708000000
    }, {
      name: 'Chelsea',
      imgur: 'http://imgur.com/a/7ezBd',
      upload: 1433628000000
    }, {
      name: 'Chiller',
      imgur: 'http://imgur.com/a/N5twU',
      upload: 1414796400000
    }, {
      name: 'ClearviewHwy',
      imgur: 'http://imgur.com/a/upqbJ',
      upload: 1417561200000
    }, {
      name: 'Coalition',
      imgur: 'http://imgur.com/a/3svV8',
      upload: 1421276400000
    }, {
      name: 'Code',
      imgur: 'http://imgur.com/a/VKf0X',
      upload: 1427151600000
    }, {
      name: 'Collegiate',
      imgur: 'http://imgur.com/a/EToJu',
      upload: 1407621600000
    }, {
      name: 'Comfortaa',
      imgur: 'http://imgur.com/a/issTz',
      upload: 1424214000000
    }, {
      name: 'Comic Neue Angular',
      imgur: 'http://imgur.com/a/MvCT1',
      upload: 1433628000000
    }, {
      name: 'ComicSansMS',
      imgur: 'http://imgur.com/a/UAIn9',
      upload: 1411855200000
    }, {
      name: 'Complete in Him',
      imgur: 'http://imgur.com/a/DHpFW',
      upload: 1424214000000
    }, {
      name: 'ConcursoItalian BTN',
      imgur: 'http://imgur.com/a/IHYFM',
      upload: 1421794800000
    }, {
      name: 'Corbel',
      imgur: 'http://imgur.com/a/UXCWb',
      upload: 1414796400000
    }, {
      name: 'DIN 1451',
      imgur: 'http://imgur.com/a/oVGUL',
      upload: 1425250800000
    }, {
      name: 'DIN1451Engschrift',
      imgur: 'http://imgur.com/a/44oTH',
      upload: 1408053600000
    }, {
      name: 'DaftFont',
      imgur: 'http://imgur.com/a/ZFBzU',
      upload: 1413669600000
    }, {
      name: 'DeathNote',
      imgur: 'http://imgur.com/a/rgp88',
      upload: 1436738400000
    }, {
      name: 'Devil Breeze',
      imgur: 'http://imgur.com/a/lX8mV',
      upload: 1427583600000
    }, {
      name: 'Dimis',
      imgur: 'http://imgur.com/a/BapM4',
      upload: 1432504800000
    }, {
      name: 'EdoSZ',
      imgur: 'http://imgur.com/a/VJ73X',
      upload: 1409868000000
    }, {
      name: 'Eirik Raude',
      imgur: 'http://imgur.com/a/frUzz',
      upload: 1428098400000
    }, {
      name: 'Emulogic',
      imgur: 'http://imgur.com/a/mlC86',
      upload: 1424991600000
    }, {
      name: 'Ethon',
      imgur: 'http://imgur.com/a/1N4JA',
      upload: 1424214000000
    }, {
      name: 'Exo',
      imgur: 'http://imgur.com/a/EAE3g',
      upload: 1432245600000
    }, {
      name: 'FZCuYuan-M03',
      imgur: 'http://imgur.com/a/pccr8',
      upload: 1423782000000
    }, {
      name: 'Fabada',
      imgur: 'http://imgur.com/a/bBtLi',
      upload: 1430431200000
    }, {
      name: 'Fancy Footwork 2',
      imgur: 'http://imgur.com/a/HlMfO',
      upload: 1413669600000
    }, {
      name: 'Fish Fingers',
      imgur: 'http://imgur.com/a/5m7tI',
      upload: 1446850800000
    }, {
      name: 'Fixedsys Excelsior',
      imgur: 'http://imgur.com/a/ivBAo',
      upload: 1407621600000
    }, {
      name: 'Fought Knight',
      imgur: 'http://imgur.com/a/TPTGS',
      upload: 1432245600000
    }, {
      name: 'Free Pixel',
      imgur: 'http://imgur.com/a/QldtM',
      upload: 1416092400000
    }, {
      name: 'Freestyle Script',
      imgur: 'http://imgur.com/a/kvouR',
      upload: 1431554400000
    }, {
      name: 'GapstownAH',
      imgur: 'http://imgur.com/a/4P5ph',
      upload: 1413496800000
    }, {
      name: 'Gasalt',
      imgur: 'http://imgur.com/a/ReQ3i',
      upload: 1433628000000
    }, {
      name: 'Geared Slab',
      imgur: 'http://imgur.com/a/aa1oe',
      upload: 1421794800000
    }, {
      name: 'Geforce',
      imgur: 'http://imgur.com/a/gD6lS',
      upload: 1407621600000
    }, {
      name: 'Geometry Soft Pro Bold A',
      imgur: 'http://imgur.com/a/oTCn7',
      upload: 1433628000000
    }, {
      name: 'Gobold',
      imgur: 'http://imgur.com/a/RUtVC',
      upload: 1430431200000
    }, {
      name: 'Gotham',
      imgur: 'http://imgur.com/a/A90ft',
      upload: 1431554400000
    }, {
      name: 'HACKED',
      imgur: 'http://imgur.com/a/3bLfl',
      upload: 1424991600000
    }, {
      name: 'Helvetica LT',
      imgur: 'http://imgur.com/a/I6jvy',
      upload: 1407448800000
    }, {
      name: 'Helvetica Neue Ultra Light',
      imgur: 'http://imgur.com/a/1A8b6',
      upload: 1408053600000
    }, {
      name: 'Hemi Head 426',
      imgur: 'http://imgur.com/a/ne5R4',
      upload: 1411250400000
    }, {
      name: 'Hitman',
      imgur: 'http://imgur.com/a/cXxDL',
      upload: 1420066800000
    }, {
      name: 'Hollywood Hills',
      imgur: 'http://imgur.com/a/doXsw',
      upload: 1409090400000
    }, {
      name: 'Impact',
      imgur: 'http://imgur.com/a/oJCjM',
      upload: 1408053600000
    }, {
      name: 'Inconsolata',
      imgur: 'http://imgur.com/a/OPjD6',
      upload: 1418425200000
    }, {
      name: 'Junction',
      imgur: 'http://imgur.com/a/LpQxA',
      upload: 1419375600000
    }, {
      name: 'Kingthings Petrock',
      imgur: 'http://imgur.com/a/myJd0',
      upload: 1422226800000
    }, {
      name: 'Korean Calligraphy',
      imgur: 'http://imgur.com/a/AKfdr',
      upload: 1411250400000
    }, {
      name: 'Krabby Patty',
      imgur: 'http://imgur.com/a/QRpax',
      upload: 1446505200000
    }, {
      name: 'Kudajets',
      imgur: 'http://imgur.com/a/43u8Q',
      upload: 1416092400000
    }, {
      name: 'Larabie',
      imgur: 'http://imgur.com/a/Eqqn7',
      upload: 1418425200000
    }, {
      name: 'Larabiefont Free',
      imgur: 'http://imgur.com/a/Nbe2V',
      upload: 1417215600000
    }, {
      name: 'League Gothic',
      imgur: 'http://imgur.com/a/57y5G',
      upload: 1418943600000
    }, {
      name: 'Lobster',
      imgur: 'http://imgur.com/a/XkaOf',
      upload: 1407448800000
    }, {
      name: 'Caviar Dreams (Locher GUI)',
      imgur: 'http://imgur.com/a/5SQUy',
      upload: 1407448800000
    }, {
      name: 'Lolita',
      imgur: 'http://imgur.com/a/iOVUW',
      upload: 1421794800000
    }, {
      name: 'Londrina Solid',
      imgur: 'http://imgur.com/a/ikhHn',
      upload: 1423004400000
    }, {
      name: 'Lovelo',
      imgur: 'http://imgur.com/a/11l4E',
      upload: 1421708400000
    }, {
      name: 'MS Mincho',
      imgur: 'http://imgur.com/a/peEpK',
      upload: 1408917600000
    }, {
      name: 'Mf Air Balloon',
      imgur: 'http://imgur.com/a/ynsqf',
      upload: 1414796400000
    }, {
      name: 'Mf Be Yourself',
      imgur: 'http://imgur.com/a/VkVtK',
      upload: 1414796400000
    }, {
      name: 'Mint Spirit',
      imgur: 'http://imgur.com/a/i0F4A',
      upload: 1424991600000
    }, {
      name: 'Mission Gothic',
      imgur: 'http://imgur.com/a/aaFJa',
      upload: 1408831200000
    }, {
      name: 'Monofonto',
      imgur: 'http://imgur.com/a/HtJ7R',
      upload: 1433628000000
    }, {
      name: 'Monofur',
      imgur: 'http://imgur.com/a/HtJ7R',
      upload: 1413669600000
    }, {
      name: 'Myriad Pro Light',
      imgur: 'http://imgur.com/a/hqUi0',
      upload: 1428530400000
    }, {
      name: 'Neuron Angled',
      imgur: 'http://imgur.com/a/ipodJ',
      upload: 1418943600000
    }, {
      name: 'Nexa',
      imgur: 'http://imgur.com/a/Jg5u5',
      upload: 1433628000000
    }, {
      name: 'Nikodecs',
      imgur: 'http://imgur.com/a/FluRG',
      upload: 1437256800000
    }, {
      name: 'Novecento Sanswide',
      imgur: 'http://imgur.com/a/CoVxC',
      upload: 1421535600000
    }, {
      name: 'OCTOBERCROW',
      imgur: 'http://imgur.com/a/MvNen',
      upload: 1408053600000
    }, {
      name: 'Onyx',
      imgur: 'http://imgur.com/a/5Q1mG',
      upload: 1418425200000
    }, {
      name: 'Optimus',
      imgur: 'http://imgur.com/a/Sk6vy',
      upload: 1418425200000
    }, {
      name: 'Orange Juice',
      imgur: 'http://imgur.com/a/rFpWS',
      upload: 1407708000000
    }, {
      name: 'Oswald',
      imgur: 'http://imgur.com/a/cuZcJ',
      upload: 1407448800000
    }, {
      name: 'Oxygen',
      imgur: 'http://imgur.com/a/S3mcG',
      upload: 1418425200000
    }, {
      name: 'PF Din Text Cond Pro Medium',
      imgur: 'http://imgur.com/a/U1MwA',
      upload: 1420066800000
    }, {
      name: 'PT Sans Narrow',
      imgur: 'http://imgur.com/a/zPP7d',
      upload: 1420066800000
    }, {
      name: 'Playtime with Hot Toddies',
      imgur: 'http://imgur.com/a/4cvz9',
      upload: 1413669600000
    }, {
      name: 'Pricedown',
      imgur: 'http://imgur.com/a/JcLl1',
      upload: 1408831200000
    }, {
      name: 'Prototype',
      imgur: 'http://imgur.com/a/Xhv9Y',
      upload: 1413496800000
    }, {
      name: 'Proxima Nova Soft',
      imgur: 'http://imgur.com/a/v0qb6',
      upload: 1416697200000
    }, {
      name: 'Proxima Nova',
      imgur: 'http://imgur.com/a/A3vPG',
      upload: 1430431200000
    }, {
      name: 'Pyrite',
      imgur: 'http://imgur.com/a/IG55P',
      upload: 1433628000000
    }, {
      name: 'Razer',
      imgur: 'http://imgur.com/a/oBPfg',
      upload: 1421535600000
    }, {
      name: 'Reef',
      imgur: 'http://imgur.com/a/Ek2FZ',
      upload: 1433628000000
    }, {
      name: 'Ristretto Pro',
      imgur: 'http://imgur.com/a/zyqat',
      upload: 1419375600000
    }, {
      name: 'Roboto',
      imgur: 'http://imgur.com/a/vgyCz',
      upload: 1407448800000
    }, {
      name: 'Rounded',
      imgur: 'http://imgur.com/a/lM2cC',
      upload: 1430431200000
    }, {
      name: 'Runescape UF',
      imgur: 'http://imgur.com/a/yq0zd',
      upload: 1433628000000
    }, {
      name: 'SAO Welcome',
      imgur: 'http://imgur.com/a/bKt73',
      upload: 1423004400000
    }, {
      name: 'SF Old Republic',
      imgur: 'http://imgur.com/a/ZBoK5',
      upload: 1417215600000
    }, {
      name: 'SF Slapstick Comic',
      imgur: 'http://imgur.com/a/wWtx8',
      upload: 1413669600000
    }, {
      name: 'SF Sports Night',
      imgur: 'http://imgur.com/a/5qx2c',
      upload: 1436133600000
    }, {
      name: 'SILPAKORN70NEW',
      imgur: 'http://imgur.com/a/XgyKI',
      upload: 1428616800000
    }, {
      name: 'SILPAKORN70yr',
      imgur: 'http://imgur.com/a/bT0dk',
      upload: 1428616800000
    }, {
      name: 'Samo Sans Pro',
      imgur: 'http://imgur.com/a/GAzDd',
      upload: 1407708000000
    }, {
      name: 'San Francisco',
      imgur: 'http://imgur.com/a/tQgOT',
      upload: 1428616800000
    }, {
      name: 'SegoeWP',
      imgur: 'http://imgur.com/a/5Nqhk',
      upload: 1420066800000
    }, {
      name: 'Shelley Volante BT',
      imgur: 'http://imgur.com/a/go5mJ',
      upload: 1427583600000
    }, {
      name: 'Shift Type Basic',
      imgur: 'http://imgur.com/a/nB4E0',
      upload: 1414796400000
    }, {
      name: 'Sign Painter',
      imgur: 'http://imgur.com/a/Y5l83',
      upload: 1413669600000
    }, {
      name: 'Sony Sketch EF',
      imgur: 'http://imgur.com/a/IZ885',
      upload: 1416092400000
    }, {
      name: 'Sprite Graffiti',
      imgur: 'http://imgur.com/a/By3av',
      upload: 1416092400000
    }, {
      name: 'Square Font',
      imgur: 'http://imgur.com/a/MBXwA',
      upload: 1421535600000
    }, {
      name: 'Steelfish',
      imgur: 'http://imgur.com/a/STVg5',
      upload: 1416697200000
    }, {
      name: 'Stroke',
      imgur: 'http://imgur.com/a/Y29Vx',
      upload: 1421794800000
    }, {
      name: 'Super Mario 64 Message Font',
      imgur: 'http://imgur.com/a/PcdFf',
      upload: 1423004400000
    }, {
      name: 'Surface',
      imgur: 'http://imgur.com/a/bwdpv',
      upload: 1428098400000
    }, {
      name: 'TF2',
      imgur: 'http://imgur.com/a/PtTPQ',
      upload: 1416697200000
    }, {
      name: 'Tele Marines',
      imgur: 'http://imgur.com/a/IZSYT',
      upload: 1420066800000
    }, {
      name: 'Tenor Sans',
      imgur: 'http://imgur.com/a/f8Ir',
      upload: 1420066800000
    }, {
      name: 'Terminus',
      imgur: 'http://imgur.com/a/KUQUx',
      upload: 1425855600000
    }, {
      name: 'Throw My Hands Up in the Air',
      imgur: 'http://imgur.com/a/lotSp',
      upload: 1437256800000
    }, {
      name: 'TimeBurner',
      imgur: 'http://imgur.com/a/Td8x5',
      upload: 1425855600000
    }, {
      name: 'Times New Roman',
      imgur: 'http://imgur.com/a/tKhUc',
      upload: 1436738400000
    }, {
      name: 'Trebuchet MS',
      imgur: 'http://imgur.com/a/R0nQN',
      upload: 1427839200000
    }, {
      name: 'Trench',
      imgur: 'http://imgur.com/a/VXHZI',
      upload: 1427839200000
    }, {
      name: 'Typola',
      imgur: 'http://imgur.com/a/EgT5n',
      upload: 1428530400000
    }, {
      name: 'Ubuntu',
      imgur: 'http://imgur.com/a/HDpEB',
      upload: 1430431200000
    }, {
      name: 'VT323',
      imgur: 'http://imgur.com/a/l0HNe',
      upload: 1436133600000
    }, {
      name: 'Xtra',
      imgur: 'http://imgur.com/a/IF4B2',
      upload: 1418425200000
    }, {
      name: 'Zag',
      imgur: 'http://imgur.com/a/Cr3Xq',
      upload: 1414796400000
    }, {
      name: 'Zombie Treats',
      imgur: 'http://imgur.com/a/rELZZ',
      upload: 1416697200000
    }, {
      name: 'Zrnic',
      imgur: 'http://imgur.com/a/uKPrw',
      upload: 1420066800000
    }, {
      name: 'Crossword Belle',
      imgur: 'http://imgur.com/a/vnpTd',
      upload: 1436738400000
    }, {
      name: 'CS1.6',
      imgur: 'http://imgur.com/a/Xeblu',
      upload: 1407448800000
    }, {
      name: 'csp_text',
      imgur: 'http://imgur.com/a/ltJ7o',
      upload: 1421276400000
    }, {
      name: 'pixelmix',
      imgur: 'http://imgur.com/a/sQkk3',
      upload: 1421535600000
    }, {
      name: 'scrawl',
      imgur: 'http://imgur.com/a/z6lT4',
      upload: 1426287600000
    }, {
      name: 'Simplicity',
      imgur: 'http://imgur.com/a/MFDVg',
      upload: 1408831200000
    }, {
      name: 'xkcd',
      imgur: 'http://imgur.com/a/ugxOC',
      upload: 1436133600000
    }, {
      name: 'csp_font',
      imgur: 'http://imgur.com/a/DgB48',
      upload: 1463868488000
    }, {
      name: 'LM Roman',
      imgur: 'http://imgur.com/a/Tg1dq',
      upload: 1463868488000
    }, {
      name: 'Fira Sans',
      imgur: 'http://imgur.com/a/IIush',
      upload: 1463868488000
    }, {
      name: 'Disco Duck',
      imgur: 'http://imgur.com/a/OpAsl',
      upload: 1463868488000
    }, {
      name: 'SAO UI',
      imgur: 'http://imgur.com/a/m5YMc',
      upload: 1463868488000
    }, {
      name: 'Epic Font',
      imgur: 'http://imgur.com/a/5AMDh',
      upload: 1463954400000
    }, {
      name: 'karla',
      imgur: 'http://imgur.com/a/MRSpV',
      upload: 1464991200000
    }, {
      name: 'Muller Narrow',
      imgur: 'http://imgur.com/a/ndvMR',
      upload: 1465077600000
    }, {
      name: 'GUERRILLA',
      imgur: 'http://imgur.com/a/CKTgp',
      upload: 1465077600000
    }, {
      name: 'Megatron',
      imgur: 'http://imgur.com/a/SkWuq',
      upload: 1465250400000
    }, {
      name: 'Three',
      imgur: 'http://imgur.com/a/luPRD',
      upload: 1465336800000
    }, {
      name: 'Mosk',
      imgur: 'http://imgur.com/a/Jm3GB',
      upload: 1465336800000
    }, {
      name: 'Intro Condensed',
      imgur: 'http://imgur.com/a/jRT4D',
      upload: 1465596000000
    }, {
      name: 'Solena',
      imgur: 'http://imgur.com/a/3kGyd',
      upload: 1466719200000
    }, {
      name: 'Akrobat',
      imgur: 'http://imgur.com/a/kUvZD',
      upload: 1468274400000
    }, {
      name: 'Mixa',
      imgur: 'http://imgur.com/a/QLQlq',
      upload: 1468879200000
    }, {
      name: 'Purista',
      imgur: 'http://imgur.com/a/PBy0y',
      upload: 1476568800000
    }, {
      name: 'HP Simplified',
      imgur: 'http://imgur.com/a/d63Ng',
      upload: 1476568800000
    }, {
      name: 'Dudu Calligraphy',
      imgur: 'http://imgur.com/a/rTvmq',
      upload: 1471298400000
    }, {
      name: 'Wingdings',
      imgur: 'http://imgur.com/a/dY2KF',
      upload: 1471298400000
    }, {
      name: 'Anton',
      imgur: 'http://imgur.com/a/Lbg1a',
      upload: 1491343200000
    }, {
      name: 'FjallaOne',
      imgur: 'http://imgur.com/a/TWOLJ',
      upload: 1491343200000
    }, {
      name: 'Roboto v2',
      imgur: 'http://imgur.com/a/IARyY',
      upload: 1491343200000
    }, {
      name: 'RopaSans',
      imgur: 'http://imgur.com/a/KLiQc',
      upload: 1491343200000
    }, {
      name: 'Cabo Rounded',
      imgur: 'http://imgur.com/a/ezzQK',
      upload: 1494021600000
    }, {
      name: 'Dimbo',
      imgur: 'http://imgur.com/a/iRsq7',
      upload: 1494021600000
    }, {
      name: 'ETNA',
      imgur: 'http://imgur.com/a/jqpZ9',
      upload: 1494021600000
    }, {
      name: 'Expressway',
      imgur: 'http://imgur.com/a/RM1jv',
      upload: 1494021600000
    }, {
      name: 'Uni Neue',
      imgur: 'http://imgur.com/a/XbVEV',
      upload: 1494021600000
    }, {
      name: 'womby',
      imgur: 'http://imgur.com/a/ZmpuE',
      upload: 1494021600000
    }, {
      name: 'Noto Sans CJK SC',
      imgur: 'http://imgur.com/a/1nXKK',
      upload: 1506722400000
    }, {
      name: 'Kermel Medium',
      imgur: 'https://imgur.com/a/0Ecst',
      upload: 1506722400000
    }, {
      name: 'Road Rage',
      imgur: 'https://imgur.com/a/dMll6',
      upload: 1506722400000
    }]

    // converter
    // http://www.esqsoft.com/javascript_examples/date-to-epoch.htm
    $scope.predicate = '-upload'
    $scope.reverse = false
    $scope.search = (location.hash.substr(1) || $location.path().substr(1)) || ''
    $scope.$watch('search', function(parm){ $location.url('/#' + parm) })
    
    // $scope.search = (location.hash.substr(1) || $location.path().substr(1)).replace('fonts-website%252F', '') || ''
    // $scope.$watch('search', function(parm){ $location.url('/#fonts-website%252F'+parm) })

    angular.element(document).ready(function() {
      Materialize.toast($scope.items.length + ' fonts available', 4000)
    });

  }).config(function($locationProvider) {
    $locationProvider.html5Mode(true);
  })

  $(document).ready(function() {
    $('.materialboxed').materialbox();
    $('select').material_select();
  })
