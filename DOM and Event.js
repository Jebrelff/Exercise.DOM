function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    
                  }

window.addEventListener("load", init);

button.addEventListener('click'), event => {
    paragraph.innerHTML = 'Houston! We have liftoff!'; }



    missionAbort.addEventListener("onmouseover", function( event ) {
        event.target.style.backgroundColor = "red";
        });

        missionAbort.addEventListener("mouseout", function( event ) {
            event.target.style.backgroundColor = "";
            });

            

            missionAbort.addEventListener("click", function( event ) {

                window.onclick = confirm("Are you sure you want to abort the mission?");

                if ( window.onclick = confirm("Are you sure you want to abort the mission?") == true ){

                    alert = ("Mission aborted! Space shuttle returning home")
                }

            } );