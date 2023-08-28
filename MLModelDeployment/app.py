from flask import Flask, render_template, request
import joblib
from utils.preprocessing import preprocess_data
from utils.evaluation import evaluate_model

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    preprocessed_data = preprocess_data(data)
    model = joblib.load('models/model1.pkl')
    prediction = model.predict(preprocessed_data)
    result = evaluate_model(prediction)
    return result

if __name__ == '__main__':
    app.run(debug=True)