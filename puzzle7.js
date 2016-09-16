function oneStep(n,direction){
  var steps = 0;
  while (steps < n){
    direction();
    steps = steps +1;
  }
}
while(getColor!="red"){
      down();
  if(getColor()=="red"){
    oneStep(2,right);
    oneStep(10,up);
    oneStep(2,right);
  }
}
