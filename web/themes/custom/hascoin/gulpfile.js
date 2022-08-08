const { src, dest, watch } = require("gulp");
const compileSass = require("gulp-sass")(require("sass"));
const sassGlob = require("gulp-sass-glob");
const sourceMaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cleanCss = require("gulp-clean-css");
const minifyJs = require("gulp-uglify");
const concat = require("gulp-concat");
const imagemin = require("gulp-imagemin");

compileSass.compiler = require("node-sass");

const bundleSaas = () => {
  return src("./src/sass/**/*.scss")
    .pipe(sassGlob())
    .pipe(sourceMaps.init())
    .pipe(compileSass().on("error", compileSass.logError))
    .pipe(cleanCss())
    .pipe(postcss([autoprefixer("last 2 version", "ie 8", "ie 9")]))
    .pipe(sourceMaps.write())
    .pipe(dest("./assets/css"));
};

const bundleJs = () => {
  return src("./src/js/**/*.js")
    .pipe(sourceMaps.init())
    .pipe(minifyJs())
    .pipe(concat("bundle.js"))
    .pipe(sourceMaps.write())
    .pipe(dest("./assets/js"));
};

const bundleImg = () => {
  return src("./src/images/*")
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest("./assets/images"));
};

const devWatch = () => {
  watch("./src/sass/**/*.scss", bundleSaas);
  watch("./src/js/**/*.js", bundleJs);
  watch("./src/images/*", bundleImg);
};

exports.bundleSaas = bundleSaas;
exports.bundleJs = bundleJs;
exports.bundleImg = bundleImg;
exports.devWatch = devWatch;
