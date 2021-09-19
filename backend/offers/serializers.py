from rest_framework import serializers
from .models import Offer


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
