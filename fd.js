document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('video');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const videoContainer = document.getElementById('video-container');
    const emotionText = document.createElement('div');
    emotionText.id = 'emotion-text';
    videoContainer.appendChild(canvas);
    videoContainer.appendChild(emotionText);

    // Estilo para el texto de emoción
    emotionText.style.position = 'absolute';
    emotionText.style.top = '10px';
    emotionText.style.left = '10px';
    emotionText.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    emotionText.style.color = 'white';
    emotionText.style.padding = '5px';
    emotionText.style.borderRadius = '5px';
    emotionText.style.zIndex = '10'; // Asegura que el texto esté siempre visible

    // Solicitamos acceso a la cámara del usuario
    navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
            videoElement.srcObject = stream;
            videoElement.addEventListener('loadedmetadata', () => {
                canvas.width = videoElement.videoWidth;
                canvas.height = videoElement.videoHeight;
                canvas.style.position = 'absolute';
                canvas.style.top = '0';
                canvas.style.left = '0';
                canvas.style.zIndex = '5'; // Asegura que el canvas esté visible

                setInterval(() => {
                    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

                    // Convertimos el frame a una imagen en base64
                    const frameData = canvas.toDataURL('image/jpeg');

                    // Enviamos la imagen al backend
                    fetch('http://localhost:5000/Emoedu/detect', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ image: frameData })
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.emotion) {
                            emotionText.textContent = `Emoción detectada: ${data.emotion}`;
                        } else {
                            emotionText.textContent = '';
                        }
                    })
                    .catch(error => {
                        console.error('Error al enviar el frame al backend:', error);
                    });
                }, 1000); // Enviar un frame cada 1 segundo
            });
        })
        .catch((error) => {
            console.error("Error al acceder a la cámara: ", error);
        });
});
