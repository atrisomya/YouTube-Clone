function navbar() {
    return `<div id="navbar">
    <div id="text">
        <div><span><i class="fa-solid fa-bars"></i></span></div>
        <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="Error">
        <p><a href=index.html>YouTube</a></p>
    </div>
    <div id="search">
        <input type="text" id="search_term" placeholder="Search">
        <button id="searchVideos"> <span><i class="fa-solid fa-magnifying-glass"></i></span> </button>
        <span> <i class="fa-solid fa-microphone"></i> </span>
    </div>
    <div id="end">
        <div>
            <span> <i class="fa-solid fa-video"></i> </span>
        </div>
        <div><span> <i class="fa-regular fa-bell"></i> </span></div>
        <button id=loginn>Login</button>
    </div>
</div>`
}

export default navbar;