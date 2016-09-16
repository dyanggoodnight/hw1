function oneStep(n,direction){
  var steps = 0;
  while (steps < n){
    direction();
    steps = steps +1;
  }
}
  
oneStep(1,right);
if(getColor()=="blue"){
  oneStep(3,down);
}else{
  oneStep(3,up);
}
if(getColor()=="red"){
  oneStep(1,left);
  oneStep(1,down);
  oneStep(1,up);
}else{
  oneStep(1,right);
  oneStep(1,down);
  oneStep(1,up);
}
