from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Offer, Profile
from .serializers import OfferSerializer, ProfileSerializer


class OfferList(APIView):

    def get(self, request):
        offers = Offer.objects.all()
        serializer = OfferSerializer(offers, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = OfferSerializer(data=request.data)
        if serializer.is_valid():
            sd = serializer.validated_data
            print(sd)
            try: 
                Offer.objects.get(
                    title=sd["title"],
                    company_name=sd["company_name"],
                    city=sd["city"]
                )
            except Offer.DoesNotExist:
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            
            return Response({"response": "Offer already exists."}, status=status.HTTP_409_CONFLICT)
            
        return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)


class ProfileDetail(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        profile = request.user.profile
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)
