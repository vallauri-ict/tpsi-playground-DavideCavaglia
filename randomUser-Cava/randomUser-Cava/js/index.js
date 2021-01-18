let vari;
let Gen;
//let txtUsers;
let valorePrimo=0;
let  vettS=document.getElementsByClassName("sex");
let nations;
let pass;

window.onload = function () {
    //txtUsers=document.getElementById("numero");
    Gen=document.getElementsByClassName("gen")
};

function generateUsers() {
   // let numUsers = document.getElementById("num").value;
    let param = "?results=" + 1;


    if (vettS[0].checked) {
        param += "&&gender=male";
    } else if (vettS[1].checked) {
        param += "&&gender=female";
    }

    nations = document.getElementsByClassName("r");
    param += "&nat=";
    if (nations[0].checked) {
        param += "br,";
    }
    if (nations[1].checked) {
        param += "au,";
    }
    if (nations[2].checked) {
        param += "de,";
    }
    if (nations[3].checked) {
        param += "fr,";
    }
    if (nations[4].checked) {
        param += "gb,";
    }
    if (nations[5].checked) {
        param += "us,";
    }
    if (nations[6].checked) {
        param += "ca,";
    }
    if (nations[7].checked) {
        param += "ch,";
    }
    if (nations[8].checked) {
        param += "dk,";
    }
    if (nations[9].checked) {
        param += "es,";
    }
    if (nations[10].checked) {
        param += "fi,";
    }
    if (nations[11].checked) {
        param += "ie,";
    }
    if (nations[12].checked) {
        param += "ir,";
    }
    if (nations[13].checked) {
        param += "nl,";
    }
    if (nations[14].checked) {
        param += "nz,";
    }
    if (nations[15].checked) {
        param += "tr,";
    }
    console.log(param)
    pass = document.getElementsByClassName("p");
    param += "&password=";
    if (pass[0].checked) {
        param += "upper,";
    }
    if (pass[1].checked) {
        param += "lower,";
    }
    if (pass[2].checked) {
        param += "special,";
    }
    if (pass[3].checked) {
        param += "number,";
    }

        let finalUrl = "https://randomuser.me/api/" + param;
        console.log(finalUrl);
        $.ajax({
            url: finalUrl,
            success: function (usersData) {
                vari = usersData;
                carica(0, vari);
                console.log(usersData);
                // TODO:: generazione dinamica dei contenuti
            }
        });

    function carica() {

        let i = valorePrimo;

        for (let i = 0; i < Gen.length; i++) {
            Gen[i].innerText = Gen[i].id + ": ";
        }
        Gen[0].setAttribute("src", vari.results[i].picture.thumbnail);
        Gen[1].innerText += " " + vari.results[i].name.first;
        Gen[2].innerText += " " + vari.results[i].name.last;
        Gen[3].innerText += " " + vari.results[i].gender;
        Gen[4].innerText += " " + vari.results[i].nat;
        Gen[5].innerText += " " + vari.results[i].email;
        Gen[6].innerText += " " + vari.results[i].login.password;


        //if (txtUsers.value > valorePrimo) {
           // valorePrimo++;
        //}
    }

}



