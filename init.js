const Rx = require('rxjs/Rx');
const httpClient = require('easyhttp');
const accessToken = require('./personal-access-token.json');

var requestCommon = {
    method: 'GET',
    headers: {Authorization: 'Bearer ' + accessToken.token}
}

var doRequestObservable = Rx.Observable.bindCallback(httpClient.doRequest);
var roomResult = doRequestObservable('https://api.hipchat.com/v2/room?include-private=false&include-archived=false&max-results=1000', requestCommon);

function listRooms(itemsJson){
    var items = JSON.parse(itemsJson).items;
    for(var item of items){
        console.log(item);
    }
}

roomResult.subscribe( x => listRooms(x[0]), e => console.error(e));

