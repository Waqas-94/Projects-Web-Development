document.getElementById('input_image').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(event) {
        const imageSrc = event.target.result;
        document.getElementById('image').innerHTML = '<img src="' + imageSrc + '" style="max-width: 100%; max-height: 100%;">';
    };
    
    reader.readAsDataURL(file);
});
