echo '=====>build guestbook-api<====='
docker build --no-cache -t guestbook-api .

echo '=====>tag guestbook-api<====='
docker tag guestbook-api:latest remkohdev/guestbook-api:1.0.0

echo '=====>push guestbook-api<====='
docker push remkohdev/guestbook-api:1.0.0