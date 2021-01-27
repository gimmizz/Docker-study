// express 모듈을 이 파일로 불러오기
const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0'; // 굳이 명시적으로 안해도 된다. 

// App
const app = express(); // 새로운 express app 생성
app.get('/', (req, res) => { // req : request handler, res : response handler
    // "/" 이 경로로 GET 요청이 오면 Hello World를 respose로 전달.
    res.send('Hello World - docker volume 써서 변경 확인해보기~'); 
});

// app의 실행
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);