var u = document.getElementById('butten');

function show(uvw){
    u.value += uvw
}

function cale(){
    u.value =''
}


function mantipilay(){
    u.value = u.value * u.value
}

function delid(){
    var lastLeter =u.value
    lastLeter = lastLeter.substring(0,lastLeter.length-1)
    u.value = lastLeter
}

function result(){
    u.value = eval (u.value)
}