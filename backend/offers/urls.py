from django.urls import path
from .views import OfferList, ProfileDetail, OfferApply


urlpatterns = [
    path('offers/', OfferList.as_view()),
    path('profile/', ProfileDetail.as_view()),
    path('apply/', OfferApply.as_view()),
]
