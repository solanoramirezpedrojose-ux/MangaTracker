# MangaTracker
Aplicación para la gestión de una biblioteca personal de mangas, desarrollada utilizando Framework7 Core, HTML, CSS, JavaScript, Vite y Capacitor.

## 1. Descripción del proyecto
MangaTracker es una aplicación que permite administrar una colección personal de mangas, registrar información sobre las lecturas y llevar un control del progreso de cada una.
El proyecto fue desarrollado para el curso IF-0009 Desarrollo de Software IV de la Universidad de Costa Rica, Sede del Pacífico, con el objetivo de investigar y poner en práctica el funcionamiento de Framework7 en el desarrollo de aplicaciones móviles.
La aplicación permite registrar, consultar, editar y eliminar mangas mediante una interfaz adaptable a diferentes tamaños de pantalla. Además, utiliza almacenamiento local para conservar la información y Capacitor para ejecutar el proyecto en dispositivos Android.

## 2. Tecnologías utilizadas
- Framework7 Core
- HTML5
- CSS3
- JavaScript
- Node.js
- npm
- Vite
- Capacitor
- Android Studio
- Android SDK
- Git y GitHub
- Visual Studio Code

## 3. Funcionalidades del sistema
**Registro de mangas:** Permite agregar un manga indicando su título, autor, género, sinopsis, capítulo actual y estado de lectura.
**Portadas:** Permite seleccionar una imagen desde el dispositivo y utilizarla como portada del manga.
**Biblioteca de mangas:** Muestra los registros mediante tarjetas con información de cada lectura.
**Consulta de detalles:** Permite visualizar la información completa de un manga registrado.
**Edición de mangas:** Permite modificar los datos de un registro existente.
**Actualización de capítulos:** Permite cambiar el capítulo actual para llevar un seguimiento del progreso de lectura.
**Cambio de estado:** Permite administrar el estado de los mangas, utilizando las opciones Pendiente, Leyendo y Completado.
**Eliminación de mangas:** Permite borrar registros mediante un mensaje de confirmación.
**Estadísticas:** Muestra información sobre la cantidad de mangas registrados y sus estados de lectura.
**Almacenamiento local:** Conserva los datos registrados mediante localStorage.

## 4. Estructura del proyecto
La carpeta principal de la aplicación contiene los archivos de configuración, las dependencias y el código fuente.
```text
MangaTracker/
│
├── app/
│   ├── src/
│   │   ├── index.html
│   │   ├── pages/
│   │   │   ├── home.f7
│   │   │   └── add-manga.f7
│   │   ├── js/
│   │   │   ├── app.js
│   │   │   ├── routes.js
│   │   │   └── manga-storage.js
│   │   └── css/
│   │       └── app.css
│   │
│   ├── android/
│   ├── package.json
│   └── capacitor.config.json
│
└── README.md
```

### Descripción de los archivos principales
**home.f7:** Contiene la pantalla principal de MangaTracker, donde se muestra la biblioteca, las estadísticas y las opciones para administrar los registros.
**add-manga.f7:** Contiene el formulario utilizado para registrar mangas, incluyendo campos, validaciones y selección de portadas.
**app.js:** Contiene la configuración e inicialización principal de Framework7.
**routes.js:** Define las rutas utilizadas para navegar entre las pantallas de la aplicación.
**manga-storage.js:** Contiene las funciones relacionadas con el almacenamiento y la administración de los mangas.
**app.css:** Contiene los estilos generales de la aplicación.
**package.json:** Define las dependencias y los comandos necesarios para ejecutar el proyecto.
**android:** Contiene el proyecto utilizado por Capacitor y Android Studio para compilar la aplicación móvil.

## 5. Requisitos previos
Para ejecutar MangaTracker se necesita contar con:
- Node.js instalado.
- npm disponible.
- Visual Studio Code o cualquier editor de código.
- Acceso a una terminal.
- Un navegador web actualizado.

Para ejecutar la aplicación en Android también se necesita:
- Android Studio instalado.
- Android SDK configurado.
- Un emulador Android o un dispositivo físico.

## 6. Instalación y configuración

### 6.1. Obtener el proyecto
Clonar el repositorio desde GitHub o descargarlo como archivo ZIP.
Abrir la carpeta principal de MangaTracker en Visual Studio Code.

### 6.2. Verificar Node.js y npm
Desde la terminal ejecutar:
```powershell
node -v
npm -v
```
Estos comandos permiten comprobar que Node.js y npm están instalados correctamente.

### 6.3. Acceder a la carpeta de la aplicación
Desde la carpeta principal del repositorio ejecutar:
```powershell
cd app
```

### 6.4. Instalar las dependencias
Ejecutar:
```powershell
npm install
```
Este comando instala las dependencias definidas en el archivo package.json, incluyendo Framework7 y las herramientas utilizadas por el proyecto.
No es necesario crear nuevamente el proyecto de Framework7, porque MangaTracker ya contiene su configuración inicial.

### 6.5. Ejecutar la aplicación
Ejecutar:

```powershell
npm start
```

La aplicación estará disponible normalmente en:

http://localhost:5173/

Abrir esa dirección en un navegador para visualizar MangaTracker.

Para detener el servidor, presionar Ctrl + C en la terminal.

## 7. Ejecución de MangaTracker en Android

El proyecto utiliza Capacitor para integrar la aplicación web con Android.

### 7.1. Compilar la aplicación

Desde la carpeta app ejecutar:

```powershell
npm run build
```

Este comando genera los archivos compilados de la aplicación.

