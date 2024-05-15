function applyColor(){
  let wallid=document.getElementById('wall_id').value;
  let wallColor=document.getElementById('wall_color').value;
  let wall = document.getElementById(wallid);
  wall.style['background-color'] = wallColor;

}

function resetWalls(){
  for(let i=1;i<=10;i++){
    let wall=document.getElementById(i);
    wall.style['background-color'] = 'transparent'
  }
}