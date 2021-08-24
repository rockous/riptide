const Play_btn = document.getElementById('play')
const Pause_btn = document.getElementById('pause')
const audio = document.getElementById('audio')
const Stop_btn = document.getElementById('stop')
const img = document.getElementById('img')

Play_btn.addEventListener('click',()=>{
	audio.play();
	img.style.animationPlayState = "running"
})
Stop_btn.addEventListener('click',()=>{
	audio.load();
	img.style.animationPlayState = "paused"
})
Pause_btn.addEventListener('click',()=>{
	audio.load();
	img.style.animationPlayState = "paused"
})