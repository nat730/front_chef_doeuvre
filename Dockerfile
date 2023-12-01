FROM node:18
WORKDIR /app
COPY . .
RUN npm install -g serve
RUN npm install
ENV PORT=1992
EXPOSE 1992
RUN npm run build
CMD serve dist -p 2020