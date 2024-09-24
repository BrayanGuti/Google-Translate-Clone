# 🌐 Google Translate Clone

This project is a clone of Google Translate built with **Vite** and **TypeScript**, using the **DeepL** API for translations. 🚀

## ✨ Features

- **Automatic Language Detection**: Automatically detects the language you're typing in without needing to specify it. 🕵️‍♂️
- **Source and Target Language Selection**: You can manually select both the source and target languages for greater precision. 🌍
- **Language Swap**: Like Google Translate, you can swap the source and target languages. When you do this, the text is also swapped, but this feature is not available if the source language is set to "detect language." 🔄
- **Copy Translation**: The translated text can easily be copied to your clipboard. 📋
- **Listen to Translation**: You can listen to the translated text using a text-to-speech AI, with a different voice for each language, just like Google Translate. 🔊
- **Available Languages**: Currently, there are **29 languages** available for translation. 🌐

## 🛠️ Installation and Usage

Follow the steps below to run the project on your local machine:

1. Clone the repository:

   ```bash
   git clone https://github.com/BrayanGuti/Google-Translate-Clone

2. Navigate to the project directory:

   ```bash
   cd Google-Translate-Clone

2. Install the dependencies:

   ```bash
   npm install
   
4. Run the project:
   ```bash
   npm run dev

## 🔑 API Configuration
This project uses the DeepL API to handle translations. To make it work properly, you need your own DeepL API key.

1. Get your API Key from the following link: [DeepL API Key](https://www.deepl.com/en/your-account/subscription)

2. In the .env file (located at the root of the project), add your API Key as follows:
   ```bash
   VITE_DEEPL_API_KEY="YOUR_API_KEY"

Make sure to replace YOUR_API_KEY with the key you got from DeepL

## 📂  Project Structure
The main structure of the project is as follows:
   ```bash
   google-translate-clone/
│
├── node_modules/
├── public/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── services/
│   ├── App.css
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── constants.ts
│   ├── index.css
│   ├── main.tsx
│   ├── types.d.ts
│   ├── vite-env.d.ts
│
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

