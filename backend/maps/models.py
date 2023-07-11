
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
    ratings = models.ManyToManyField(settings.AUTH_USER_MODEL, through='Rating', related_name='locations', default=0)
    

    def __str__(self):
        return self.name
    
class Rating(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    location = models.ForeignKey(Location, on_delete=models.CASCADE)
    rating = models.PositiveIntegerField()

    def __str__(self):
        return f'{self.user.username} - {self.location.name}'

    
class Image(models.Model):
    location = models.ForeignKey(Location, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='images/')

    def __str__(self):
        return self.image.name