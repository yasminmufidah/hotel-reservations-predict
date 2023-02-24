from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

model = pickle.load(open('./server/model/hotel_reservations_model.pickle', 'rb'))

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    print(data)
    prediction = model.predict(np.array(list(data.values())).reshape(1,-1))
    print(prediction)
    if prediction[0] == 1:
        output = 'not cancelled'
    else:
        output = 'cancelled'
    response = jsonify({"predict_reservations": output
            })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == '__main__':

    app.run(debug=True)
