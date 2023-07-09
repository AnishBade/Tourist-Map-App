
# Create your models here.
from django.conf import settings
from django.db import models
from django.contrib.gis.db import models


class Location(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    coordinates = models.PointField()

    def __str__(self):
        return self.name