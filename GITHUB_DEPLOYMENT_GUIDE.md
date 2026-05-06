# 🚀 Guía para Subir tu Portfolio a GitHub

Esta guía te ayudará a subir tu portfolio a GitHub y publicarlo con GitHub Pages.

## 📋 Requisitos Previos

1. **Cuenta de GitHub**: Si no tienes una, créala en [github.com](https://github.com)
2. **Git instalado**: Descarga desde [git-scm.com](https://git-scm.com)

## 🔧 Paso 1: Configurar Git (Primera vez)

Abre PowerShell o Git Bash y configura tu identidad:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"
```

## 📁 Paso 2: Crear Repositorio en GitHub

1. Ve a [github.com](https://github.com) e inicia sesión
2. Haz clic en el botón **"+"** en la esquina superior derecha
3. Selecciona **"New repository"**
4. Configura el repositorio:
   - **Repository name**: `portfolio` (o el nombre que prefieras)
   - **Description**: "Mi portfolio profesional de Ciberseguridad"
   - **Public**: Selecciona esta opción
   - **NO marques** "Initialize this repository with a README"
5. Haz clic en **"Create repository"**

## 💻 Paso 3: Subir tu Portfolio

### Opción A: Usando PowerShell (Windows)

Abre PowerShell en la carpeta de tu portfolio (`c:/Users/guill/Desktop/imagenes`) y ejecuta:

```powershell
# Inicializar repositorio Git
git init

# Añadir todos los archivos
git add .

# Hacer el primer commit
git commit -m "Initial commit: Portfolio profesional de Ciberseguridad"

# Añadir el repositorio remoto
git remote add origin https://github.com/gencinasr-tech/portfolio.git

# Cambiar a la rama main
git branch -M main

# Subir los archivos a GitHub
git push -u origin main
```

### Opción B: Usando Git Bash

```bash
# Inicializar repositorio Git
git init

# Añadir todos los archivos
git add .

# Hacer el primer commit
git commit -m "Initial commit: Portfolio profesional de Ciberseguridad"

# Añadir el repositorio remoto
git remote add origin https://github.com/gencinasr-tech/portfolio.git

# Cambiar a la rama main
git branch -M main

# Subir los archivos a GitHub
git push -u origin main
```

## 🌐 Paso 4: Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en **"Settings"** (Configuración)
3. En el menú lateral, haz clic en **"Pages"**
4. En **"Source"**, selecciona:
   - Branch: **main**
   - Folder: **/ (root)**
5. Haz clic en **"Save"**
6. Espera unos minutos y tu sitio estará disponible en:
   ```
   https://gencinasr-tech.github.io/portfolio/
   ```

## ✅ Paso 5: Verificar tu Portfolio

1. Espera 2-3 minutos para que GitHub Pages procese tu sitio
2. Visita la URL: `https://gencinasr-tech.github.io/portfolio/`
3. ¡Tu portfolio ya está en línea! 🎉

## 🔄 Actualizar tu Portfolio en el Futuro

Cuando hagas cambios en tu portfolio:

```bash
# Añadir los cambios
git add .

# Hacer commit con un mensaje descriptivo
git commit -m "Descripción de los cambios"

# Subir los cambios
git push
```

## 🎨 Personalizar la URL (Opcional)

Si quieres usar un dominio personalizado:

1. Compra un dominio (ejemplo: tuportfolio.com)
2. En GitHub Pages settings, añade tu dominio personalizado
3. Configura los DNS de tu dominio según las instrucciones de GitHub

## 📝 Comandos Git Útiles

```bash
# Ver el estado de tus archivos
git status

# Ver el historial de commits
git log

# Ver las diferencias antes de hacer commit
git diff

# Deshacer cambios en un archivo
git checkout -- nombre-archivo

# Ver los repositorios remotos configurados
git remote -v

# Actualizar desde GitHub (si trabajas desde varios dispositivos)
git pull
```

## 🔐 Autenticación en GitHub

Si GitHub te pide autenticación:

### Opción 1: Personal Access Token (Recomendado)

1. Ve a GitHub → Settings → Developer settings → Personal access tokens
2. Genera un nuevo token con permisos de "repo"
3. Usa el token como contraseña cuando Git te lo pida

### Opción 2: GitHub CLI

```bash
# Instalar GitHub CLI
winget install GitHub.cli

# Autenticarse
gh auth login
```

## 🐛 Solución de Problemas

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/gencinasr-tech/portfolio.git
```

### Error: "failed to push some refs"
```bash
git pull origin main --rebase
git push origin main
```

### Los cambios no se reflejan en GitHub Pages
- Espera 5-10 minutos
- Limpia la caché del navegador (Ctrl + Shift + R)
- Verifica que los archivos se subieron correctamente en GitHub

## 📱 Compartir tu Portfolio

Una vez publicado, puedes compartir tu portfolio:

- **LinkedIn**: Añade la URL en tu perfil
- **CV**: Incluye el enlace
- **Email**: Comparte con reclutadores
- **Redes sociales**: Promociona tu trabajo

## 🎯 Próximos Pasos

1. ✅ Actualiza tu LinkedIn con la URL del portfolio
2. ✅ Añade el enlace en tu CV
3. ✅ Comparte en redes profesionales
4. ✅ Mantén tu portfolio actualizado con nuevos proyectos y certificaciones

## 📞 Soporte

Si tienes problemas:
- Documentación oficial de GitHub Pages: [pages.github.com](https://pages.github.com)
- Documentación de Git: [git-scm.com/doc](https://git-scm.com/doc)
- GitHub Community: [github.community](https://github.community)

---

## 🎉 ¡Felicidades!

Tu portfolio profesional ya está en línea y accesible para todo el mundo. Ahora puedes:

- Compartirlo con reclutadores
- Incluirlo en aplicaciones de trabajo
- Mostrarlo en tu perfil de LinkedIn
- Usarlo como referencia profesional

**¡Mucha suerte en tu carrera en Ciberseguridad!** 🚀🔐

---

<div align="center">

**Creado por Guillermo Encinas Romera**

*Cybersecurity Enthusiast | Systems Administrator | Ethical Hacker*

</div>