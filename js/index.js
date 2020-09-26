$( document ).ready(function() {
    
    $("#smt").on("click", function() {
        var name= ($("#name").val());
      
        if( name == "") {
            alert("plase enter name");
        }else {
            $(".msg-box").css("display" , "block");
            $(".msg-name").text(name);
            ($("#name").val(""));
        }
    });
});

var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};









