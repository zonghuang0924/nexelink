const cursor = document.createElement('div');
cursor.className = 'cursor';
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

//滑鼠//
function init() {

  canvas = document.getElementById( 'world');
    
  if (canvas && canvas.getContext) {
        context = canvas.getContext('2d');

        // Register event listeners
        window.addEventListener('mousemove', documentMouseMoveHandler, false);
        window.addEventListener('mousedown', documentMouseDownHandler, false);
        window.addEventListener('mouseup', documentMouseUpHandler, false);
        document.addEventListener('touchstart', documentTouchStartHandler, false); 
        document.addEventListener('touchmove', documentTouchMoveHandler, false);
        window. addEventListener('resize', windowResizeHandler, false);

        createParticles();

        windowResizeHandler();

        setInterval ( loop, 1000 / 60 );
  }
}