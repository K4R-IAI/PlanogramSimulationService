docker build -f Dockerfile -t nodecontainer .
docker run -p 3567:3567 nodecontainer .

