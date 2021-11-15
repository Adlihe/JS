(function () {
    'use strict';
    const btn = document.getElementById("start")

    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    const persons = [
        "Nelson Mandela",
        "John F. Kennedy",
        "Ifti Nasim",
        "Malcolm X",
        "Sojourner Truth",
        "Eleanor Roosevelt",
        "Rosa Parks"
    ];
    const years = [
        "1918 - 2013",
        "1917 - 1963",
        "1946 - 2011",
        "1925 - 1965",
        "1797 - 1883",
        "1884 - 1962",
        "1913 - 2005"
    ];

    console.log(colors);
    console.log(persons);
    console.log(years);
    console.log("Script ready!");

    let i = 0

    function btnClick (event) {

        if (i >= 6) {
            btn.style.visibility = 'hidden';
        }
        
        const box = document.createElement("div");
        let boxes = document.getElementsByClassName("box");
        let image = document.createElement("img");
        image = "<img src='img/logo.png' width=70px>";

        box.className = "box"; //assign class to box
        box.id = `${[i]}` //assign id to box

        box[i] = box.style.backgroundColor = colors[i];
        i++;

        btn.innerHTML = `Display card ${i + 1}` //change text on button
        event = document.body.appendChild(box); // add box to page and html

        for (let a = 0; a < boxes.length; a++) {
            boxes[a].addEventListener('mouseover', function (frame){ //add eventlistener for when mouse is over box
                frame.target.style.border = "2px solid black"; // add frame
                })
            boxes[a].addEventListener('mouseleave', function(noFrame){ // add eventlistener for when mouse leaves box
                noFrame.target.style.border = ""; //remove frame
            })
        }

        box.addEventListener('click', function(turnCard){ //Make sure it can only be done once..!!
            let id = turnCard.target.id; //get id of box that was clicked
            box[id] = box.innerHTML += persons[id] + "<br />";
            box[id] = box.innerHTML += image + "<br />";
            // box[id] = document.body.appendChild(image);
            box[id] = box.innerHTML += years[id];
        });

            

                
    }

    btn.addEventListener('click', btnClick);


    

})();
