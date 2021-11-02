from flask import Flask, jsonify, abort, request
import base64

app = Flask(__name__)


# REST APIs start with /api/ as a convention
@app.route("/api/repo-desc/<string:urlstring>", methods=["GET"])
def welcome(urlstring):
    if request.method == "GET":
        try:
            temp = base64.b64decode(urlstring)
            return jsonify(str(temp))
        except:
            abort(404)
    else:
        abort(404)
