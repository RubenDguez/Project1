pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm install"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/jenkins-react-app"
                sh "sudo cp -r /var/lib/jenkins/workspace/jenkins-react-app/build/ /var/www/jenkins-react-app/"
            }
        }
    }
}