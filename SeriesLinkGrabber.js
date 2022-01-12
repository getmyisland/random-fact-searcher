const videoList = [];
const videoLinks = [];

function grabLinks() {
    for (var h4 of document.querySelectorAll("h4")) {
        if (h4.textContent.includes("Season7 :")) {
            console.log(h4.textContent + " " + h4);

            var links = h4.parentNode.querySelectorAll("div a"); //Search inside this element for links
            console.log(links);
            //Cycle trough every link you found
            for(var i = 0; i < links.length; i++) {
                console.log(links[i]);
                var openedWindow = window.open(links[i], '_blank').focus();
                videoList.push(openedWindow.document.querySelectorAll("div video")); //Add the video links in the newly opened video
                openedWindow.close();
            }

            if(videoList.length > 0) {
                grabVideoLinks();
            }
        }
    }
}

function grabVideoLinks(){
    //Get the src of ever <video> tag
    for(var i = 0; i< videoList.length; i++){
        videoLinks.push(videoList[i].src);
    }
    showLinks();
}

function showLinks(){
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

    for(var i = 0; i < videoLinks.length; i++){
        var p = document.createElement("p");
        p.innerHTML = videoLinks[i];
        innerModalDiv.appendChild(p);
    }

    outerModalDiv.appendChild(innerModalDiv);
    document.body.appendChild(outerModalDiv);
}

grabLinks();