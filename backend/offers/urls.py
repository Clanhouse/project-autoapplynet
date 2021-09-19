from django.urls import path
from .views import OfferList


urlpatterns = [
    path('offers/', OfferList.as_view()),
]
