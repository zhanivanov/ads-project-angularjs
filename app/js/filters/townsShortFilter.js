'use strict';

adsApp.filter('townsShortFilter', function(){
    return function(townId){
        switch (townId){
            case 1: return "Sofia"; break;
            case 2: return "Plovdiv"; break;
            case 3: return "Varna"; break;
            case 4: return "Burgas"; break;
            case 5: return "Ruse"; break;
            case 6: return "Stara Zagora"; break;
            case 7: return "Pleven"; break;
            case 8: return "Sliven"; break;
            case 9: return "Dobrich"; break;
            case 10: return "Shoumen"; break;
            case 11: return "Yambol"; break;
            case 12: return "Blagoevgrad"; break;
            case 13: return "Veliko Tarnovo"; break;
            case 16: return "Kaspichan"; break;
        }
    }
});