function previewImage(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function() {
        var img = input.nextElementSibling;
        img.src = reader.result;
        img.style.display = 'block';
        input.previousElementSibling.style.display = 'none';
    }
    reader.readAsDataURL(event.target.files[0]);
}

function goBack() {
    window.location.href = 'InfoMascotaHistorialMedico.html';
}