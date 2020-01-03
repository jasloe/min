import barba from "../../node_modules/@barba/core"
import barbaCss from "../../node_modules/@barba/css"
import MicroModal from "../../mode_modules/micromodal"


barba.use(barbaCss);

MicroModal.init();

// ES* test
if (true) {
  let meowBus = 40;
  console.log(meowBus); //40
}

barba.init({
  transitions: [{
    name: 'dummy-transition',
    from: 'home',

    to: {
      namespace: [
        'exhibitions'
      ]
    },
    sync: true,
    enter() {

    }
  }]
});
