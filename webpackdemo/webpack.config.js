const path = require('path');
//console.log(__dirname);
module.export = {
    mode:'production',
    entry: './index1.js',
    output:{
        path:path.resolve(__dirname+'/dist'),
        filename:'index.bundle.js' // 输出的文件名
    }
}
