# ffmpeg web service API

An web service for converting audio/video files using Nodejs, Express and FFMPEG

Based off of jrottenberg/ffmpeg container

## Fast start

> docker-compose up -d --build

> explorer "http://127.0.0.1:9025"

## Endpoints

> POST /mp3 - Convert audio file in request body to mp3

> POST /mp4 - Convert video file in request body to mp4

> POST /jpg - Convert image file to jpg

> GET /, /readme - Web Service Readme

### /mp3, /m4a

Curl Ex:

> curl -F "file=@./uploads/input.wav" 127.0.0.1:9025/mp3 > downloads/output.mp3

> curl -F "file=@./uploads/input.m4a" 127.0.0.1:9025/mp3 > downloads/output.mp3

> curl -F "file=@./uploads/input.mov" 127.0.0.1:9025/mp4 > downloads/output.mp4

> curl -F "file=@./uploads/input.mp4" 127.0.0.1:9025/mp4 > downloads/output.mp4

> curl -F "file=@./uploads/input.tiff" 127.0.0.1:9025/jpg > downloads/output.jpg

> curl -F "file=@./uploads/input.png" 127.0.0.1:9025/jpg > downloads/output.jpg

> curl -F "file=@./uploads/input.mp4" 127.0.0.1:9025/screenshot > downloads/output.jpg

## Configuration and New Endpoints

You can change the ffmpeg conversion settings or add new endpoints by editing
the /app/endpoints.js file

## Installation

Requires local Node and FFMPEG installation.

1. Install FFMPEG https://ffmpeg.org/download.html

2. Install node https://nodejs.org/en/download/
   Using homebrew:
   > \$ brew install node

## Dev - Running Local Node.js Web Service

Navigate to project directory and:

Install dependencies:

> \$ npm install

Start app:

> \$ node app.js

Check for errors with ESLint:

> \$ ./node_modules/.bin/eslint .

## Running Local Docker Container

Build Docker Image from Dockerfile with a set image tag. ex: docker-ffpmeg

> \$ docker build -t doublelayer/ffmpeg-converter-service .

Launch Docker Container from Docker Image, exposing port 9025 on localhost only

> docker run -d --name ffmpeg-service --restart=always -v /storage/tmpfs:/usr/src/app/uploads -p 127.0.0.1:9025:3000 doublelayer/ffmpeg-converter-service

Launch Docker Container from Docker Image, exposing port 9026 on all IPs

> docker run -p 9025:3000 -d doublelayer/ffmpeg-converter-service

## Testing the API

Upload File to 127.0.0.1:9025

> \$ curl -F "file=@./uploads/testfile.mp4" localhost:9025/mp4 > downloads/output.mp4
