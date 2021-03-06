/* Vh + Vw Calc */

const calc = () => {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', ${vh}px);

  let vw = window.innerWidth * 0.01;
  document.documentElement.style.setProperty('--vw', ${vw}px);
}

calc();

// window.setTimeout(() => {
//   calc()
// }, 1000);

// Resize
window.addEventListener('resize', () => {
  calc()
});

// Orientation change
window.addEventListener('orientationchange', () => {
  calc()
});
