# 🌟 **Emoedu: Detección de Emociones en Aulas**

Emoedu es una innovadora aplicación diseñada para detectar las emociones de los alumnos en el aula mediante la cámara del dispositivo. Su objetivo es ayudar a los profesores a identificar de manera oportuna emociones negativas, como "enfado", "tristeza" o "miedo", y permitir una intervención adecuada.

## 🚀 **Características**

- 🎥 **Detección en Tiempo Real**: Utiliza la cámara del dispositivo para analizar las emociones de los estudiantes en tiempo real, ofreciendo feedback inmediato.
- 😟 **Detección de Emociones Negativas**: Detecta emociones clave como "enfado", "tristeza" y "miedo" para que los profesores puedan intervenir cuando sea necesario.
- 📊 **Registro de Emociones**: Guarda un registro de las emociones detectadas en una base de datos SQLite, incluyendo el nombre del alumno y la hora del evento.

## 🛠️ **Tecnologías Utilizadas**

- **Python** con Flask para el backend.
- **JavaScript** para la detección de video y la comunicación con el backend.
- **HTML** y **CSS** para la interfaz del usuario.
- **SQLite** para almacenar los datos de las emociones detectadas.
- **FER (Facial Emotion Recognition)** para el análisis de las expresiones faciales.

## ⚙️ **Instalación**

1. **Clona el Repositorio**:
   ```sh
   git clone https://github.com/tuusuario/emoedu.git
   cd emoedu
   ```

2. **Instala las Dependencias de Python**:
   ```sh
   pip install -r requirements.txt
   ```

3. **Configura SQLite**: Asegúrate de tener SQLite instalado para gestionar la base de datos.

## 🚦 **Cómo Usar Emoedu**

1. **Ejecuta el Servidor Flask**:
   ```sh
   python Emoedu.py
   ```
   Esto abrirá automáticamente la aplicación en tu navegador en `http://localhost:5000/`.

2. **Permitir Acceso a la Cámara**: La aplicación te pedirá acceso a la cámara del dispositivo para realizar la detección de emociones.

3. **Visualización en Tiempo Real**: Las emociones detectadas se mostrarán sobre los rostros de los estudiantes, permitiendo una evaluación constante del estado emocional del aula.

## 🖼️ **Captura de Pantalla**

¡Aquí te mostramos cómo luce Emoedu en acción! 😄

![EJEMPLO EMOEDU](https://github.com/user-attachments/assets/ef635350-146d-4ae0-9aec-36243037485b)

## 📁 **Archivos Clave**

- `Emoedu.py`: Maneja la lógica del backend para la detección de emociones y el registro de datos.
- `main.html`: Página principal que incluye el video y la interfaz de detección de emociones.
- `fd.js`: Script en JavaScript encargado de manejar la cámara y el procesamiento de imágenes.
- `styles.css`: Estilos visuales que dan a la aplicación un diseño limpio y moderno.

## 🤝 **Contribuir**

Las contribuciones son bienvenidas 🚀. Si tienes una idea para mejorar Emoedu o deseas agregar nuevas características, ¡abre un issue o envía un pull request!

## Licencia 📜

Este proyecto está licenciado bajo la Licencia GPL 3.0. Consulta el archivo `LICENSE` para más detalles.


Emoedu es más que una herramienta; es un puente hacia el bienestar emocional de los estudiantes. 🌱 Ayudemos a crear entornos de aprendizaje más empáticos y positivos.

