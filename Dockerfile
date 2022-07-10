# Grab container image
FROM base-images.mgti-dal-so-art.mrshmc.com/mmc/ubuntu/nodejs-14:focal
USER root

ARG AppName
ARG COMMIT_ID
ARG USERNAME
ARG PASSWORD

# Copy directories and files to container
WORKDIR /opt/build_area/

COPY src/ ./src/
COPY public/  ./public/
COPY .storybook/ ./.storybook/
COPY *.yaml        \
     package.json     \
     .env  \   
     react-0.3.1.tgz  /opt/build_area/

# Install zip and build website

RUN apt install zip -y
RUN npm install
RUN npm run build:dev
# Package website code
WORKDIR /opt/build_area/build/
RUN zip -r /${AppName} *
RUN ls -la /${AppName}.zip
# Push the package to artifactory
RUN curl -T /${AppName}.zip -k https://artifactory.nasa.azu.mrshmc.com/artifactory/ap-pkg/${AppName}/${COMMIT_ID}/${AppName}.zip -u ${USERNAME}:${PASSWORD}