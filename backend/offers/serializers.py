from rest_framework import serializers
from .models import Offer, Profile


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


class ProfileSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='user.username')
    class Meta:
        model = Profile
        fields = (
            'id',
            'username',
            'first_name',
            'last_name',
            'resume',
        )
