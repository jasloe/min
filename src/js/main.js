// import "../sass/styles.scss";

// import MicroModal from "../../mode_modules/micromodal"
// MicroModal.init();

import barba from "../../node_modules/@barba/core"
import barbaCss from "../../node_modules/@barba/css"

barba.use(barbaCss);

// // ES* test
// if (true) {
//   let meowBus = 40;
//   console.log(meowBus); //40
// }

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

import "intersection-observer";
import scrollama from "scrollama";

// instantiate the scrollama
const scroller = scrollama();

// setup the instance, pass callback functions
scroller
  .setup({
    step: ".step"
  })
  .onStepEnter(response => {
    // { element, index, direction }
  })
  .onStepExit(response => {
    // { element, index, direction }
  });

// setup resize event
window.addEventListener("resize", scroller.resize);
