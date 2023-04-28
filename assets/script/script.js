
  function getValues () {
    var gridDimensions = document.getElementById('grid-dimensions').value;
    console.log(gridDimensions);
    while (gridDimensions > 0){
        const newLine = document.createElement("div");
        newLine.innerHTML = "div?";
        document.getElementById("windows").appendChild(newLine);

        // const box = `<div class="box" style="height: 500px; width: 500px; border: 5px solid black;">Div Me</div>`;
        // document.body.innerHTML = box;
        gridDimensions-=1;
    }
    
    
}

// var values = [];

// Array.from(document.querySelectorAll('#input-form input')).reduce((acc, input) =>({ ...acc, [input.id]: input.value}), {});

// function getValues() {
//     var values = document.querySelectorAll('#input-form input');
//     console.log(values);
// }

