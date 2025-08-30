pipeline {
    agent any
    environment {
        NODE_VERSION = '24'
        GIT_URL = 'https://github.com/humayunrashid786/firstCodebase.git'
    }
    stages {
        stage('Checkout') {
            steps {
                git url: "${GIT_URL}"
            }
        }
        stage('Setup Node.js') {
            steps {
                script {
                    def nodeHome = tool name: "nodejs-${NODE_VERSION}", type: 'NodeJS'
                    env.PATH = "${nodeHome}/bin:${env.PATH}"
                }
                sh 'node -v'
                sh 'npm -v'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}