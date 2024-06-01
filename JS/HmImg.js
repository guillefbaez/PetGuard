function loadFile(event) {
    var image = document.getElementById('uploadedImage');
    var addImageText = document.getElementById('addImageText');
    
    image.src = URL.createObjectURL(event.target.files[0]);
    image.style.display = 'block';
    addImageText.style.display = 'none';
}

function goBack() {
    window.location.href = 'InfoMascotaHistorialMedico.html';
}