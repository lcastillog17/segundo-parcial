const path = require('path');
const html = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Modo de desarrollo
  entry: './src/aggregator.js', // Punto de entrada principal
  output: {
    filename: 'bundle.js', // Nombre del archivo de salida
    path: path.resolve(__dirname, 'dist'), // Carpeta de salida
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Aplicar la configuración a los archivos JS
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Usar Babel para transpilar el código
        },
      },
    ],
  },
  plugins: [
    new html({ //Plugin para configurar la transpilacion de nuestro archivo HTML 
      inject: true,
      template: './src/index.html',
      filename: './index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },  
    }),
  ]
};
