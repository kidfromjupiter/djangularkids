from django.db import models
import uuid
# Create your models here.
class Song(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255)
    lyrics = models.JSONField()
    artist = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)