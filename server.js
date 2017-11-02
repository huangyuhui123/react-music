var webpack=require('webpack');
var webpacKDevServer =require('webpack-dev-server');
var  config=require('./webpack.config');


new webpacKDevServer(webpack(config),{
        publicPath:config.output.publicPath,
        hot:true,
        historyApiFallback:true,
        quiet:false,
        noInfo:false,
        stats:{
            assets:false,
            color:true,
            version:false,
            hash:false,
            timings:false,
            chunks:false,
            chunkModules:false
        }

}).listen(3000,'localhost',function(err){
    if(err){
      config.log(err);
    }
    console.log('Listening at localhost:3000')
})
