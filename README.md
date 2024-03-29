![mastering sap logo](img/mst2021_banner.png)

# Continuously Building and Deploying SAPUI5 Applications

This repository contains the supporting material for the Mastering SAP Technologies 2020 session about my [SAPUI5](https://sapui5.hana.ondemand.com/) development environment and workflow.

My session didn't make it onto the final agenda but the recodings and supporting material can be found here. I was briefed to keep the video to just 10 minutes which was to be used to kick-off further discussion around the issues.

In May 2021 I was asked to present this content at Mastering SAP Technologies South Africa. I hope this new audience find this useful.

In this repository you will find

- an ["intro" 10 minute video](https://youtu.be/NGhklCEDQA4) showing how I would setup my development environment on a new machine. There is no editing of this vide. The whole process takes - you guessed it - 10 minutes.
- supporting notes to help you understand and possibly copy the showcased development environment
- the sample UI5 application which showcases techniques for 'componentising' a UI5 application.
- the [actual 10 minute presentation video](https://youtu.be/TP7VluwCboU) that shows my development workflow by taking an issue, resolving it, testing it and deploying the new code to the backend ABAP server

_Caveat - my development environment is constantly changing and hopefully improving. This repo shows how it looked around the middle of July 2020. It may have changed by the time you get here._

Enjoy!

![robbo](img/robbo.png)

---

## My SAPUI5 Development Environment

These are the software components I use to build my development environment on a new machine. All these components are cross-platform and freely available.

|                                      |                                                                                                                                                                                                                                                                   |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![git Logo](img/git.png)             | **https://git-scm.com/**                                                                                                                                                                                                                                          |
| ![node.js Logo](img/node.png)        | **https://nodejs.org**                                                                                                                                                                                                                                            |
| ![nginx Logo](img/nginx.png)         | **http://nginx.org/**                                                                                                                                                                                                                                             |
| ![VSCode Logo](img/vscode.png)       | **https://code.visualstudio.com/**                                                                                                                                                                                                                                |
| ![gulp Logo](img/gulp.png)           | **https://gulpjs.com/**                                                                                                                                                                                                                                           |
| ![settings Logo](img/settings.png)   | **[Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)** VSCode extension from [Shan Khan](https://marketplace.visualstudio.com/publishers/Shan) to bring across my VSCode preferences - i.e. extensions and settings. \* |
| ![fira-code Logo](img/fira-code.png) | **https://github.com/tonsky/FiraCode** Fira Code font from Nikita Prokopov [@nikitonsky](https://twitter.com/nikitonsky) - a free monospaced font containing ligatures for common programming multi-character combinations.                                       |

_\* Note: There is now a "Settings Sync" feature built into VSCode so this extension is no longer required._

---

### Setup video

The following video shows how I would setup my development environment on a newly installed Windows machine. The process is almost identical for macOS.

[![Setup development environment](img/install.png)](https://youtu.be/NGhklCEDQA4)

## Setup notes

I use a subdirectory called `Sites` located in my home directory as the root directory for all my projects.

The nginx configuration contains the following setting to reflect this.

```
        location / {
            root   /Users/robbo/Sites;
            index  index.html index.htm;
            autoindex on;
            add_header Cache-Control "no-store, no-cache, must-revalidate";
        }
```

The `add_header Cache-Control "no-store, no-cache, must-revalidate"` setting ensures that everything served up from this location will not be cached in the browser.

The nginx configuration also needs to be configured to act as a reverse proxy for calls to the SAP backend server.

```
       location /sap {
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "Upgrade";
            proxy_pass http://was.yelcho.com.au:8000/sap;
       }
```

If you require websocket support add the following HTTP config setting so that nginx will act as a websocket proxy.

```
    upstream websocket {
        server was.yelcho.com.au:8443;
    }
```

My complete `nginx.conf` file looks like this.

```
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
```

Finally the VSCode Project Manager extension needs to know where to look for git projects. This is set in the _settings.json_ file.

```json
    "projectManager.git.baseFolders": [
      "$home\Sites",
    ],
```

## To work on a project

To start work on a project just clone the repo to the `Sites` directory and execute `npm install` to download the dependencies.

![clone project](img/project-clone.gif)

To prepare a project for deployment execute the command `gulp dist` - or even better configure it as the default build task in VSCode so it is just a key sequence away.

![gulp dist](img/gulp-dist.gif)

_\*Note - The sample application I use is a good example of how to break a UI5 application into multiple components and route between them. You can also find a similar sample in the SAPUI5 SDK at [https://sapui5.hana.ondemand.com/#/entity/sap.ui.core.routing.Router/sample/sap.ui.core.sample.RoutingNestedComponent](https://sapui5.hana.ondemand.com/#/entity/sap.ui.core.routing.Router/sample/sap.ui.core.sample.RoutingNestedComponent)._

---

## Deployment to ABAP backend server

![sapui5-deployer](img/sapui5-deployer.png)

I created the [Yelcho/sapui5-deployer](http://yelcho.github.io/sapui5-deployer/) project about 5 years ago and still use it to deploy UI5 applications to my ABAP systems.

SAPUI5-Deployer is a solution for deploying SAPUI5 and OpenUI5 web apps to a SAP ABAP Web Application Server automatically.

SAPUI5-Deployer can be implemented by the an ABAP developer in minutes, in most cases without the need for any infrastructure changes, whilst conforming to existing change management policies and procedures.

If possible I like to setup a [Github webhook](https://docs.github.com/en/developers/webhooks-and-events/about-webhooks) to trigger deployment whenever a push to the repository event is fired.

![webhook](img/webhook.png)

If this is not possible the SAPUI5-Deployer ABAP program can be scheduled to regularly poll the repository and trigger a deployment when changes are detected.

### Developer Workflow

The following video takes the development enviroment we created above and walks through a typical developer workflow of building, testing and deploying a fix.

[![Setup development environment](img/build.png)](https://youtu.be/TP7VluwCboU)

I hope you find this information useful.

Cheers,

Graham Robbo

---

[![rescue](img/rescue.png)
_Relief of the party on Elephant Island by Chilean tug Yelcho - Photo by Frank Hurley - used with permission_](https://geographical.co.uk/people/explorers/item/1875-on-this-day-1916-shackleton-rescues-his-crew)
