// express 모듈 불러오기
const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0'; // 굳이 명시적으로 안해도 된다. 

// App
const app = express(); // 새로운 express app 생성
app.get('/', (req, res) => {
    // "/" 이 경로로 요청이 오면 Hello World를 결과 값으로 전달.
    res.send('Hello World'); 
});

// app의 실행
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);