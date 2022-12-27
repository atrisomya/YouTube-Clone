import navbar from "./navbar.js";
let nav = navbar();
document.getElementById('navbar').innerHTML=nav;
document.getElementById('search').style.visibility='hidden';
document.getElementById('navbar').innerHTML=nav;
let usern = JSON.parse(localStorage.getItem('username')) || 'Login';
document.getElementById('loginn').innerText=usern;
const showclickedvideo = () => {

    let data = JSON.parse(localStorage.getItem('clicked_video'));
    console.log(data.videoId);
    console.log(data.snippet);
    let title = document.createElement('h3');
    title.innerText=data.snippet.title;
    let ctitle = document.createElement('p');
    ctitle.innerText=data.snippet.channelTitle;
    let iframe = document.createElement('iframe');
    let des = document.createElement('p');
    des.innerText=`Description: ${data.snippet.description}`;
    iframe.src = `https://www.youtube.com/embed/${data.videoId}?autoplay=1&mute=1`;
    iframe.setAttribute('allowfullscreen', true);
    iframe.setAttribute('autoplay', true);

    let vid = document.getElementById('vid');
    vid.append(iframe, title, ctitle, des);
}
//document.getElementById('body').addEventListener('load', showclickedvideo);
window.addEventListener('load', () => {
    showclickedvideo();
})

let loginn = document.getElementById('loginn');
if(loginn.innerText == 'Login') {
    document.getElementById('loginn').addEventListener('click', () => {
        window.location.href='auth.html';
    })
}