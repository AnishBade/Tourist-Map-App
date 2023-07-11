from django.contrib import admin
from .models import Location,Rating, Image
# Register your models here.

admin.site.register(Location)
admin.site.register(Rating)
admin.site.register(Image)