FROM pjlamb12/angular-cli:latest as angular-built
WORKDIR /usr/src/app
COPY package.json package.json
RUN npm install --silent
COPY . .
RUN ng build --configuration production

FROM nginx:alpine
LABEL author="Alex Lamb"
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=angular-built /usr/src/app/dist/todo-list-angular/* /usr/share/nginx/html
EXPOSE 80 443
CMD [ "nginx", "-g", "daemon off;" ]
