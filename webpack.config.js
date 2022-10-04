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
            //Babel para hacer codigo compatible en todos los navegadores
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            //Compilar css y less
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader', 
                     // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader'
                ],
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