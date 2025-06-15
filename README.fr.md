# 📊 Générateur CODE39

> Générateur moderne de codes-barres CODE39 avec URLs partageables et interface élégante

[![Démo Live](https://img.shields.io/badge/🌐_Démo_Live-Visiter_le_Site-blue?style=for-the-badge)](https://hakan-karadag.github.io/code39-generator)
[![GitHub Stars](https://img.shields.io/github/stars/hakan-karadag/code39-generator?style=for-the-badge&logo=github)](https://github.com/hakan-karadag/code39-generator/stargazers)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue?style=for-the-badge)](LICENSE)

> 🇫🇷 **Version Française (Actuelle)** • 🇺🇸 **[English Version](README.md)**

## ✨ Fonctionnalités

- 🎯 **Codes-barres CODE39 professionnels** - Générez des codes-barres de haute qualité instantanément
- 🔗 **URLs partageables** - Partagez des codes-barres avec des paramètres ID et PATTERN personnalisés
- 📱 **Responsive mobile** - Expérience parfaite sur tous les appareils
- ⚡ **Ultra rapide** - Construit avec Vite pour des performances optimales
- 🎨 **Interface moderne** - Arrière-plan animé et design glassmorphisme
- 🛡️ **Protection screenshot** - Prévention basique des captures d'écran mobiles

## 🚀 Démarrage rapide

### 🌐 En ligne (Recommandé)
**[👉 Essayez maintenant - Aucune installation requise !](https://hakan-karadag.github.io/code39-generator)**

### 💻 Développement local

```bash
# Cloner le dépôt
git clone https://github.com/hakan-karadag/code39-generator.git
cd code39-generator

# Installer les dépendances
npm install

# Démarrer le serveur de développement avec hot reload
npm run dev
```

Ouvrez `http://localhost:5173/` dans votre navigateur.

## 🔗 Paramètres URL

L'application supporte les URLs partageables avec paramètres :

| Paramètre | Description | Exemple |
|-----------|-------------|---------|
| `ID` | Pré-remplit le champ ID | `/?ID=123` |
| `PATTERN` | Pré-remplit le champ pattern | `/?PATTERN=G<ID>87` |
| Combiné | Les deux paramètres | `/?ID=123&PATTERN=G<ID>87` |

## 🛠️ Stack technique

- **React 18** + **TypeScript** - React moderne avec sécurité des types
- **Vite** - Outil de build ultra-rapide avec HMR
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Icônes magnifiques
- **GitHub Actions** - Déploiement automatisé

## 📦 Build & Déploiement

```bash
# Build pour la production
npm run build

# Prévisualiser le build de production
npm run preview

# Déployer sur GitHub Pages
npm run deploy
```

## 🤝 Contribuer

Les contributions sont les bienvenues ! N'hésitez pas à soumettre une Pull Request.

## ⭐ Montrez votre soutien

Donnez une ⭐ si ce projet vous a aidé !

## 📄 Licence

Ce projet est sous licence [Apache License 2.0](LICENSE).

---

<div align="center">
  <strong>Fait avec ❤️ par <a href="https://github.com/hakan-karadag">Hakan Karadag</a></strong>
</div>
