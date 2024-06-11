FRAME.registerComponent("scuba-rotation-reader", {
    schema:{
        SpeedOfRotation: {type:"number", default:0},
        SpeedOfAscent: {type:"number", default:0}
    },
    init:function(){
        window.addEventListener("keydown",(e) =>{

            this.data.SpeedOfRotation = this.el.getAttribute("rotation")

            var scubaRotation = this.data.SpeedOfRotation

            if (e.key == "ArrowRight"){
                if (scubaRotation.x > 10){
                    scubaRotation.x +=0.5;
                    this.el.setAttribute("rotation", scubaRptation);
                }
            }

            if (e.key == "ArrowLeft"){
                if (scubaRotation.x > -10){
                    scubaRotation.x -=0.5;
                    this.el.setAttribute("rotation", scubaRptation);
                }
            }

            if (e.key == "ArrowUp"){
                if (scubaRotation.z > 20){
                    scubaRotation.z +=0.5;
                    this.el.setAttribute("rotation", scubaRptation);
                }
            }

            if (e.key == "ArrowDown"){
                if (scubaRotation.z > -10){
                    scubaRotation.z -=0.5;
                    this.el.setAttribute("rotation", scubaRptation);
                }
            }
        });
    }

});