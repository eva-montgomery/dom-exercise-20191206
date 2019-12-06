const engineLinks = document.querySelector(".js-link-container");
const googleLink = document.querySelector(".js-google");
const bingLink = document.querySelector(".js-bing");
const duckLink = document.querySelector(".js-duck");


const addresses = [
    "https://google.com",
    "https://bing.com",
    "https://duckduckgo.com"
];


function linkWithPath(linkPath) {
    const a = document.createElement("a");
    a.href = linkPath;
    return a;
}


function displayOne(path) {
    console.log(path);
    const a = linkWithPath(path);
    console.log(a);
    appendLinkToButton(a);
}

function searchEngines(linkArray) {
    console.log(linkArray);
    for (let path of linkArray) {
        console.log(path);
        createLink(path);
    }
displayOne(addresses);

}

function appendLinkToButton(linkEL) {
    js-link-container.appendChild(linkEL);
}
appendLinkToButton(a);

engineLinks.addEventListener("click", searchEngines);


//function.append

// searchEngines.addEventListener();

// function showButton(aLink, linkPath) {
//     aLink.src = linkPath;
// }

// function showGoogle() {
//     console.log(engineLinks, addresses);
// }





