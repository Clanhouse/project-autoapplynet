from django.urls import path
from .views import OfferList, ProfileDetail


urlpatterns = [
    path('offers/', OfferList.as_view()),
    path('profile/', ProfileDetail.as_view()),
]
