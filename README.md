![mastering sap logo](img/mastering-sap-logo.png)

# Building and Deploying SAPUI5 Applications

Supporting material for the Mastering SAP Technologies 2020 session about my SAPUI5 development environment and workflow.

## My SAPUI5 Development Environment

_See below for a short video that goes through the installation of these components._

![git Logo](img/git.png)

https://git-scm.com/

---

![node.js Logo](img/node.png)

https://nodejs.org

---

![nginx Logo](img/nginx.png)

http://nginx.org/

---

![VSCode Logo](img/VSCode.png)

https://code.visualstudio.com/

---

![gulp Logo](img/gulp.png)

https://gulpjs.com/

---

![settings Logo](img/settings.png)

[Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)

I use the `Settings Sync` VSCode extension from [Shan Khan](https://marketplace.visualstudio.com/publishers/Shan) to bring across my VSCode preferences - i.e. extensions and settings.

_Note: The VSCode developers have been working over the last couple of months to support synchronising VS Code preferences across machines. By the time you are reading this the settings synchronisation feature will probably be part of the standard VSCode distribution and this extension will not be required._

---

![fira-code Logo](img/fira-code.svg)

https://github.com/tonsky/FiraCode

I use the Fira Code font from Nikita Prokopov [@nikitonsky](https://twitter.com/nikitonsky) - a free monospaced font containing ligatures for common programming multi-character combinations.

---

The video shows how to setup the development environment on a Windows machine. The procedures are almost identical for OSX.

### Put video here

https://youtu.be/l2JEKBvxwDQ

## Other notes

I use a subdirectory called `Sites` located in my home directory as the root directory for all my projects.

The nginx configuration contains the following setting to reflect this.

        location / {
            root   /Users/robbo/Sites;
            index  index.html index.htm;
            autoindex on;
            add_header Cache-Control "no-store, no-cache, must-revalidate";
        }

The `add_header` setting ensures that everything served up from that location will not be cached in the browser.

The nginx configuration also needs to set up the reverse proxy for the SAP backend server.

       location /sap {
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "Upgrade";
            proxy_pass http://was.yelcho.com.au:8000/sap;
       }

To support websockets requires a HTTP config setting to tell nginx where the websocket server is located.

    upstream websocket {
        server was.yelcho.com.au:8443;
    }

My complete `nginx.conf` file looks like this.

    worker_processes  1;

    events {
        worker_connections  1024;
    }

    http {
        include       mime.types;
        default_type  application/octet-stream;

        sendfile        on;
        keepalive_timeout  65;
        upstream websocket {
            server was.yelcho.com.au:8443;
        }

        server {
            listen       80;
            server_name  localhost;

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

            # customised 404 error page
            error_page  404              /404.html;
            location = /404.html {
                root   /Users/robbo/Sites;
            }
        }
    }

Finally the VSCode projectManage extension needs to know where to look for git projects. You set this in the _settings.json_ file.

    "projectManager.git.baseFolders": [
      "/users/robbo/Sites",
    ],

## To work on a project

To start work on a project simply clone the repo to the `Sites` directory and execute `npm install`.

![clone project](img/project-clone.gif)

To prepare a project for deployment execute `gulp dist` - or even better configure it as the default build task in VSCode.

![gulp dist](img/gulp-dist.gif)
