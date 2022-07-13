var path = require('path');
module.export = {
    mode: 'production',
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test:/.\m?js$/i, // .js or .mjs
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            [
                                '@babel/preset-env',{
                                    useBuiltIns:'usage',
                                    corejs:'3',
                                    targets:{
                                        chrome:'41',
                                        ie:'9'
                                    }
                                }
                            ]
                        ]
                    }
                }
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader!css-loader'
                ]
            }
        ]
    }
}