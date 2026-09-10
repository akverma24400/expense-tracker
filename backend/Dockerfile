# FROM node:22-alpine

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# EXPOSE 5000

# CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]



# multistage docker build for backend

#-------------------------------------STAGE-1--------------------------

FROM node:22-alpine AS dependencies

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .
#---------------------------------- STAGE-2 ----------------------------

FROM node:22-alpine AS runner

WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

USER node

EXPOSE 5000

CMD ["npm", "start"]

















