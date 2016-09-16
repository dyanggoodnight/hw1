function oneStep(n,direction){
  var steps = 0;
  while (steps < n){
    direction();
    steps = steps +1;
  }
}
while(getColor!="red"){
  oneStep(8,down);
  oneStep(2,right);
  oneStep(8,up);
  oneStep(2,right);
}
