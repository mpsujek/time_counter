document.addEventListener("DOMContentLoaded", function() {
    var ul = document.getElementById('list');
    var button = document.getElementById('make_point');
    var start = new Date();
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var li = document.createElement('li');
    li.appendChild(document.createTextNode("Actual Time - " + hour + ":" + minute + ":" + second));
    ul.appendChild(li);


    button.onclick = function() {
        var date = new Date();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        var end = date;
        var elapsed = end.getTime() - start.getTime();
        // console.log(elapsed);
        start = date;
        var x = 0;
        var ms = elapsed;
        x = ms / 1000;
        var seconds = Math.floor(x % 60);
        x /= 60;
        var minutes = Math.floor(x % 60);
        x /= 60;
        var hours = Math.floor(x % 24);
        var nextLi = document.createElement('li');
        nextLi.appendChild(document.createTextNode("Actual time on click: " + hour + ":" + minute + ":" + second + " Time spend HH:MM:SS = " + hours + ":" + minutes + ":" + seconds));
        ul.appendChild(nextLi);

        // console.log("Time spend HH:MM:SS = " + hours + ":" + minutes + ":" + seconds);
    };

});
