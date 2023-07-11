from rest_framework import serializers
from .models import Location, Rating, Image


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            "id",
            "name",
            "coordinates",
            "email",
            "phone",
            "tourism",
            "website",
            "ratings",
        )
        model = Location

# class LocationSerializer(serializers.ModelSerializer):
#     class Meta:
#         fields = (
#             "id",
#             "name",
#             "coordinates",
#             "email",
#             "phone",
#             "tourism",
#             "website",
#             "ratings",
#         )
#         model = Location