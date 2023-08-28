
import tensorflow as tf

class NLPModel:
    def __init__(self):
        self.model = self.build_model()

    def build_model(self):
        # Define the architecture of the NLP model
        model = tf.keras.Sequential()
        model.add(tf.keras.layers.Embedding(input_dim=10000, output_dim=128))
        model.add(tf.keras.layers.LSTM(units=128))
        model.add(tf.keras.layers.Dense(units=1, activation='sigmoid'))
        return model

    def train(self, X_train, y_train):
        self.model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
        self.model.fit(X_train, y_train, epochs=10, batch_size=32)

    def predict(self, X_test):
        return self.model.predict(X_test)

