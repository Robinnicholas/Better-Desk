function navigation(){
    let nav = document.querySelector('.nav-links');
    return nav.classList.toggle("show-on-mobile");
}

function video(){
    let videoSection = document.querySelector(".video");
    let videoTag = document.querySelector("video");
    if(videoTag.paused){
        videoTag.play()
        videoSection.classList.replace("paused", "playing"); 
    } else{
        videoTag.pause();
        videoSection.classList.replace("playing", "pausing"); 
        setTimeout(()=>{
            videoSection.classList.replace("pausing", "paused"); 
        },500)
    }
}

let tasks = document.querySelectorAll(".each-task");
for(let i = 0; i < tasks.length; i++){
    tasks[i].addEventListener("click", (e) => {
        if(e){
            tasks[i].classList.toggle("checked");
        }
    })
}