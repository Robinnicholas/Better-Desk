function navigation(){
    let nav = document.querySelector('.nav-links');
    return nav.classList.toggle("show-on-mobile");
}

function video(){
    let videoSection = document.querySelector(".video");
    let videoTag = document.querySelector("video");
    
    // play video
    videoTag.addEventListener('click', () => {
        videoSection.classList.replace("ready", "playing"); 
        videoTag.onended = function(){
            videoSection.classList.replace("playing", "ready"); 
        }
        if(videoTag.paused){
            videoTag.play();
            videoSection.classList.replace("paused", "playing"); 
        } else{
            videoTag.pause();
            videoSection.classList.replace("playing", "paused"); 
        }
    })

    // change video
    let users = document.querySelectorAll(".user-details li");
    users.forEach((eachUser, i) =>{
        eachUser.addEventListener("click",(e)=>{
            let videoPoster = eachUser.getAttribute('data-poster');
            let videoSrc = eachUser.getAttribute('data-src');
            videoTag.setAttribute("poster", videoPoster);
            videoTag.setAttribute("src", videoSrc);  
            videoSection.classList.replace("playing" , "ready");
            videoSection.classList.replace("paused" , "ready");
            eachUser.classList.add("active")
            let allElements = [...users];
            let otherElements =  allElements.filter((eachElement) => {
                return eachElement !== eachUser;
            })

            otherElements.map((eachElement)=>{
                return eachElement.classList.remove("active");
            })
        })
    })
}

function task(){
    let tasks = document.querySelectorAll(".each-task");
    tasks.forEach((e) => {
        e.addEventListener("click", () => {
            e.classList.toggle("checked");
        });
    });
}

window.addEventListener('load', () => {
    task();
    video();
})