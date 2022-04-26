# #!/bin/bash
# echo "Adding apt-keys"
# wget -qO - https://pkg.jenkins.io/debian-stable/jenkins.io.key | apt-key add -
# echo deb http://pkg.jenkins.io/debian-stable binary/ | sudo tee /etc/apt/sources.list.d/jenkins.list

# echo "Updating apt-get"
# sudo apt-get -qq update

# echo "Installing default-java"
# sudo apt-get --allow-unauthenticated -y install default-jre > /dev/null 2>&1
# sudo apt-get --allow-unauthenticated -y install default-jdk > /dev/null 2>&1

# echo "Installing git"
# sudo apt-get --allow-unauthenticated -y install git > /dev/null 2>&1

# echo "Installing git-ftp"
# sudo apt-get --allow-unauthenticated -y install git-ftp > /dev/null 2>&1

# echo "Installing jenkins"
# sudo apt-get --allow-unauthenticated -y install jenkins > /dev/null 2>&1
# sudo service jenkins start

# echo "Waiting for jenkins..."
# sleep 1m

# echo "Installing Jenkins Plugins"
# JENKINSPWD=$(sudo cat /var/lib/jenkins/secrets/initialAdminPassword)
# echo $JENKINSPWD

#!/bin/bash
echo "Adding apt-keys"
wget -qO - https://pkg.jenkins.io/debian-stable/jenkins.io.key | apt-key add -

echo deb https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null

echo "Updating apt-get"
sudo apt-get -qq update

echo "Installing default-java"
sudo apt-get -y install default-jre > /dev/null 2>&1
sudo apt-get -y install default-jdk > /dev/null 2>&1

echo "Installing git"
sudo apt-get -y install git > /dev/null 2>&1

echo "Installing git-ftp"
sudo apt-get -y install git-ftp > /dev/null 2>&1

echo "Installing jenkins"
sudo apt-get -y install jenkins > /dev/null 2>&1
sudo service jenkins start

sleep 1m

echo "Installing Jenkins Plugins"
JENKINSPWD=$(sudo cat /var/lib/jenkins/secrets/initialAdminPassword)
echo $JENKINSPWD
