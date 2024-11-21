


let selctedTube=null;
let tube=[["Red","Blue","Green"],["Green","Green","Blue"],["Red","Red","Blue"],[]];


function select(clickedBottle){
   

    if(selctedTube===null){
        selctedTube=clickedBottle;
        Highlighttube(clickedBottle+1);
    }else {
        if(selctedTube!==clickedBottle){
            pour(selctedTube,clickedBottle);
        }
        clearHighlight(selctedTube+1);
        selctedTube=null;
       
    }
        
  

}

function pour(selctedTube,goTube){
const fromTube=tube[selctedTube];

const totube=tube[goTube];

if(fromTube.length===0) return;

const colorToPour=fromTube[fromTube.length -1];
const toTopTubeColor=totube[totube.length -1];
if(totube.length<3 && (toTopTubeColor===undefined || colorToPour===toTopTubeColor)){
    
    fromTube.pop(); 
    totube.push(colorToPour);
    creat(selctedTube,goTube,colorToPour);
    
}

setTimeout(()=>{checkWin(),50});

}



function Highlighttube(tubeSelected){
    const bottle=document.getElementById(tubeSelected);
    bottle.style.backgroundColor='rgb(200, 200, 200)';
    bottle.style.border="2px solid #333";
}

function clearHighlight(tubeSelected){
    const bottle=document.getElementById(tubeSelected);
    bottle.style.backgroundColor='rgb(228, 237, 237)';
    bottle.style.border="none";
}
function checkWin(){
   if(((tube[0][0]===tube[0][1] &&tube[0][0]===tube[0][2])||tube[0].length===0)
    &&((tube[1][0]===tube[1][1] &&tube[1][0]===tube[1][2])||tube[1].length===0)
   &&((tube[2][0]===tube[2][1] &&tube[2][0]===tube[2][2])||tube[2].length===0)
   &&((tube[3][0]===tube[3][1] &&tube[3][0]===tube[3][2])||tube[3].length===0))
{
    alert("win");
    location.reload();
   
    tube=[["Red","Blue","Green"],["Green","Green","Blue"],["Red","Red","Blue"],[]];
}
      
}
 
 function creat(positionFrom,positionGoTO,color){
    const div=document.createElement("div");
  
    div.className=color;
    const fromBottle= document.getElementById(positionFrom+1);
    const goTOBottle= document.getElementById(positionGoTO+1);

    fromBottle.firstElementChild.remove();


    if(goTOBottle.firstElementChild===null){
        
        goTOBottle.appendChild(div);
        
    }else{
        goTOBottle.insertBefore(div,goTOBottle.firstElementChild);
        
    }

   

 }