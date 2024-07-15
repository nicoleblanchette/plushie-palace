from flask import Flask, request, jsonify
import pickle
import pandas as pd

app = Flask(__name__)

# Load the model from disk
with open('model.pkl', 'rb') as file:
    model = pickle.load(file)

    # Load the model from disk
with open('data.pkl', 'rb') as file:
    df = pickle.load(file)

@app.route('/api/predict', methods=['POST'])
def predict():
    # Get the request data
    data = request.get_json(force=True)
    price = data['Price']
    popularity = data['Popularity']
    

      
    # Make a prediction
    distances, indices = model.kneighbors([[popularity, price]])
    indices = indices.flatten().astype(int).tolist()
    product = df.iloc[indices]

    # Return the prediction
    return jsonify(product.to_dict()["Item ID"])

if __name__ == '__main__':
    app.run(port=5000)