from django.db import models

# Create your models here.


class Recipe(models.Model):
    title = models.CharField(max_length=200)
    website = models.CharField(max_length=200)
    date_created = models.DateField(auto_now=True)
