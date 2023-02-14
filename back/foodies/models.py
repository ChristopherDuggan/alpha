from django.db import models

# Create your models here.

class Post(models.Model):
    user_id = models.IntegerField()
    image = models.TextField(default=None)
    title = models.CharField(max_length=75)

    def _str__(self):
        return self.title
