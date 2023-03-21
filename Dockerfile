ARG VARIANT=production
FROM node:18-buster-slim as build
RUN mkdir /app
RUN chown node: /app
USER node
WORKDIR /app
COPY tsconfig.json /app
COPY --chown=node:node package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY public /app/public
COPY src /app/src

# SET ENVs before build
ENV REACT_APP_GRAPHQL_API_PUBLIC_URL=https://api.sandbox.sonaprotocol.cloud/public
ENV REACT_APP_GRAPHQL_API_PRIVATE_URL=https://api.sandbox.sonaprotocol.cloud/private
ENV REACT_APP_GRAPHQL_WS_PRIVATE_URL=ws://api.sandbox.sonaprotocol.cloud/private

RUN npm run build

# stage 2
FROM nginx:1.20.2 as production
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

