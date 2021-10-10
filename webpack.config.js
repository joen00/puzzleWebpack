const path=require('path');
//require은 무조건 가져옴- 없으면 안돌림 import는 그냥 가져옴

module.exports ={
    mode: 'development',

    //resolve를 통해 entry를 보내겠다.
    resolve:{
        //jsx를 붙이면 그 파일은 컴포넌트 파일이구나'.css'
        extensions:['.js','.jsx','.ts','.tsx']
    },

    //시작 자바스크립트
    entry:{
        app: ['./src/index']
    },

    //로더 해석을 해주는 것
    module:{
        rules:[
            {
                test:/\.(js | jsx | ts | tsx)?/,
                loader:'babel-loader'
            },
        ]
    },

    output:{
        //프로젝트 폴더 이름
        path: path.resolve(__dirname,'public'),
        filename: 'bundle.js',
    },

    devServer: {
        contentBase:path.resolve(__dirname,'public'),
        //개발자 전용서버
        port:8000
    }
    
}