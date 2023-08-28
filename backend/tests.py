import unittest
from django.test import TestCase
from .models import AudioModel

class AudioModelTestCase(TestCase):
    def setUp(self):
        AudioModel.objects.create(title="Test Audio", duration=120, file="test_audio.mp3")

    def test_audio_model_creation(self):
        audio = AudioModel.objects.get(title="Test Audio")
        self.assertEqual(audio.duration, 120)
        self.assertEqual(audio.file, "test_audio.mp3")