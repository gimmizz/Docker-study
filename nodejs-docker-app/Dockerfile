FROM node:10

# Create app directory
WORKDIR /usr/src/app

# npm install을 하는 데 필요한 (변경되지 않을) package.json을 먼저 copy
COPY package.json ./ 

RUN npm install

COPY ./ ./

# node(명렁어) + 엔트리 파일
CMD ["node", "server.js"]