function clicked(event) {

    if ( document.getElementById("checkForm:coordinateR")[0].checked) {

        let svg = document.querySelector('svg');
        let r =  document.getElementById("checkForm:coordinateR")[0].checked.val();
        let rect = event.currentTarget.getBoundingClientRect();
        let coordinateX = event.clientX - rect.left;
        let coordinateY = event.clientY - rect.top;
        let basis = 100 / r;
        let x = ((coordinateX - 150) / basis).toFixed(2);
        let y = ((150 - coordinateY) / basis).toFixed(2);
        svg.insertAdjacentHTML("beforeend", `<circle r="3" cx="${coordinateX}" cy="${coordinateY}" fill-opacity="0.7" fill="red" stroke="firebrick"></circle>`);

        let form = document.createElement('form');

        form.innerHTML = (`<input type="hidden" name="coordinateX" value="${x}"> 
                           <input type="hidden" name="coordinateY" value="${y}"> 
                           <input type="hidden" name="coordinateR" value="${r}">`);
        document.body.append(form);
        form.submit();
    } else {
        $('.coordinateRE').next("div").remove();
        $('.coordinateRE').after('<div>Выберите R</div>');
    }
}


$(function () {

    var timeNode = document.getElementById('time-node');

    function getCurrentTimeString() {
        return new Date().toTimeString().replace(/ .*/, '');
    }

    setInterval(
        () => timeNode.innerHTML = getCurrentTimeString(),
        7000
    );



    let svg = document.querySelector('svg');
    svg.insertAdjacentHTML("beforeend", `<circle r="3" cx="${coordinateX}" cy="${coordinateY}" fill-opacity="0.7" fill="red" stroke="firebrick"></circle>`);
    svg.addEventListener("click", clicked);



});