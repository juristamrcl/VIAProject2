/**
 * Created by Marcel Jurišta on 04.11.2017.
 */
function loadPoint(){
    for (var i = 1; i < 6; i++){
        var temp = $('#card' + i).height();
        var counted = temp - 82 + 65;
        if (i == 2){
            counted -= 40;
        }
        document.getElementById("wrapper" + i).style.height = counted + "px";
    }
}