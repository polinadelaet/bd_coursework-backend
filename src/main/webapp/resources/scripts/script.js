function clicked(event) {

        //let r = document.querySelector('input[name="checkForm:coordinateR"]:checked').value;
    if (document.querySelector('input[name="checkForm:coordinateR"]:checked') != null) {
        r = document.querySelector('input[name="checkForm:coordinateR"]:checked').value;
        //let svg = document.querySelector('svg');
        let rect = event.currentTarget.getBoundingClientRect();
        let coordinateX = event.clientX - rect.left;
        let coordinateY = event.clientY - rect.top;
        let basis = 100 / r;
        let x = ((coordinateX - 150) / basis).toFixed(2);
        let y = ((150 - coordinateY) / basis).toFixed(2);

        let result = check(x, y, r);
        let svg = document.querySelector('svg');
        let color;
        if (result) {
            color = "green";
        } else color = "red";
        //x = parseInt(x).toFixed(1);
        //y = parseInt(y).toFixed(1);
        svg.insertAdjacentHTML("beforeend", `<circle r="3" cx="${coordinateX}" cy="${coordinateY}" fill-opacity="0.7" fill="${color}"></circle>`);
        document.getElementById("hiddenForm:coordinateX").value = x;
        document.getElementById("hiddenForm:coordinateY").value = y;
        document.getElementById("hiddenForm:parameterR").value = r;
        document.getElementById("hiddenForm:hiddenButton").click();
    } else {
        //$("#checkForm:rMessage").next("div").remove();
        $(document.getElementById("checkForm:rMessage")).next("div").remove();
        $(document.getElementById("checkForm:rMessage").insertAdjacentHTML("afterend",'<div>Choose R</div>'));
        //$('#rMessage').after('<div>Выберите R</div>');
    }
}

function rClicked() {
    let svgDiagram = document.getElementById("svgDiagram");
    svgDiagram.remove();
    let svg = document.getElementById("diagram");
    svg.insertAdjacentHTML("afterBegin", `<svg id="svgDiagram" xmlns="http://www.w3.org/2000/svg" width="300" height="300">

                <line x1="0" y1="150" x2="300" y2="150" stroke="#ffffff"></line>
                <line x1="150" y1="0" x2="150" y2="300" stroke="#ffffff"></line>

                <line x1="250" y1="145" x2="250" y2="155" stroke="#ffffff"></line>
                <line x1="200" y1="145" x2="200" y2="155" stroke="#ffffff"></line>
                <line x1="100" y1="145" x2="100" y2="155" stroke="#ffffff"></line>
                <line x1="50" y1="145" x2="50" y2="155" stroke="#ffffff"></line>

                <line x1="145" y1="50" x2="155" y2="50" stroke="#ffffff"></line>
                <line x1="145" y1="100" x2="155" y2="100" stroke="#ffffff"></line>
                <line x1="145" y1="200" x2="155" y2="200" stroke="#ffffff"></line>
                <line x1="145" y1="250" x2="155" y2="250" stroke="#ffffff"></line>

                <text x="245" y="140" stroke="#ffffff">R</text>
                <text x="185" y="140" stroke="#ffffff">R/2</text>
                <text x="77" y="140" stroke="#ffffff">-R/2</text>
                <text x="37" y="140" stroke="#ffffff">-R</text>
                <text x="156" y="55" stroke="#ffffff">R</text>
                <text x="156" y="105" stroke="#ffffff">R/2</text>
                <text x="156" y="205" stroke="#ffffff">-R/2</text>
                <text x="156" y="255" stroke="#ffffff">-R</text>
                <polygon points="300,150 295,155 295, 145" fill="#000720" stroke="#ffffff"></polygon>
                <polygon points="150,0 145,5 155,5" fill="#000720" stroke="#ffffff"></polygon>

                <rect x="150" y="100" width="100" height="50" fill-opacity="0.4" stroke="navy" fill="blue"></rect>
                <polygon points="50,150 150,50 150,150" fill-opacity="0.4" stroke="navy" fill="blue"></polygon>
                <path d="M150 150 L 150 250 C 150 250 250 250 250 150 L Z" fill-opacity="0.4" stroke="navy" fill="blue"></path>
            </svg>`);
    let svgg = document.querySelector('svg');
    svgg.addEventListener("click", clicked);
}

function validateX(event) {

    $(document.getElementById("checkForm:rMessage")).next("div").remove();
    $('#area_x_validation').next("div").remove();

    let xValues = {
        x1: document.querySelector('input[name="checkForm:j_idt9"]:checked'),
        x2: document.querySelector('input[name="checkForm:j_idt11"]:checked'),
        x3: document.querySelector('input[name="checkForm:j_idt13"]:checked'),
        x4: document.querySelector('input[name="checkForm:j_idt15"]:checked'),
        x5: document.querySelector('input[name="checkForm:j_idt17"]:checked'),
        x6: document.querySelector('input[name="checkForm:j_idt19"]:checked')
    };

    let checked = 0;

    for (let key in xValues) {
        if (xValues[key] !== null) {
            checked++;
        }
    }
    if (checked === 0) {
        event.preventDefault();
        $('#area_x_validation').after('<div>Неверные данные</div>');
        return false;
    }
}

function paintResults() {
    let svg = document.querySelector('svg');
    let coordinateX = x * 100 / r + 150;
    let coordinateY = 150 - y * 100 / r;
    svg.insertAdjacentHTML("beforeend", `<circle r="3" cx="${coordinateX}" cy="${coordinateY}" fill-opacity="0.7" fill="green" stroke="firebrick"></circle>`);
}

function check(x, y, r) {
    let first = (x <= r) && (x >= 0) && (0 <= y) && (y <= (r * 0.5));
    let second = (Number(x) <= 0) && (Number(y) >= 0) && (Number(y) - Number(x) <= r);
    let third = false;
    let fourth = (0 <= x) && ((x * x) <= (r * r) - (y * y)) && (y <= 0);
    return first || second || third || fourth;
}

jQuery(function($) {

    let svg = document.querySelector('svg');
    svg.addEventListener("click", clicked);
});