echo "Deploying changes..."

cd /home/devops/devops-CI-S8-GRP1
git pull

docker-compose -f /App/docker-compose.yml down

docker-compose /App/docker-compose.yml build

docker-compose /App/docker-compose.yml up -d
echo "Deployed!"
