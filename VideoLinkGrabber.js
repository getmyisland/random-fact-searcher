function grabVideoLinks(){
    var videos = document.querySelectorAll("div video")
    const videoLink = [""];
    for(var i = 0; i< videos.length; i++){
        videoLink.push(videos[i].src);
    }
    showLinks(videoLink);
}

function showLinks(videoLink){
    var outerModalDiv = document.createElement("div");
    var innerModalDiv = document.createElement("div");
    outerModalDiv.style.display = "block";
    outerModalDiv.style.position = "fixed";
    outerModalDiv.style.zIndex = "100";
    outerModalDiv.style.paddingTop = "100px";
    outerModalDiv.style.left = "0";
    outerModalDiv.style.top = "0";
    outerModalDiv.style.width = "100%";
    outerModalDiv.style.height = "100%";
    outerModalDiv.style.overflow = "auto";
    outerModalDiv.style.backgroundColor = "rgb(0,0,0,0)";
  
    innerModalDiv.style.backgroundColor = "#fefefe";
    innerModalDiv.style.margin = "auto";
    innerModalDiv.style.padding = "20px";
    innerModalDiv.style.border = "1px solid #888";
    innerModalDiv.style.width = "80%";
    innerModalDiv.style.color = "black";

    var instruction = document.createElement("p");
    instruction.innerHTML = "Below you can find the link to every video found on this site. Copy the link and open it in a new window or download it with the downloader of your choice.";
    innerModalDiv.appendChild(instruction);

    for(var i = 0; i < videoLink.length; i++){
        var p = document.createElement("p");
        p.innerHTML = videoLink[i];
        innerModalDiv.appendChild(p);
    }

    outerModalDiv.appendChild(innerModalDiv);
    document.body.appendChild(outerModalDiv);
}

grabVideoLinks();