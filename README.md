# Repo-Desc

"Repository Describer" is a tool that can be used to get a feel for the size of a public repository as well as the different coding languages used by the software under observation. This repository contains the implementation of this tool as well as the web front end along with all the necessary files to host it online successfully.

The tool is build using the "Flask" web framework (python) as the back-end and React library (javascript) for the front-end.

## Repository structure

This repository contains the code files for the front-end as well as the back-end of the tool. The repository contains to main sub-folders:
- [repo-desc-front-end](./repo-desc-front-end): Contains all the reactjs based files that implement the webui of the tool.
- [repo-desc-back-end](./repo-desc-back-end): Contains all the python flask based code files that implement the back-end logic of the tool.

## Development Setup

For flask, we use a virtual environment for development purpose and use [pycharm](https://www.jetbrains.com/pycharm/).

- If you use pycharm the venv is already created.
- If you are using anaconda, then flask is already installed in it.


```
python -m pip install flask
<set/export> FLASK_APP=app.py
<set/export> FLASK_ENV=development
flask run
```
Set -> windows
export -> macos and linux

python
-  import filename
-  filename.app.url_map

For react:
- We first install nodejs
- npm install -g create-react-apps
- create-react-app repo-desc

Visit \<link> and enter the public repository URL to get all the exciting details!

## Useful Resources
- https://github.com/cb372/line-count
- https://www.youtube.com/watch?v=AsoJL9GPi1k&ab_channel=ChrisHawkes
- https://www.youtube.com/watch?v=0twjvW0c1r0&ab_channel=kudvenkat
