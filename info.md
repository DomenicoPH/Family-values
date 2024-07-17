# Configuración: GULP - SASS

## Paso 1  

### Crear archivo package.json e instalar las dependencias.

    npm init -y
    npm i --save-dev gulp
    npm i --save-dev sass gulp-sass
    npm i --save-dev autoprefixer gulp-postcss

o...

    npm init -y
    npm i --save-dev gulp sass gulp-sass autoprefixer gulp-postcss

## Paso 2  

### Crear estructura básica del proyecto.

    Estructura de carpetas:
    │
    ├── src
    │   └── scss
    │       ├── base
    │       │   ├── _index.scss
    │       │   ├── _normalize.scss
    │       │   ├── _globales.scss
    │       │   ├── _mixins.scss
    │       │   ├── _variables.scss
    │       │   └── _utilidades.scss
    │       │
    │       └── app.scss
    │
    ├── build
    │   └── css
    │
    ├── index.html
    └── gulpfile.js

## Paso 3

### index.html - Configuración del archivo index.html

    // Import del archivo compilado .css desde la carpeta build:

    <link rel="stylesheet" href="build/css/app.css">

## Paso 4

### gulpfile.js - Configuración del archivo gulpfile.js

    // Imports:
    const {src, dest, watch, series, parallel} = require('gulp');
    const sass = require('gulp-sass')(require('sass'));
    const postcss = require('gulp-postcss');
    const autoprefixer = require('autoprefixer');
    
    // Compilador:
    function css(done){
        src('src/scss/app.scss')
        .pipe(sass( {outputStyle: 'expanded'} ))
        .pipe(postcss( [autoprefixer()] ))
        .pipe(dest('build/css'))
    
        done();
    }
    
    // watcher:
    function dev(){
        watch('src/scss/**/*.scss',css)
    }
    
    // Exports:
    exports.css = css;
    exports.dev = dev;
    exports.default = series(css,dev)

---

# Configuración: WEBPACK

1. Ejecutar en la terminal:  

        npm init

        // * (crea archivo package.json)

        npm i --save-dev webpack webpack-cli

        // * (instala webpack y webpack-cli como dependencias de desarrollo)

2. build:  

        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1",
          "build": "webpack --watch"
        },

        // * (Añadir el script "build": "webpack");

3. webpack.config.js:  

        module.exports = {
            entry: ".src/js/index.js",
            output: {
                path: __dirname + "/build",
                filename: "bundle.js"
            },
            mode: 'development',
        };

        // * (Crear archivo webpack.config.js)
        // * (webpack.config.js exporta un objeto que contiene un 'entry point' y un 'output')

4. index.html

        <script src="build/bundle.js"></script>

        // * (Incorpora el archivo bundle.js con todos los archivos js del proyecto compilados)


---

# RUN SCRIPTS:

        npm run dev         // Corre Gulp       ----> gulpfile.js
        npm run build       // Corre Webpack    ----> webpack.config.js