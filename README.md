# 🧶 CrochetPlatform - Guía para principiantes

Este proyecto fue desarrollado con [Angular CLI](https://angular.dev/tools/cli) versión `19.2.14`.  
Sigue estos pasos para instalarlo y ejecutarlo en tu computadora de forma sencilla. 👇

---

## 🔹 1. Requisitos previos

Antes de comenzar, asegúrate de tener instaladas estas herramientas:

- [Node.js](https://nodejs.org/) (incluye npm)
- [Git](https://git-scm.com/)
- [Angular CLI](https://angular.dev/tools/cli)
- [Visual Studio Code](https://code.visualstudio.com/) (opcional, pero recomendado)

### ✅ Verifica si ya están instalados

1. Abre la terminal:

   - **Windows**: `Win + R`, escribe `cmd`, presiona Enter.
   - **Mac**: Abre la app Terminal.
   - **Linux**: Busca Terminal en el menú de aplicaciones.

2. Escribe estos comandos uno por uno:

   ```
   node -v       # Verifica Node.js
   npm -v        # Verifica npm
   git --version # Verifica Git
   ng version    # Verifica Angular CLI
   ```

3. Si alguno de los comandos da error o no se reconoce, instálalo:

   - Instala Angular CLI si es necesario:
     ```
     npm install -g @angular/cli
     ```

----------------------------------------------------------------------------------------------------------------------------------------

## 🔸 2. Clonar el repositorio

1. Abre **Visual Studio Code**.
2. Abre la terminal con `Ctrl + J` o desde el menú `Terminal > Nueva Terminal`.
3. Ejecuta este comando para clonar el proyecto:

   ```
   git clone https://github.com/Geovanny251201/crochetPlatform.git
   ```

----------------------------------------------------------------------------------------------------------------------------------------

4. Una vez clonado, abre Visual Studio Code y ve al menú `Archivo > Abrir carpeta...` y selecciona la carpeta **crochetPlatform** que se descargó.
5. Una vez abierta la carpeta del proyecto en Visual Studio Code, abre una terminal integrada (`Ctrl + J`) y asegúrate de estar ubicado en la carpeta del proyecto:

   ```
   cd crochetPlatform
   ```

----------------------------------------------------------------------------------------------------------------------------------------

## 🔸 3. Instalar las dependencias

Con la terminal abierta dentro de la carpeta del proyecto, ejecuta:

```
npm install
```

Esto instalará todas las dependencias necesarias del proyecto.

----------------------------------------------------------------------------------------------------------------------------------------

## 🔸 4. Ejecutar el servidor de desarrollo

1. Asegúrate de seguir en la carpeta `crochetPlatform`.
2. Ejecuta:

   ```
   ng serve
   ```

3. Espera a que aparezca el mensaje:

   ```
   ✔ Compiled successfully.
   ```

4. Abre tu navegador y visita:  
   👉 [http://localhost:4200](http://localhost:4200)

----------------------------------------------------------------------------------------------------------------------------------------

✅ ¡Listo! Ahora puedes ver y modificar el proyecto localmente.
