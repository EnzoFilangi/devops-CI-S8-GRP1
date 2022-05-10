echo "Deploying changes..."

cd /home/debian/devops-CI-S8-GRP1
git pull

sudo docker-compose down

sudo docker-compose build

sudo docker-compose up -d
echo "Deployed!"
