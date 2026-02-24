# 🪚 Coberturas Carpintería

App web progresiva (PWA) para consultar coberturas de carpintería. Funciona como app nativa en **Android**, **iOS** y **PC** sin necesidad de tiendas de aplicaciones.

---

## 📁 Estructura del proyecto

```
carpinteria-pwa/
├── index.html          ← App principal (pantalla única, todo incluido)
├── manifest.json       ← Configuración PWA
├── sw.js               ← Service Worker (modo offline)
├── favicon.ico         ← Icono para navegadores
├── README.md           ← Este archivo
└── icons/
    ├── apple-touch-icon.png   (180×180) ← iOS
    ├── icon-16.png
    ├── icon-32.png
    ├── icon-48.png
    ├── icon-72.png
    ├── icon-96.png
    ├── icon-120.png
    ├── icon-128.png
    ├── icon-144.png           ← Windows
    ├── icon-152.png           ← iPad
    ├── icon-167.png           ← iPad Pro
    ├── icon-180.png           ← iPhone
    ├── icon-192.png           ← Android
    ├── icon-256.png
    ├── icon-384.png
    └── icon-512.png           ← Android / PWA splash
```

---

## 🚀 Publicar en GitHub Pages (paso a paso)

### 1. Crear el repositorio en GitHub

1. Ve a [github.com](https://github.com) e inicia sesión.
2. Pulsa **"New repository"** (botón verde).
3. Nombre sugerido: `coberturas-carpinteria`
4. Marca **Public** (necesario para GitHub Pages gratuito).
5. Pulsa **"Create repository"**.

### 2. Subir los archivos

#### Opción A — Subida directa (sin Git)
1. En el repositorio recién creado, pulsa **"uploading an existing file"**.
2. Arrastra **todos los archivos y la carpeta `icons/`** al área de subida.
3. Pulsa **"Commit changes"**.

#### Opción B — Con Git (terminal)
```bash
git clone https://github.com/TU_USUARIO/coberturas-carpinteria.git
cp -r carpinteria-pwa/* coberturas-carpinteria/
cd coberturas-carpinteria
git add .
git commit -m "🪚 Initial release - Coberturas Carpintería PWA"
git push origin main
```

### 3. Activar GitHub Pages

1. En el repositorio, ve a **Settings** → **Pages** (menú lateral izquierdo).
2. En **"Source"**, selecciona: **Deploy from a branch**.
3. En **"Branch"**, selecciona: **main** / **(root)**.
4. Pulsa **Save**.
5. En 1-2 minutos la app estará en:
   ```
   https://TU_USUARIO.github.io/coberturas-carpinteria/
   ```

---

## 📱 Instalar como app

### Android (Chrome)
1. Abre la URL en Chrome.
2. Pulsa el menú **⋮** (tres puntos).
3. Selecciona **"Añadir a pantalla de inicio"**.
4. Confirma → aparece el icono en tu escritorio.

### iOS (Safari)
1. Abre la URL en Safari (obligatorio, no Chrome).
2. Pulsa el botón de **compartir** □↑ (parte inferior).
3. Selecciona **"Añadir a pantalla de inicio"**.
4. Confirma → aparece el icono en tu escritorio.

### PC — Chrome / Edge
1. Abre la URL en Chrome o Edge.
2. En la barra de direcciones aparece el icono **⊕ "Instalar"**.
3. Pulsa **"Instalar"** → se abre como app nativa.

---

## ✅ Características

- **Offline total**: funciona sin conexión tras la primera carga (Service Worker).
- **Sin base de datos**: no recoge ningún dato del usuario.
- **Ligera**: un único archivo HTML, sin frameworks externos.
- **Responsive**: optimizada para móvil (max-width 480px), adaptada a tablet y PC.
- **Actualización automática**: al detectar nueva versión, el Service Worker reemplaza la caché.

---

## 🔄 Actualizar el contenido

1. Edita `index.html` con los cambios necesarios.
2. En `sw.js`, actualiza el nombre de caché para forzar refresco en todos los dispositivos:
   ```js
   const CACHE_NAME = 'carpinteria-v2';  // ← incrementa el número
   ```
3. Sube los archivos modificados a GitHub → GitHub Pages se actualiza automáticamente.

---

## ⚠️ Aviso legal

Herramienta de consulta con fines informativos, de uso exclusivo para reparadores colaboradores. No recoge datos ni interactúa con sistemas corporativos. No sustituye los canales o herramientas oficiales.
