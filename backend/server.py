from flask import Flask,request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/requested_amount', methods=["POST"])
def requested_amount():
    requested_amount = request.json["requestedAmount"]
    if(requested_amount > 50000):
        return {'value':"Declined"}
    elif(requested_amount == 50000):
        return {'value':"Undecided"}
    elif(requested_amount < 50000):
        return {'value':"Approved"}



if __name__ == "__main__":
    app.run(debug=True)