document.getElementById('imagen').addEventListener('change', function() {
    const preview = document.getElementById('image-preview');
    const label = document.getElementById('file-label');
    const labelText = document.getElementById('file-label-text');
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
            labelText.style.display = 'none';
        }
        reader.readAsDataURL(file);
    } else {
        preview.style.display = 'none';
        labelText.style.display = 'block';
    }
    
});

function InfoDueño() {
    window.location.href = 'InfoMascotaDueño.html';
}

function HistorialMedico(){
    window.location.href = 'InfoMascotaHistorialMedico.html';
}

function QR() {
    window.location.href = 'InfoMascotaHmQr.html';
}

function goBack() {
    window.location.href = 'InfoMascota.html';
}