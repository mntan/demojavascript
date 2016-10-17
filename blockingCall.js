/**
 * Created by tannguyen on 10/17/16.
 */
function now(txt) {//in ra thoi gian hien tai sd localTime, dont use localdateTime
    console.log(new Date().toLocaleTimeString() + ' ' + txt);
}

function wait(miliSeconds) {//hàm đợi
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + miliSeconds) {}
}

now('> Start to wait');
wait(5000);
now('> Finish waiting');
