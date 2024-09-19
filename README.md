# Traccar GPS with WhatsApp Integration

This script integrates Traccar GPS notifications with WhatsApp, enabling you to receive notifications directly via WhatsApp. It uses PM2 for process management and Yarn for dependency management.

## Prerequisites:

- Ubuntu 22.04 LTS
- Node.js version 21.1.0
- Yarn for dependency management
- PM2 for process management and deployment

## Installation Steps:

#### 1 - Install NVM (Node Version Manager) on Ubuntu 22:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```
#### 2 - Load NVM into your shell:
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

Add the above line to your ~/.bashrc or ~/.zshrc file for automatic loading on shell startup.

#### 3 - Verify NVM installation:
```bash
nvm --version
```

#### 4 - Install Node.js 21.1.0 using NVM:

```bash
nvm install 21.1.0
nvm use 21.1.0
```

#### 5 - Install Yarn globally:

```bash
npm install -g yarn
```

#### 6 - Clone the Repository:

```bash
git clone https://github.com/gps-saas/traccar-whatsapp.git
```

#### 7 - Navigate to the Repository and install dependencies:

```bash
cd traccar-whatsapp
yarn 
```

Ensure your Traccar is configured to send notifications via HTTP and you have a working whatapp api.

#### 8 - Install PM2 globally:

```bash
yarn global add pm2
```

#### 9 - Start the application with PM2:

```bash
pm2 start index.js --name traccar-whatsapp-integration
```

#### 10 - Verify the application is running:

```bash
pm2 list
```
#### 11 - Save PM2 process list:

```bash
pm2 save
```

#### 12 - Set PM2 to start on boot:

```bash
pm2 startup
```

The script listens for Traccar notifications and forwards them to your specified WhatsApp number.

#### 13 - For Professional Assistance:
Pedroso <br />
Email: don@codeartisan.com<br />
Whatsapp: [https://wa.me/5511934251920](https://wa.me/5511934251920)