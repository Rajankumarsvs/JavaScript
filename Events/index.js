// AttachEvent()
// JQuery - on

// Type, timestamp, defaultPrevented
// toElement, target, srcElement, currentTraget
// clientx, clienry, screenX, screenY
// altkey, ctrlkey, shiftkey, keycode


document.getElementById('image1').addEventListener('click', function(e) {
    console.log("image1 clicked");
})
document.getElementById('images').addEventListener('click', function(e) {
    console.log("clicked inside the ul");
})

// document.getElementById('images').addEventListener
// ('click', function(e) {
//     console.log(e.target.parentNode);
//     let removeIt = e.target.parentNode; // parent is remove all parent
//     removeIt.remove()  // you can Remove anything by your web page
// })

// so you can use if condition

document.getElementById('images').addEventListener
('click', function(e) {
    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        let removeIt = e.target.parentNode; 
        removeIt.remove()  
    }
  
})