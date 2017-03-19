var ul = document.getElementById('list');
var commentsArray = [];

var commentsAfterLoad = localStorage.getItem('comment');
// console.log(commentsAfterLoad);
if (commentsAfterLoad === null) {
    commentsArray = [];

} else {
    // console.log(commentsAfterLoad.split(','));
    commentsArray = commentsAfterLoad.split(',');
    for (var i = 0; i < commentsArray.length; i++) {
      createList(ul, commentsArray[i]);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // wczytanie danych z local storage

    var button = document.getElementById('make_point');
    var start = new Date();
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var li = document.createElement('li');
    var clearBtn = document.getElementById('clear_local');
    var actualTime = document.getElementById('actualTime');


    li.appendChild(document.createTextNode("Actual Time - " + hour + ":" + minute + ":" + second));
    ul.appendChild(li);
    actualTime.appendChild(document.createTextNode("Actual Time - " + hour + ":" + minute + ":" + second));
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
        var commentText = document.getElementById('comment').value;
        // var text = document.createTextNode("Actual time on click: " + hour + ":" + minute + ":" + second + " Time spend - " + hours + " hours " + minutes + " min. " + seconds + " sec. " + "Comment: " + commentText);

        var text = "Time on click: " + hour + ":" + minute + ":" + second + " Time spend - " + hours + " hours " + minutes + " min. " + seconds + " sec. " + "Comment: " + commentText;

        createList(ul, text);

        commentsArray.push(text);
        localStorage.setItem('comment', commentsArray);

        // var getItem = localStorage.getItem("row");
        // console.log(getItem);
        document.getElementById('comment').value = "";
        // console.log("Time spend HH:MM:SS = " + hours + ":" + minutes + ":" + seconds);
    };

    clearBtn.onclick = function(){
      localStorage.clear();
      location.reload();
    };
});

function createList(list, text) {
  var listItem = document.createElement('li');
  listItem.innerHTML = text;
  list.appendChild(listItem);
}
