from django.db import models


# Create your models here.
class CustomUser(models.Model):
    email = models.EmailField(max_length=50)
    password = models.CharField(max_length=50)
    birthday = models.DateField()
    phone_number = models.IntegerField()
    username = models.CharField(max_length=50)