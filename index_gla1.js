function start ()  
{
    var text = document.createElement("h1");
    text.innerText = "Keaton McDougall";
    text.style.color = "gray";
    text.style.textDecoration = "underline";
    text.style.textAlign = "center";
    text.style.background = "blue";
    text.style.margin = "2px 500px";
        
    return document.body.appendChild(text);
}
start();
document.body.style.background = "lightblue";

function input()
{
    var In1 = document.createElement("Input");
        In1.setAttribute("id", "first");
            In1.style.height = "20px";
            In1.style.width = "100px";
            In1.style.display = "inline-block";
            In1.style.textAlign = "center";
            In1.style.margin = "5px 0px 5px 41.5%";
            In1.style.border = "2px solid black";
        document.body.appendChild(In1);

    var text = document.createElement("h2");
            text.innerText = " + ";
            text.style.margin = "5px 15px";
            text.style.display = "inline-block";
        document.body.appendChild(text);

    var In2 = document.createElement("Input");
        In2.setAttribute("id", "second");
            In2.style.height = "20px";
            In2.style.width = "100px";
            In2.style.display = "inline-block";
            In2.style.textAlign = "center";
            In2.style.margin = "5px 0px 5px 0px";
            In2.style.border = "2px solid black";
        document.body.appendChild(In2);
    
}
input();

const newbutton = document.createElement("button");
    newbutton.textContent = "Add";
    newbutton.style.display = "block";
    newbutton.style.margin = "5px 0px 5px 48.8%";

    document.body.appendChild(newbutton);

    var eq = document.createElement("h2")
        eq.style.textAlign = "center";
        eq.style.padding = "0px 10px";
        eq.style.display = "inline-block";
        eq.style.margin = "5px 0px 5px 47%";
        eq.innerHTML = "= ";
    document.body.appendChild(eq);

    var line = document.createElement("h2");
        line.style.textAlign = "center";
        line.style.display = "inline-block";
    document.body.appendChild(line);
    line.innerHTML = "";
function Adding()
{  

    newbutton.addEventListener('click', () => {
        eq.innerHTML = "= ";
        document.getElementById("first").style.border = "2px solid black";
        document.getElementById("second").style.border = "2px solid black";

        let x = document.getElementById("first").value;
        let y = document.getElementById("second").value;
    try {
            if(x.trim() == "" || y.trim() == "")
                throw "is nothing here.";
            if(isNaN(x) || isNaN(y))
                throw "not a number try again";
            x = Number(x)
            y = Number(y)

            line.innerHTML = x + y;
                document.getElementById("first").style.border = "2px solid black";
                document.getElementById("second").style.border = "2px solid black";
                eq.innerHTML = "= ";
        }
        catch(err) {
            eq.innerHTML = "Input";
            line.innerHTML ="" + err;
            document.getElementById("first").style.border = "2px solid red";
            document.getElementById("second").style.border = "2px solid red";

            }
        finally {
            document.getElementById("first").value = "";
            document.getElementById("second").value = "";
            }
        });

}
Adding();