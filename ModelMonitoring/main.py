import tensorflow as tf
from utils.data_processing import preprocess_data
from utils.model_evaluation import evaluate_model
from utils.alerting import send_alert

def main():
    # Load and preprocess data
    data = preprocess_data()

    # Load and evaluate models
    model1 = tf.keras.models.load_model('models/model1.h5')
    model2 = tf.keras.models.load_model('models/model2.h5')

    evaluation1 = evaluate_model(model1, data)
    evaluation2 = evaluate_model(model2, data)

    # Send alert if necessary
    if evaluation1['accuracy'] < 0.9 or evaluation2['accuracy'] < 0.9:
        send_alert()

if __name__ == "__main__":
    main()