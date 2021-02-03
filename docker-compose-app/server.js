const express = require("express");
const redis = require("redis");

// 레디스 클라이언트 생성
const client = redis.createClient({
    host: "redis-server", // docker-compose 사용할 때는 docker-compose.yml에 명시한 컨테이너 이름으로 쓴다. 
    port: 6379
})

const app = express(); // 새로운 express 앱 생성

// 애플리케이션 구현 기능
// 숫자는 0부터 시작합니다.
client.set("number", 0);
app.get('/', (req, res) => {
    client.get("number", (err, number) => { // err가 아닐 경우, number로 가져와라!
        // 현재 숫자를 가져온 후에 1씩 올려준다.
        client.set("number", parseInt(number) + 1); // number가 숫자로 넘어오기 때문에 parseInt
        res.send("숫자가 1씩 올라갑니다. 숫자: " + number);
    })
});

app.listen(8080); // 앱 실행
console.log('Server is running!');