### 7.2. Sincronizar con Android

Ejecutar:

```powershell
npx cap sync android
```

Este comando sincroniza los archivos de la aplicación web y los complementos correspondientes con el proyecto Android.

### 7.3. Abrir Android Studio

Ejecutar:

```powershell
npx cap open android
```

Se abrirá el proyecto Android de MangaTracker.

Esperar a que Android Studio termine la sincronización de Gradle.

### 7.4. Ejecutar la aplicación

1. Abrir Android Studio.
2. Seleccionar un emulador Android o conectar un dispositivo físico.
3. Verificar que la configuración seleccionada sea app.
4. Presionar Run.
5. Comprobar que MangaTracker se inicia correctamente.

## 8. Generación del archivo APK

MangaTracker puede compilarse como una aplicación Android para instalarse en un dispositivo físico.

Para generar el APK:

1. Abrir el proyecto en Android Studio.
2. Ingresar al menú Build.
3. Seleccionar Generate App Bundles or APKs.
4. Seleccionar Generate APKs.
5. Esperar a que finalice el proceso de compilación.

El archivo generado normalmente se encuentra en:

```text
app/android/app/build/outputs/apk/debug/app-debug.apk
```

El archivo app-debug.apk puede transferirse a un teléfono Android e instalarse habilitando el permiso correspondiente para instalar aplicaciones desde esa fuente.

## 9. Funcionamiento técnico

MangaTracker utiliza Framework7 Core para administrar las pantallas, la navegación y diferentes elementos de interacción.

El sistema de rutas permite desplazarse entre la pantalla principal y el formulario de registro. Las funciones de JavaScript procesan los eventos del usuario y ejecutan las operaciones necesarias para administrar los mangas.

Los datos se almacenan localmente mediante localStorage. Para guardar la información se utilizan estructuras de JavaScript que se convierten al formato JSON.

Cuando se abre la biblioteca, los registros almacenados se recuperan y se presentan mediante tarjetas.

La aplicación también utiliza componentes de diálogo de Framework7 para mostrar alertas, solicitar información y confirmar determinadas operaciones.

## 10. Validaciones del sistema

Durante el registro de mangas se realizan comprobaciones para evitar información incorrecta.

Entre las validaciones implementadas se encuentran:

- Verificar que los campos obligatorios estén completos.
- Comprobar que el capítulo actual tenga un valor válido.
- Validar la información antes de guardar el registro.
- Mostrar mensajes cuando los datos ingresados no cumplen las condiciones establecidas.
- Solicitar confirmación antes de eliminar determinados registros.

Estas validaciones permiten controlar la información introducida y mejorar la interacción del usuario con la aplicación.

## 11. Pruebas de funcionamiento

Para comprobar las funcionalidades de MangaTracker se pueden realizar las siguientes pruebas:

**Prueba 1. Abrir la aplicación**

Iniciar MangaTracker y verificar que se muestre la pantalla principal con la biblioteca de mangas.

**Prueba 2. Registrar un manga**

Ingresar al formulario, completar los campos obligatorios y guardar el registro.

Resultado esperado: el manga aparece en la biblioteca.

**Prueba 3. Validar campos obligatorios**

Intentar guardar un manga sin completar la información requerida.

Resultado esperado: se muestra un mensaje indicando que debe corregirse la información.

**Prueba 4. Agregar una portada**

Seleccionar una imagen desde el dispositivo y registrar el manga.

Resultado esperado: la portada aparece asociada al registro.

**Prueba 5. Consultar detalles**

Seleccionar la opción para consultar los detalles de un manga.

Resultado esperado: se muestra la información completa del registro.

**Prueba 6. Editar un manga**

Modificar la información de un manga existente.

Resultado esperado: los cambios se reflejan en la biblioteca.

**Prueba 7. Actualizar un capítulo**

Cambiar el capítulo actual de un manga registrado.

Resultado esperado: se actualiza el progreso de lectura.

**Prueba 8. Cambiar el estado**

Modificar el estado de lectura de un manga.

Resultado esperado: el registro muestra el nuevo estado.

**Prueba 9. Eliminar un manga**

Seleccionar la opción de eliminación y confirmar la acción.

Resultado esperado: el manga desaparece de la biblioteca.

**Prueba 10. Comprobar almacenamiento**

Cerrar la aplicación y volver a abrirla.

Resultado esperado: los registros guardados anteriormente continúan disponibles.

## 12. Actualización del proyecto Android

Cuando se modifique el código de la aplicación, se deben actualizar los archivos utilizados por Android.

Desde la carpeta app ejecutar:

```powershell
npm run build
npx cap sync android
```

Posteriormente, abrir Android Studio y ejecutar nuevamente la aplicación.

Si se necesita distribuir la versión actualizada, se debe generar un nuevo APK.

## 13. Control de versiones

El desarrollo del proyecto se realizó utilizando Git y GitHub para administrar los cambios y facilitar el trabajo colaborativo.

Se utilizaron ramas individuales para organizar las modificaciones realizadas por cada integrante y posteriormente integrar las funcionalidades al proyecto principal.

Los archivos generados automáticamente por herramientas como Node.js, Vite y Android Studio se administran mediante reglas de .gitignore para evitar incluir archivos innecesarios en el repositorio.

## 14. Integrantes del proyecto

María Stacy Fernández Jiménez

Pedro José Solano Ramírez

Universidad de Costa Rica, Sede del Pacífico.

Curso: IF-0009 Desarrollo de Software IV.

Año: 2026.