from rest_framework import serializers
from .models import Offer, Application


class OfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offer
        fields = (
            'id',
            'url',
            'title',
            'company_name',
            'city',
            'experience_level',
            'salary_min',
            'salary_max',
            'remote',
            'active'
        )


class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = (
            'id',
            'user',
            'offer',
            'date'
        )
