crashbtn = document.getElementById('crashbtn');

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

crashbtn.addEventListener('touchstart', async function(event) {
   alert("403: page will crash");
   //await sleep(3000);

   let arr = [];
   while (true) {
      arr.push(new Array(1000000).join('a'));
      console.log("crashing!!……")
      spawnvid()
      spawnImg()
      await sleep(50);
   }
});