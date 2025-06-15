# 📊 CODE39 Generator

> Modern CODE39 barcode generator with shareable URLs and sleek interface

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-blue?style=for-the-badge)](https://hakan-karadag.github.io/code39-generator)
[![GitHub Stars](https://img.shields.io/github/stars/hakan-karadag/code39-generator?style=for-the-badge&logo=github)](https://github.com/hakan-karadag/code39-generator/stargazers)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue?style=for-the-badge)](LICENSE)

> 🇺🇸 **English Version (Current)** • 🇫🇷 **[Version Française](README.fr.md)**

## ✨ Features

- 🎯 **Professional CODE39 barcodes** - Generate high-quality barcodes instantly
- 🔗 **Shareable URLs** - Share barcodes with custom ID and PATTERN parameters
- 📱 **Mobile responsive** - Perfect experience on all devices
- ⚡ **Lightning fast** - Built with Vite for optimal performance
- 🎨 **Modern UI** - Beautiful animated background and glassmorphism design
- 🛡️ **Screenshot protection** - Basic mobile screenshot prevention

## 🚀 Quick Start

### 🌐 Online (Recommended)
**[👉 Try it now - No installation required!](https://hakan-karadag.github.io/code39-generator)**

### 💻 Local Development

```bash
# Clone the repository
git clone https://github.com/hakan-karadag/code39-generator.git
cd code39-generator

# Install dependencies
npm install

# Start development server with hot reload
npm run dev
```

Open `http://localhost:5173/` in your browser.

## 🔗 URL Parameters

The application supports shareable URLs with parameters:

| Parameter | Description | Example |
|-----------|-------------|---------|
| `ID` | Pre-fill the ID field | `/?ID=123` |
| `PATTERN` | Pre-fill the pattern field | `/?PATTERN=G<ID>87` |
| Combined | Both parameters | `/?ID=123&PATTERN=G<ID>87` |

## 🛠️ Tech Stack

- **React 18** + **TypeScript** - Modern React with type safety
- **Vite** - Ultra-fast build tool with HMR
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **GitHub Actions** - Automated deployment

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## ⭐ Show your support

Give a ⭐ if this project helped you!

## 📄 License

This project is [Apache License 2.0](LICENSE) licensed.

---

<div align="center">
  <strong>Made with ❤️ by <a href="https://github.com/hakan-karadag">Hakan Karadag</a></strong>
</div>