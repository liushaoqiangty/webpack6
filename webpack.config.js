let path=require('path');
module.exports={
    mode:'development',
    entry:{
        app:'./app/app.js'
    },
    output:{
        path: path.resolve(__dirname + '/public')
    },

//配置loader
module:{

    rules:[
        {
            test:/.css$/,
            
            use:[
                {loader:'style-loader'},
                {loader:'css-loader'}
            ]
        },
        {
            test:/.\less$/,
            use:[
                {loader:'style-loader'},
                {loader:'css-loader'},
                {loader:'less-loader'}
            ]
        }
    ]
}


}
