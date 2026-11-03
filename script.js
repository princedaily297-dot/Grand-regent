function openModal(title, trailerId) {
    // Update the title
    document.getElementById('modal-title').innerText = title;
    
    // Update the YouTube iframe source with the video ID and autoplay
    document.getElementById('modal-video').src = `https://www.youtube.com/embed/${trailerId}?autoplay=1`;
    
    // Show the modal
    document.getElementById('trailerModal').style.display = 'flex';
}

function closeModal() {
    // Hide the modal
    document.getElementById('trailerModal').style.display = 'none';
    
    // Clear the iframe source to stop the video from playing in the background
    document.getElementById('modal-video').src = '';
}
