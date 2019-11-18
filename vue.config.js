const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    publicPath:process.env.NODE_ENV === 'production'
        ? '/'
        : '/',
    lintOnSave:false,
    runtimeCompiler:true,
    configureWebpack:{
    },
    chainWebpack:config =>{

        //vue-loader  允许你一种名为单文件组件的格式撰写组件
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options =>{
                return options
            })
    },
    devServer:{
        host:'0.0.0.0',
        port:'8080',
        https:''
    },
    modle:'development',
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.js$/,
                loader:'babel-loader'
            },
            {
                test:/\.vue$/,
                use:[
                    'vue-style-loader',
                    'css-loader'
                ]
            },
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ],

}
