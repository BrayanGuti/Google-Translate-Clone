# 🌐 Google Translate Clone

Este proyecto es un clon del traductor de Google realizado con **Vite** y **TypeScript**, utilizando la API de **DeepL** para realizar las traducciones. 🚀

## ✨ Funcionalidades

- **Detección automática de idioma**: Detecta el idioma en el que estás escribiendo sin necesidad de especificarlo. 🕵️‍♂️
- **Selección de idioma de origen y destino**: Puedes elegir manualmente tanto el idioma de origen como el de destino para mayor precisión. 🌍
- **Intercambio de idiomas**: Como en Google Translate, puedes intercambiar el idioma de origen con el de destino. Cuando haces esto, el texto también se invierte, pero esta característica no está disponible si el idioma de origen está en "detectar idioma". 🔄
- **Copiar traducción**: El texto traducido puede ser fácilmente copiado al portapapeles. 📋
- **Escuchar traducción**: Puedes escuchar el texto traducido usando una IA de texto a voz diferente para cada idioma, la misma que usa Google Translate. 🔊
- **Idiomas disponibles**: Actualmente hay **29 idiomas** disponibles para la traducción. 🌐

## 🛠️ Instalación y Uso

Sigue los pasos a continuación para ejecutar el proyecto en tu máquina local:

1. Clona el repositorio:

   ```bash
   git clone <url_del_repositorio>

2. Navega al directorio del proyecto:

   ```bash
   cd google-translate-clone

3.  Instala las dependencias:

   ```bash
  npm install 

4. Ejecuta el proyecto:
   ```bash
  npm run dev

## 🔑 Configuración de la API
Este proyecto utiliza la API de DeepL para realizar las traducciones. Para que funcione correctamente, debes tener tu propia API key de DeepL.

1. Obtén tu API Key en el siguiente enlace: DeepL API Key

2. En el archivo .env (ubicado en la raíz del proyecto), añade tu API Key de la siguiente manera:

  ```bash
  VITE_DEEPL_API_KEY="YOUR_API_KEY"
