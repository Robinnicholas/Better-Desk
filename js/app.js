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
        if(videoTag.paused){
            videoTag.play();
            videoSection.classList.replace("paused", "playing"); 
        } else{
            videoTag.pause();
            videoSection.classList.replace("playing", "paused"); 
        }
    })

    videoTag.addEventListener('ended', ()=>{
        videoSection.classList.replace("playing", "ready"); 
    })

    // change video
    let users = document.querySelectorAll(".user-details li");
    users.forEach(user =>{
        user.addEventListener("click",(e)=>{
            let videoPoster = user.getAttribute('data-poster');
            let videoSrc = user.getAttribute('data-src');
            videoTag.setAttribute("poster", videoPoster);
            videoTag.setAttribute("src", videoSrc);  
            videoSection.classList.replace("playing" , "ready");
            videoSection.classList.replace("paused" , "ready");
            user.classList.add("active")
            let allElements = [...users];
            let otherElements =  allElements.filter((eachElement) => {
                return eachElement !== user;
            })
            
            otherElements.map((eachElement)=>{
                return eachElement.classList.remove("active");
            })
        })
    })
}

function task(){
    let tasks = document.querySelectorAll(".each-task");
    let dots = document.querySelectorAll('.each-task i.dot');
    let lines = document.querySelectorAll('.each-task i.line');
    tasks.forEach((eachTask, i) => {
        eachTask.addEventListener("click", () => {
            eachTask.classList.toggle("checked");
        });
        let colors = ['orangered','orangeyellow','orangebrown','skyblue','limeyellow','brown','red'];
        let color = Math.floor(Math.random() * colors.length);
        dots[i].classList.add(colors[color]);
        lines[i].classList.add(colors[color]);
    });

}

window.addEventListener('load', () => {
    task();
    video();
})

