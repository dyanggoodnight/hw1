function oneStep(n,direction){
  var steps = 0;
  while (steps < n){
    direction();
    steps = steps +1;
  }
}
  
oneStep(2,right);

if(getColor()=="blue"){
  oneStep(1,down);
  oneStep(2,right);
}else{
  oneStep(1,up);
  oneStep(2,right);
}
if(getColor()=="blue"){
  oneStep(1,down);
  oneStep(2,right);
}else{
  oneStep(1,up);
  oneStep(2,right);
}
if(getColor()=="blue"){
  oneStep(1,down);
  oneStep(2,right);
}else{
  oneStep(1,up);
  oneStep(2,right);
}
right();
