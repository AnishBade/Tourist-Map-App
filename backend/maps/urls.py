from django.urls import path
from .views import LocationList
urlpatterns = [
# path("<int:pk>/", PostDetail.as_view(), name="post_detail"),
path("", LocationList.as_view(), name="location_list"),
]