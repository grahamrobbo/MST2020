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
