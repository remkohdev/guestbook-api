docker stop guestbook-api
docker rm guestbook-api
docker build --no-cache -t guestbook-api .
docker run -d --restart always --name guestbook-api -p 3000:3000 guestbook-api