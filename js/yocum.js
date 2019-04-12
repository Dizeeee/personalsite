var last = 1554994800;
var current = Math.floor((new Date()).getTime() / 1000) - 1;

var since = current - last;
var days = Math.floor(since / 86400);

document.getElementById('count').innerHTML = days;