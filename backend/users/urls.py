from django.urls import path
from .views import UserDetailView


urlpatterns = [
    path('profile/', UserDetailView.as_view()),
]
