# building server+client container
docker build . -t catiachatbot
docker stop catiachatbot
docker rm catiachatbot
docker run -d -p 99:99 --name catiachatbot -v //e/catiachatbot/build:/var/www/localhost/catia catiachatbot
docker logs catiachatbot
