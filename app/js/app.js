// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {
   const menu = new MmenuLight(
		document.querySelector( "#menu" ),
		"(max-width: 850px)"
  	);

   const navigator = menu.navigation();
   const drawer = menu.offcanvas();

   document.querySelector('a[href="#menu"]').addEventListener('click', (evnt) => {
      evnt.preventDefault();
      drawer.open();
   });
});
