// This will set how much time to delay
const delayThis = 90;

// To identify when a link in the anchor tag is clicked
document.querySelectorAll('a[href^="#"]').forEach(anchor => { 
    anchor.addEventListener("click",function (e) {
        e.preventDefault();

        // This will allow the page to scroll smoothly
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
        // This will delay getting the href attribute from happening too fast so the code that allows the page to scroll can happen first. 
        setTimeout(function() {
            window.location.hash = anchor.getAttribute("href") 
          }, delayThis);
        
    });
});
