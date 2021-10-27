function navigation(){
    let nav = document.querySelector('.nav-links');
    return nav.classList.toggle("show-on-mobile");
}

function video(){
    let videoSection = document.querySelector(".video");
    let videoTag = document.querySelector("video");
    console.dir(videoTag);
    if(videoTag.paused){
        videoTag.play();
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


let users = document.querySelectorAll(".user-details li");
let usersPlay = document.querySelectorAll("img.play");
for(let i = 0; i< users.length; i++){
    users[i].addEventListener("click",(e)=>{        
        let videoSection = document.querySelector(".playing");
        if(videoSection){
            videoSection.classList.replace("playing", "paused"); 
        }
        let videoSrc = document.querySelector("video");
        switch(i){
            case 0 : 
                videoSrc.setAttribute("src", "./images/infinity-war.mp4");
                usersPlay[i].classList.add("hide")
                break;
            case 1 : 
                videoSrc.setAttribute("src", "./images/music.mp4");
                break;
            case 2 : 
                videoSrc.setAttribute("src", "./images/fireworks.mp4");
                break;
            case 3 :
                videoSrc.setAttribute("src", "./images/spiderman.mp4");
                break;
        }
    })
}