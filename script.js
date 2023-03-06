function reg() {
    var reg = document.getElementById("reg");
    alert('Website Dalam Perbaikan');
}
function log() {
    var log = document.getElementById("log");
    alert('Website Dalam Perbaikan');
} 
function rgb() {
    var r = document.getElementById("r").value;
    var g = document.getElementById("g").value;
    var b = document.getElementById("b").value;
    var color ="rgb("+ r + "," + g + "," + b +")";
    document.body.style.backgroundColor = color;
}
document.getElementById("r").addEventListener("input",rgb);
document.getElementById("g").addEventListener("input",rgb);
document.getElementById("b").addEventListener("input",rgb);

var im = document.getElementsByClassName(".image");
var nam = document.getElementsByName("name");
const search = document.querySelector(".search-input");
images = document.querySelectorAll(".list");

search.addEventListener("keyup", e=>{
    if(e.key=="Enter"){
        let searcValue = search.value;
        value = searcValue.toLowerCase();
        images.forEach(im =>{
            if(value === im.dataset.nam){
                return im.style.display = "block";
            }
            im.style.display = "none";
        });
    }
});

search.addEventListener("keyup", () =>{
    if(search.value !="") return;

    images.forEach(im=>{
        im.style.display = "block";
    })
})