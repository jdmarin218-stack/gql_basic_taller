FROM node:20
WORKDIR /app
COPY package.json package-lock.json /app/
COPY . /app/
RUN npm install
EXPOSE 4000
CMD ["npm", "start"]
