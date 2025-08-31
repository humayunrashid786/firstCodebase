pipeline {
    agent any
    tools {
        nodejs "nodejs"   // must match the name in Jenkins NodeJS installation
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/humayunrashid786/firstCodebase.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'npm install'
            }
        }
        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }
}
