function setModal(myImg){

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    };

    var modal = document.getElementById('myModal');
    // Get the image and insert it inside the modal - use its "alt" text as a caption

    modal.onclick = function() {
        modal.style.display = "none";
    }

    var modalImg = document.getElementById("imgModal");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = myImg.src;
    captionText.innerHTML = myImg.alt;
}

