
function showHome() {
    let home = document.querySelector("#homePage");
    home.classList.remove("hidden") ;
}
function showNewMenu(){
    document.querySelector("#searchBar").classList.add("hidden");
    document.querySelector("#serviceType").classList.add("hidden");
    document.querySelector("#smallNavbar").classList.remove("hidden");
    document.querySelector("#smallNavbar").style.display="flex";
    document.querySelector("#navbar").style.position="fixed";
    // document.querySelector("#home").style.marginTop="20px";
    }

