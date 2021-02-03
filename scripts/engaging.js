/* document.onreadystatechange = function(){
    if(document.readyState === 'complete'){
        
        var windowHeight = window.innerHeight;
        var screenHeight = screen.height;
        var documentHeight = document.body.clientHeight;


        console.log("Window size height: " + windowHeight + "px");
        console.log("Inner Height: " + window.innerHeight + "px");
        console.log("Screen Height: " + screenHeight + "px");
        console.log("Document Height: " + documentHeight + "px");
        
        var parentEl = document.getElementById('viewport-contatos');
        var childEl = document.getElementById('fundinho-contatos');

        var parentRect = parentEl.getBoundingClientRect();
        var childRect = childEl.getBoundingClientRect();

        console.log('Parent Y coordinates: ' + 'Top: ' + parentRect.top, '  Bottom: ' + parentRect.bottom);
        console.log('Child Y coordinates: ' + 'Top: ' + childRect.top, '  Bottom: ' + childRect.bottom);
        console.log ('EngagingJS loaded.');


        window.addEventListener('scroll', function(){
            var childY = childRect.bottom;
            var parentY = parentRect.bottom;
            var scrollY = window.scrollY;
            var childHeight = childEl.style.height;
            var positionY = (scrollY) - parentY;
            childEl.style.bottom = scrollY - (parentY * 0.5) + 'px';
            console.log()
    }
        )}
} */
/* Working. */

