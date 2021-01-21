docker build -f Dockerfile -t nodecontainer .
docker run -p 3000:3000 nodecontainer .

