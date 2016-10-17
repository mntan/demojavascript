/**
 * Created by tannguyen on 10/17/16.
 */
function wait(miliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + miliSeconds) {}
}

now('> Start to wait');
process.nextTick(function(){
    now('> Do this task at the end of event queue');
});
now('> Do other task');
wait(1000);
now('> Do other task2');
