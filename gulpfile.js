// Imports:
const {src, dest, watch, series, parallel} = require('gulp');
/* css & sass */
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
/* imágenes */
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

// Compilador:
function css(done){
    src('src/scss/app.scss')
    .pipe(sass( {outputStyle: 'compressed'} ))
    .pipe(postcss( [autoprefixer()] ))
    .pipe(dest('build/css'))

        done();
}

// Imagenes:
function imagenes(done){
    src('src/img/**/*')
    .pipe(imagemin({ optimizationLevel: 3 }))
    .pipe(dest('build/img'))

        done();
}
function versionWebp(){
    const opciones = {
        quality: 50 // 0 - 100
    }
    return src('src/img/**/*.{png,jpg}')
    .pipe(webp(opciones))
    .pipe(dest('build/img'))
}
function versionAvif(){
    const opciones = {
        quality: 50 // 0 - 100
    }
    return src('src/img/**/*.{png,jpg}')
    .pipe(avif(opciones))
    .pipe(dest('build/img'))
}

// watcher:
function dev(){
    watch('src/scss/**/*.scss',css);
    watch('src/img/**/*', imagenes);
}

// Exports:
exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.default = series( 
    imagenes, 
    versionWebp, 
    versionAvif, 
    css, 
    dev 
);