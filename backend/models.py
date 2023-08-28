
from django.db import models

class Audio(models.Model):
    title = models.CharField(max_length=100)
    duration = models.PositiveIntegerField()
    file = models.FileField(upload_to='audio_files/')

    def __str__(self):
        return self.title

class MLModel(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    file = models.FileField(upload_to='ml_models/')

    def __str__(self):
        return self.name

