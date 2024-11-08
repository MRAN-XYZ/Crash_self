const crashbtn = document.getElementById('crashbtn');
const responsibilityCheckbox = document.getElementById('responsibilityCheckbox');

responsibilityCheckbox.addEventListener('change', () => {
    crashbtn.disabled = !responsibilityCheckbox.checked;
    crashbtn.style.backgroundColor = responsibilityCheckbox.checked ? "red" : "";
});

crashbtn.addEventListener('click', async function(event) {
    if (!responsibilityCheckbox.checked) {
        alert("Please check the responsibility box first.");
        console.log("check first")
        return;
    }

    alert("page will crash in 5s");
    await sleep(5000);

    let arr = [];
    while (true) {
        arr.push(new Array(1000000).join('a'));
        console.log("crashing!!……");
        spawnvid();
        spawnImg();
        await sleep(50);
    }
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function spawnvid() {
    const video = document.createElement('video');
    video.width = 7680;
    video.height = 4320;
    video.controls = true;
    video.autoplay = true;
    video.src = "15min.mp4";
    document.body.appendChild(video);
}

function spawnImg() {
    const img = document.createElement('img');
    img.src = 'big.jpg';
    img.height = 4320;
    document.body.appendChild(img);
}
