import unittest
from AIComponent.models.nlp_model import NLPModel

class TestNLPModel(unittest.TestCase):
    def setUp(self):
        self.nlp_model = NLPModel()

    def test_model_prediction(self):
        input_text = "This is a test sentence."
        expected_output = "This is the predicted label."
        predicted_output = self.nlp_model.predict(input_text)
        self.assertEqual(predicted_output, expected_output)

    def test_model_training(self):
        training_data = ["This is sentence 1.", "This is sentence 2."]
        labels = ["Label 1", "Label 2"]
        self.nlp_model.train(training_data, labels)
        self.assertTrue(self.nlp_model.is_trained)

if __name__ == '__main__':
    unittest.main()