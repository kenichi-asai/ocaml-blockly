
var query = location.search;
var value = query.split("#");
i = decodeURIComponent(value[1]);
if (true) {
    var socket = io.connect('https://www.is.ocha.ac.jp:49139');
    var message = 'end'+i;
    socket.emit('t_log', message);
}console.log("#");
