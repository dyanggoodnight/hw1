function oneStep(n,direction){
  var steps = 0;
  while (steps < n){
    direction();
    steps = steps +1;
  }
}
  
oneStep(7,down);
oneStep(5,right);
oneStep(2,up);
oneStep(2,right);
