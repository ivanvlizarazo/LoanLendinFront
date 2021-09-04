from flask import Flask,request

app = Flask(__name__)

@app.route('/requested_amount', methods=["POST"])
def main():
    requested_amount = request.json["requestedAmount"]
    if(requested_amount > 50000):
        return {'value':"Declined"}
    elif(requested_amount == 50000):
        return {'value':"Undecided"}
    elif(requested_amount < 50000):
        return {'value':"Approbed"}



if __name__ == "__main__":
    app.run(debug=True)