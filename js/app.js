function navigation(){
    let nav = document.querySelector('.nav-links');
    return nav.classList.toggle("show-on-mobile");
}

function video(){
    let videoSection = document.querySelector(".video");
    let videoTag = document.querySelector("video");
    console.log(videoTag.played.length);    
    videoSection.classList.replace("ready", "playing"); 
        if(videoTag.paused){
            videoTag.play();
            videoSection.classList.replace("paused", "playing"); 
        } else{
            videoTag.pause();
            videoSection.classList.replace("playing", "paused"); 
        }
}

function task(){
    let tasks = document.querySelectorAll(".each-task");
    tasks.forEach((e) => {
        e.addEventListener("click", () => {
            e.classList.toggle("checked");
        });
    });
}

function changeVideo(){
    let users = document.querySelectorAll(".user-details li");
    for(let i = 0; i< users.length; i++){
        users[i].addEventListener("click",(e)=>{        
            users[i].classList.add("active")
            let allElements = [...users];
            let otherElements =  allElements.filter((eachElement) => {
                return eachElement !== users[i];
            })

            otherElements.map((eachElement)=>{
                return eachElement.classList.remove("active");
            })

            let videoSection = document.querySelector(".video");
            let videoSrc = document.querySelector("video");
            switch(i){
                case 0 : 
                    videoSrc.setAttribute("poster", "./images/video.jpg");
                    videoSrc.setAttribute("src", "./images/infinity-war.mp4");
                    videoSection.classList.replace("playing" , "ready");
                    videoSection.classList.replace("paused" , "ready");
                    break;
                case 1 : 
                    videoSrc.setAttribute("poster", "./images/bird.jpg");
                    videoSrc.setAttribute("src", "./images/music.mp4");
                    videoSection.classList.replace("playing" , "ready");
                    videoSection.classList.replace("paused" , "ready");
                    break;
                case 2 : 
                    videoSrc.setAttribute("poster", "./images/image-2.jpg");
                    videoSrc.setAttribute("src", "./images/fireworks.mp4");
                    videoSection.classList.replace("playing" , "ready");
                    videoSection.classList.replace("paused" , "ready");
                    break;
                case 3 :
                    videoSrc.setAttribute("poster", "./images/game.jpg");
                    videoSrc.setAttribute("src", "./images/spiderman.mp4");
                    videoSection.classList.replace("playing" , "ready");
                    videoSection.classList.replace("paused" , "ready");
                    break;
            }
        })
    }
}

window.addEventListener('load', () => {
    task();
    changeVideo();
})