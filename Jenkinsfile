#!/usr/bin/env groovy

pipeline {
    agent any

    options {
        disableConcurrentBuilds()
    }

    stages {
        stage('Permissions') {
            steps {
                sh 'chmod 775 *'
            }
        }

        stage('Update Docker UAT image') {
            steps {
                sh '''
                    docker login -u "mkefi" -p "09152798Km"
                    docker build --no-cache -t crmcvfront:latest .
                    docker tag crmcvfront:latest mkefi/crmcvfront:latest
                    docker push mkefi/crmcvfront:latest
                    docker rmi crmcvfront:latest
                '''
            }
        }

        stage('Update UAT container') {
            steps {
                sh '''
                    docker login -u "mkefi" -p "09152798Km"
                    docker pull mkefi/crmcvfront:latest
                    docker stop crmcvfront
                    docker rm crmcvfront
                    docker run -p 9026:80 --name crmcvfront --network dbconnexion -t -d mkefi/crmcvfront:latest
                '''
            }
        }
    }
}
