const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    },
    devServer:{
        port: 8080,
        //Agregar para poder habilitar liveReload
        hot: false, // opcional, pero no debes configurar hot y liveReload en true
        liveReload: true,
        static: {
            directory: path.join(__dirname, 'public'),
        },
        //Para abrir con Chrome si tienes otro navegador predeterminado
        open: {
            app:{
                name: 'chrome'
            }
        }
    },
};