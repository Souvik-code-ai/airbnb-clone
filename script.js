
function showHome() {
    let home = document.querySelector("#homePage");
    home.classList.remove("hidden") ;
    let homeLogo=document.getElementById("home");
    homeLogo.style.borderColor="gray";
    homeLogo.style.borderWidth="2px";
    // homeLogo.style.opacity=0.1;
    document.getElementById("homeLine").style.opacity=1;
}
function showNewMenu(){
    document.querySelector("#searchBar").classList.add("hidden");
    document.querySelector("#serviceType").classList.add("hidden");
    document.querySelector("#smallNavbar").classList.remove("hidden");
    document.querySelector("#smallNavbar").style.display="flex";
    // document.querySelector("#navbar").style.position="fixed";
    // document.querySelector("#home").style.marginTop="20px";
    }

function showPopular(){
    document.querySelector("#topicContent").classList.remove("hidden");
    document.getElementById("topicContent").style.display="flex";
}
function showArts(){
    document.querySelector("#artContent").classList.remove("hidden");
    document.getElementById("artContent").style.display="flex";
    // document.querySelector("#topicContent").classList.toggle("hidden");
}
function showBeach(){
    document.querySelector("#beachContent").classList.remove("hidden");
    document.getElementById("beachContent").style.display="flex";
    // document.querySelector("#topicContent").classList.toggle("hidden");
}
function showMountain(){
    document.querySelector("#mountainContent").classList.remove("hidden");
    document.getElementById("mountainContent").style.display="flex";
    // document.querySelector("#topicContent").classList.toggle("hidden");
}
function showOther(){
    document.querySelector("#otherContent").classList.remove("hidden");
    document.getElementById("otherContent").style.display="flex";
    // document.querySelector("#topicContent").classList.toggle("hidden");
}
function showThings(){
    document.querySelector("#thingsContent").classList.remove("hidden");
    document.getElementById("thingsContent").style.display="flex";
    // document.querySelector("#topicContent").classList.toggle("hidden");
}