# Emoedu: Detección de Emociones en Aulas

Emoedu es una aplicación para detectar las emociones de los alumnos en un aula utilizando la cámara de un dispositivo. El objetivo es identificar emociones negativas como "enfado", "tristeza" o "miedo" y notificar al profesor para poder intervenir de manera oportuna.

## Características

- **Detección en tiempo real**: Utiliza la cámara del dispositivo para detectar las emociones de los alumnos en tiempo real.
- **Detección de emociones específicas**: Se enfoca en detectar emociones negativas como "enfado", "tristeza" y "miedo".
- **Registro de emociones**: Las emociones detectadas se registran en una base de datos SQLite con el nombre del alumno y la hora del evento.

## Tecnologías Utilizadas

- **Python** con Flask para el backend.
- **JavaScript** para la detección de video y comunicación con el backend.
- **HTML** y **CSS** para la interfaz del usuario.
- **SQLite** para almacenar las emociones detectadas.
- **FER (Facial Emotion Recognition)** para la detección de emociones faciales.

## Instalación

1. Clona este repositorio:
   ```sh
   git clone https://github.com/tuusuario/emoedu.git
   cd emoedu
   ```

2. Instala las dependencias de Python:
   ```sh
   pip install -r requirements.txt
   ```

3. Asegúrate de tener instalado SQLite para la base de datos.

## Uso

1. **Ejecuta el servidor Flask**:
   ```sh
   python Emoedu.py
   ```

   Esto abrirá el navegador automáticamente en `http://localhost:5000/`.

2. **Permitir acceso a la cámara**: La aplicación solicitará acceso a la cámara para poder realizar la detección de emociones.

3. **Visualización de emociones**: Se mostrarán los recuadros sobre las caras detectadas con la emoción de cada alumno.

## Archivos Importantes

- `Emoedu.py`: Backend que maneja la detección de emociones y el registro en la base de datos.
- `main.html`: Página principal que contiene el video y la detección de emociones.
- `fd.js`: Script JavaScript para manejar la cámara y el procesamiento de imágenes.
- `styles.css`: Estilos de la página para darle una apariencia moderna y clara.

## Contribuir

Las contribuciones son bienvenidas. Puedes abrir un issue o enviar un pull request para mejoras o nuevas características.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## Contacto

Para cualquier duda o sugerencia, no dudes en contactarme a través de mi perfil de GitHub o enviando un correo a `miguelperezregueiro@gmail.com`.

