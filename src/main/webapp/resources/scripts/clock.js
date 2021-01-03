$(function(){

    let timeNode = document.getElementById('time-node');

    function getCurrentTimeString() {
        return new Date().toTimeString().replace(/ .*/, '');
    }

    setInterval(
        () => timeNode.innerHTML = getCurrentTimeString(),
        7000
    );
});