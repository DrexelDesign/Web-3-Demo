
var canYouSeeTheMenu = false;







// function to handle the showing and hiding of the main-nav
function hideShowMainNav(){
    //console.log("hide or show nav");
    //toggles the css display property
   // $("#main-nav").toggle();

    if(canYouSeeTheMenu === false){
        console.log("show me the menu!");
        // reset back to true, so that the menu will go away
        canYouSeeTheMenu = true;

        //turn the burger into an X
        animateBurger();



    }else{
        console.log("hide the menu!");
        // reset back to false, so the you can bring the menu back!
        canYouSeeTheMenu = false;
        
        //turn the X into the burger
        animateBurger();
    }


}