var path = require('path');
module.exports = {
    entry : ['./client/client.js'],
    output: {
        path:'./dist',
        filename :'bundle.js',
        publicPath: '/'
    },
    module :{
     loaders:[
        {
         test : /\.js$/,
         loader: 'babel-loader',
         exclude:/node_modules/,
         query :{
             presets:['react','es2015']
         }
        },
        {
            test:/\.(png|jpg)$/,
            loader:'file-loader',
            include:path.join(__dirname,'assets/images')
        },
        {
            test:/\.scss$/,
            loader:'style!css!sass'
        },
        
     ]
    },
    resolve:{
        alias : {
            images : path.resolve(__dirname,'assets/images')
        }
    }
}