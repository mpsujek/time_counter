document.addEventListener("DOMContentLoaded", function() {

var ul = document.getElementById('list');
var commentsArray = [];
var commentsAfterLoad = localStorage.getItem('comment');
var lastEndTime = localStorage.getItem('endTime');

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

//checking if there is something in localstorage if not array will be clear if there is somethin it will be iserted to array
if (commentsAfterLoad === null) {
    commentsArray = [];
} else {
    commentsArray = commentsAfterLoad.split(',');
    for (var i = 0; i < commentsArray.length; i++) {
      createList(ul, commentsArray[i]);
    }
}
    var button = document.getElementById('make_point');
    var start = new Date();
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var li = document.createElement('li');
    var clearBtn = document.getElementById('clear_local');
    var actualTime = document.getElementById('actualTime');

    li.appendChild(document.createTextNode("Actual Time - " + checkTime(hour) + ":" + checkTime(minute) + ":" + checkTime(second)));
    ul.appendChild(li);

    actualTime.appendChild(document.createTextNode("Actual Time - " + checkTime(hour) + ":" + checkTime(minute) + ":" + checkTime(second)));

    // adding new element to list with actual time, comment and time from last checkpoint
    button.onclick = function() {
        var date = new Date();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        var end = date;
        var endTime = end.getTime();
        var startTime = start.getTime();
        // console.log(endTime);
        if (lastEndTime !== null) {
          startTime = lastEndTime;
        }
        var elapsed = endTime - startTime ;
        // console.log(end.getTime(),start.getTime(), elapsed);
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

        var text = "Time on click: " + checkTime(hour) + ":" + checkTime(minute) + ":" + checkTime(second) + " Time from previous check - " + hours + " hours " + minutes + " min. " + seconds + " sec. " + "Comment: " + commentText;

        createList(ul, text);
        commentsArray.push(text);
        localStorage.setItem('comment', commentsArray);
        endTime = end.getTime();
        // console.log(endTime);
        localStorage.setItem('endTime', endTime);

        // var getItem = localStorage.getItem("row");
        // console.log(getItem);
        document.getElementById('comment').value = "";
        // console.log("Time spend HH:MM:SS = " + hours + ":" + minutes + ":" + seconds);
    };

// clear lockal storage and reload page (to clear list of item)
    clearBtn.onclick = function(){
      localStorage.clear();
      location.reload();
    };

//create list
function createList(list, text) {
  var listItem = document.createElement('li');
  listItem.innerHTML = text;
  list.appendChild(listItem);
}

});
