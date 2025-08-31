pipeline {
    agent any
    tools {
        nodejs "nodejs"   // must match the name in Jenkins NodeJS installation
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/humayunrabatid786/firstCodebase.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'node -v'
                bat 'npm -v'
                bat 'npm install'
            }
        }
        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install --with-deps'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }
}
