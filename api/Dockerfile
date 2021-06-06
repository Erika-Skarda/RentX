FROM node 
# Para rodar essa imagem 

WORKDIR /usr/app

COPY package.json ./
# copia package.json e joga p /usr/app
RUN npm install
# Baixa as dependecnias
COPY . .
# Copia tudo pra dentro dessa pasta raiz
EXPOSE 3333

CMD ["npm","run","dev"]
# Permite que a gnt rode uns comandos -> no caso script em um array
# docker build -t rentx . => criar imagem e docker build -t rentx
# docker ps -> Lista containers
# Para rodar a imagem -> docker run -p 3333:3333 rentx
# docker exec -it eager_carson /bin/bash  pra acessar o container