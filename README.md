# Repo-Desc

"Repository Describer" is a tool that can be used to get a feel for the size of a public repository as well as the different coding languages used by the software under observation. This repository contains the python implementation of this tool as well as the web front end along with all the necessary files to host it online successfully.

## Repository structure

## Setup
We want to use react for front end and flask for backend.

For flask, we use a virtual environment for development purpose and use pycharm.

```
<set/export> FLASK_APP=app.py
<set/export> FLASK_ENV=development
flask run
```
Set -> windows
export -> macos and linux

python
>> import filename
>> filename.app.url_map

For react:
- We first install nodejs
- npm install -g create-react-apps
- create-react-app repo-desc

Visit \<link> and enter the public repository URL to get all the exciting details!

## Useful Resources
- https://github.com/cb372/line-count
- https://www.youtube.com/watch?v=AsoJL9GPi1k&ab_channel=ChrisHawkes
- https://www.youtube.com/watch?v=0twjvW0c1r0&ab_channel=kudvenkat
