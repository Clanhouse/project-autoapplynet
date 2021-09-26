from django.urls import path
from .views import OfferList, OfferApply, ApplicationHistory


urlpatterns = [
    path('offers/', OfferList.as_view()),
    path('profile/applied/', ApplicationHistory.as_view()),
    path('apply/', OfferApply.as_view()),
]
