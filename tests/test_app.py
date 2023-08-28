import unittest
from app import app

class TestMemoryBankModule(unittest.TestCase):

    def setUp(self):
        app.testing = True
        self.app = app.test_client()

    def test_index(self):
        response = self.app.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b"Welcome to Memory Bank Module", response.data)

    def test_add_memory(self):
        response = self.app.post('/add_memory', data=dict(
            memory="Test Memory"
        ), follow_redirects=True)
        self.assertEqual(response.status_code, 200)
        self.assertIn(b"Memory added successfully", response.data)

    def test_get_memory(self):
        response = self.app.get('/get_memory')
        self.assertEqual(response.status_code, 200)
        self.assertIn(b"Test Memory", response.data)

if __name__ == '__main__':
    unittest.main()