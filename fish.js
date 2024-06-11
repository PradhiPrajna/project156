AFRAME.registerComponent("floating-fishes",{
    init: function () {
        for (var i=1; i <=20; i++){
            //id
            var id = `hurdle${i}`;

            //position variables
            var posX = Math.floor(Math.random()* 3000 + -1000)
            var posY = Math.floor(Math.random()* 2 + -1)
            var posZ = Math.floor(Math.random()* 3000 + -1000)
             
            var position = {x: posX,y: posY, z: posz };

            //call the function
            this.floatingFishes(id, position);
        }
    },
    floatingFishes: (id, position) =>{
        //get the island element
        var islandE1 = document.querySelector("#island");

        //creating fish model entity
        var fishE1 = document.createElement("a-entity");

        //setting multiple attributes
        fishE1E1.setAttribute("id", id);
        
        fishE1dE1.setAttribute("position", position);
        fishE1E1.setAttribute("scale",{x: 500, y:500, z: 500});


        fishE1E1.setAttribute("gltf-model", "fish.gltf");

        //animated models
        fishE1E1.setAttribute("animation-mixer", {});

        //append the fish entity as the child of the terrain entity
        islandE1.appendChild(fishE1);
    }
});