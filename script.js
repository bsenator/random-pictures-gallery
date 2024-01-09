document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.getElementById('galleryContainer');
  
    const imageWidth = 300;
    const imageHeight = 300;
  
    for (let row = 0; row < 5; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('gallery-row');
  
        for (let col = 0; col < 3; col++) {
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');
  
            const img = document.createElement('img');
            img.src = `https://source.unsplash.com/random/${imageWidth}x${imageHeight}?${row}-${col}`;
            img.alt = `Random Image ${row * 3 + col + 1}`;
  
            galleryItem.appendChild(img);
  
            rowDiv.appendChild(galleryItem);
        }
  
        galleryContainer.appendChild(rowDiv);
    }
});
