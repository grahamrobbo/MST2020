Set-executionPolicy -ExecutionPolicy Bypass

Git

node & npm

gulp

npm install gulp --global

vscode
settings sync

fira code fonts

download nginx

create sites - "C:\\Users\\robbo\\Sites"

nginx

        location / {
            root   /Users/robbo/Sites;
            index  index.html index.htm;
            autoindex on;
            add_header Cache-Control "no-store, no-cache, must-revalidate";
        }

       location /sap {
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "Upgrade";
            proxy_pass http://was.yelcho.com.au:8000/sap;
       }

Sign into github with pull requests somehow.

git clone https://github.com/grahamrobbo/MST2020

---

Show downloaded files

Show where to get downloads
Git
Node
nginx
vscode
fira-code

Install
Git
Node
Gulp
NginX
Fira-code
vscode

Settings

Sign-on to github

setup nginx

clone repo

show application

---

## Presso

Prep....

1. SAPGUI Running
2. Open nginx.conf
3. Login to github

Review setup....

1. nginx as local webserver and reverse proxy
2. vscode as main editor, git client, builder, etc.
3. VSCode extensions for linting, git integration,

Show running app on was
Show odata service on was
Start NGINX
Show odata service via proxy
git clone https://github.com/grahamrobbo/MST2020

Raise Issue

Open Issue

Code & Test

Build

Merge Commit

Deploy

---

# Setup Video

Windows 10 clean install

I have already downloaded what I need to save time - but let me quickly show you where to find these components

### Downloads

- Git
- node.js
- nginx free version
- fira-code
- vscode

### git.

You may have this installed already as it is included with many other components.

I just take default settings

### Node.js

This included the Node Package Manager NPM

### Gulp

Use the NPM to install gulp globally. Gulp is the tool that drives my build process

### NGINX

Installed by unpacking the archive and putting the results in a local diractor.

### FIRA-CODE Fonts

The fira-code fonts are installed by unpacking the archive, selecting the true-type font files and installing from the context menu.

### VSCode

Again I just select default options.

The features that Visual Studio Code includes out-of-the-box are just the start. VS Code extensions let you add tools to your installation to support your development workflow.

### Settings Sync

Rather than reinstall these tools and configure my vscode settings when I move between machines I will use an extension called Settings Sync to pull down my latest setup.

Note that the vscode developers will shortly release a settings sync feature inside vscode itself. When that happens I wont need to install a separatre extension to get this going.

My settings are stored in a github gist so I need to connect to github to pull them down.

To download my settings I do Shift + Alt + D.

Note how my selected extensions are downloaded and installed. As my preferred settings are pulled down vscode takes on the themes, fonts, keyboard mapping, etc. that I am familiar with.

I reload vscode to ensure all extensions and settings are applied.

### Sign in

The Github Pull Requests extension needs to connect to Github as well so I need to sign in for it.

### Extensions

You can see here the extensions I currently have installed. This list regularly changes as I find better alternatives or new extensions.

### Sites

By convention I store all my projects under my home directory in a folder called "Sites" so I create that subdirectory.

### Test html file

Before I start nginx I create a simple test html file in the Sites directory so I caheck it works.

### NGINX configuration

Now I edit the nginx configuration file.

#### Root location

I define the root location as my Sites directory. I also use the add_header directive to ensure the web browser will not cache any of the resources loaded from this location.

#### Reverse Proxy

I tell nginx to act as a reverse proxy for any calls to /sap resources. Typically these would be odata calls to the SAP backend so nginx forwards them to my ABAP server.

### Start NGINX and test

Now I can start nginx and test that it is working against my test file.

## Setup Complete

Now the setup of my development environment is complete - in under 8 minutes.

### Clone project

To work I one of my projects I just need to clone it into my Sites directory. Again because this is the first time I have used the git command line tools to access github I need to be authenticated.

Let me just reorganise my activity bar to how I like it - clearly this is a setting not handled by Settings Sync.

I use the Project Manager extension to navigate between projects. If I refresh the Git panel it finds the project I just cloned and I can open it.

I can now make changes and test the project locally.

### Build Project

Once I an ready I need to rebuild the project before I deploy it. This is what I use gulp for.

I execute npm install to pull down my dependencies.

Then I execute gulp dist to perform the build. I usually define this as the default build task in vscode so I only need to hit the Ctrl+Shift+B key combination to initiate a build.

I hope that was useful and please look for my other video where I walk through my developer workflow process from raising an issue to deploying the modification to the ABAP backend.

Cheers
