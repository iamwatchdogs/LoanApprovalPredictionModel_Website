var logo = document.getElementById("logo");
logo.onclick = function(){
    document.body.classList.toggle("icon");
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        logo.src = "src/sun.png";
    }else{
        logo.src = "src/moon.png"
    }
}