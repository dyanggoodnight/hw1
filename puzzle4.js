function oneStep(n,direction){
  var steps = 0;
  while (steps < n){
    direction();
    steps = steps +1;
  }
}
  
oneStep(4,down);
right();
var color = getColor();
down();
setColor(color);
oneStep(2,right);
up();
right();
var color = getColor();
down();
setColor(color);
oneStep(2,right);
