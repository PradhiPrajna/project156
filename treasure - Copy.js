AFRAME.registerComponent("treasure-box", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `box${i}`;
  
        //position variables     
        var posX =(Math.random() * 3000 + (-1000));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createBox(id, position);
      }
    } ,
  
    createBox: function(id, position) { 
      
      var islandEl = document.querySelector("#island");
  
      var boxEl = document.createElement("a-entity");
  
      boxEl.setAttribute("id",id);
      boxEl.setAttribute("position",position);

      fishE1E1.setAttribute("gltf-model", "treasure.gltf");
      
      boxEl.setAttribute("material","color","#ff9100");
    
      islandEl.appendChild(boxEl);
    }
  });
  
  