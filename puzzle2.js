function oneStep(n,direction){
  var steps = 0;
  while (steps < n){
    direction();
    steps = steps +1;
  }
}
  
oneStep(6,down);
oneStep(3,right);
oneStep(2,up);
oneStep(2,right);
oneStep(3,down);
