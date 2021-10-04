from flask import Flask, render_template, url_for
app = Flask(__name__)

@app.route('/')
def hello_world():
    name = "Hello World!"
    return render_template('main.html', name=name)

@app.route('/data')
def data():
    return "test data"