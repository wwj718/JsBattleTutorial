importScripts('lib/tank.js');

tank.init(function(settings, info) {

})
tank.loop(function(state, control) {
  control.THROTTLE = 0.5;
  control.TURN = 1;
});
