// Initialize the YouTube player
let player;

// Array of specific video IDs to only play those videos
const videoIds = [
    "IExBivh96AE",
    "1ii-UaisDJ8",
    "w3A9r4v6Ui0",
    "9VbT3EErWxU",
    "trvhnFM1SQY",
    "JePw3GnwJi4",
    "aPuwAzH8iJI",
    "-5Yeph6BS0M",
    "Qe_0x5Jj5z8",
    "1b13TKYbVZc"
];

// This function is automatically called when the YouTube iframe API is ready
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '450',
        width: '800',
        videoId: videoIds[0], // Start with the first video
        playerVars: {
            'autoplay': 1, // Automatically play the first video
            'loop': 1, // Loop the playlist
            'rel': 0, // Don't show related videos at the end
            'showinfo': 0, // Hide video info
            'controls': 1, // Show player controls
            'modestbranding': 1 // Avoid YouTube branding
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// This function will be called when the player is ready to use
function onPlayerReady(event) {
    event.target.playVideo(); // Play the video when ready
}

// This function listens for changes in the player's state
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        console.log("Video is playing...");
    }
}

// Handle video thumbnail click to load the specific video
const videos = document.querySelectorAll('.video');
videos.forEach(video => {
    video.addEventListener('click', () => {
        const videoId = video.getAttribute('data-video-id');
        player.loadVideoById(videoId); // Load the video by ID when clicked
    });
});
