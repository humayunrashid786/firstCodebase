pipeline {
    agent any

    environment {
        NODE_VERSION = '24'
        GIT_URL = 'https://github.com/humayunrashid786/firstCodebase.git'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout main branch explicitly
                git branch: 'main', url: "${GIT_URL}"
            }
        }

        stage('Setup Node.js') {
            steps {
                script {
                    // Ensure NodeJS plugin in Jenkins has this NodeJS installation
                    def nodeHome = tool name: "nodejs-24", type: 'NodeJS'
                    env.PATH = "${nodeHome}/bin:${env.PATH}"
                }

                // Print Node and NPM versions
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                // Ensures Chromium, Firefox, WebKit are installed
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                // Use Playwright test runner
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished'
        }
        success {
            echo 'All stages passed successfully!'
        }
        failure {
            echo 'One or more stages failed.'
        }
    }
}
