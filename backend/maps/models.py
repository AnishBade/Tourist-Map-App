
# Create your models here.
from django.conf import settings
from django.db import models
from django.contrib.gis.db import models


#our main location table
class Location(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200,null=True)
    coordinates = models.PointField()
    email = models.CharField(max_length=100,null=True)
    phone = models.CharField(max_length = 100,null=True)
    tourism = models.CharField(max_length=200,null=True)
    website = models.CharField(max_length=200,null=True)

    def __str__(self):
        return self.name