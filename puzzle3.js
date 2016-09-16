function oneStep(n,direction){
  var steps = 0;
  while (steps < n){
    direction();
    steps = steps +1;
  }
}
  
oneStep(2,down);
var color = getColor();
oneStep(2,right);
oneStep(3,down);
setColor(color);
oneStep(2,right);
oneStep(1,up);
