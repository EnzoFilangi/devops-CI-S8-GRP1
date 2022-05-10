echo "Deploying changes..."

cd /home/devops/devops-CI-S8-GRP1/App
git pull

docker-compose down

docker-compose build

docker-compose up -d
echo "Deployed!"
