from flask import Flask,request

app = Flask(__name__)

@app.route('/requested_amount', methods=["POST"])
def main():
    return {'amount':request.json["amount"]}

if __name__ == "__main__":
    app.run(debug=True)