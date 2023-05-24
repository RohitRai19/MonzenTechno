function menuToggle(){
    let menuToggle = document.querySelector('.menu');
    let navTag = document.querySelector('.Navigation');

        menuToggle.classList.toggle('active');
        navTag.classList.toggle('active')
       
}


function exploreMore(){
  let more= document.getElementById('About-more');
  let btn= document.getElementById('About-btn')
  if(more.style.display==='none'){
    more.style.display='block'
    btn.innerHTML="Explore-less"
    console.log('hua')
  }else{
    more.style.display='none'
    btn.innerHTML="Explore-More"
  }
}


document.querySelectorAll(".read-more").forEach(function(button) {
  button.addEventListener("click", function() {
    toggleContent(button);
  });
});

function toggleContent(button) {
    let parent = button.closest('.OurService-box');
   let content = parent.querySelector('.Energy-more');
    if (content.style.display === "none") {
      content.style.display = "block";
      button.innerHTML="read-less"
     console.log("if")
    } else {
      content.style.display = "none";
      console.log('Else')
     
    }
  }
  