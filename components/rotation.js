AFRAME.registerComponent("terrain-rotation",{
    schema:{
        speedOfRotation:{type:"number",default:0}
    },
    init:function(){
        window.addEventListener("keydown",(e)=>{
            if (e.key === "ArrowRight") {
                if (this.data.speedOfRotation < 180) {
                  this.data.speedOfRotation += 0.01;
                }
            }
            if (e.key === "ArrowLeft") {
                if (this.data.speedOfRotation > -180) {
                  this.data.speedOfRotation -= 0.01;
                }
            }
        });
    },
    tick:function(){
        var mapRotation = this.el.getAttribute("rotation");
    
        mapRotation.y += this.data.speedOfRotation;
    
        this.el.setAttribute("rotation", {
          x: mapRotation.x,
          y: mapRotation.y,
          z: mapRotation.z
        });
    }
});

AFRAME.registerComponent("diver-rotation",{
    schema:{
        speedOfRotation : {type:"number",default:0},
        speedOfAscent : {type:"number",default:0}
    },
    init:function(){
        window.addEventListener("keydown",(e)=>{
            this.data.speedOfRotation = this.el.getAttribute("rotation");
            this.data.speedOfAscent = this.el.getAttribute("position");
            var diverRotation = this.data.speedOfRotation;
            var diverPosition = this.data.speedOfAscent;
            if(e.key === "ArrowRight"){
              if(diverRotation.x < 100){
                diverRotation.x += 0.5;
                this.el.setAttribute("rotation",diverRotation);
              }
            }
            if(e.key === "ArrowLeft"){
              if(diverRotation.x > -100){
                diverRotation.x -= 0.5;
                this.el.setAttribute("rotation",diverRotation);
              }
            }
            if(e.key === "ArrowUp"){
              if(diverRotation.z < 100){
                diverRotation.z += 0.5;
                this.el.setAttribute("rotation",diverRotation);
              }
              if(diverPosition.y < 7){
                diverPosition.y += 0.2;
                this.el.setAttribute("position",diverPosition);
              }
            }
            if(e.key === "ArrowDown"){
              if(diverRotation.z > -100){
                diverRotation.z -= 0.5;
                this.el.setAttribute("rotation",diverRotation);
              }
              if(diverPosition.y > -7){
                diverPosition.y -= 0.2;
                this.el.setAttribute("position",diverPosition);
              }
            }
          });
    }
});