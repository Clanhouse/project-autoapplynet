from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Offer, Profile, Application
from .serializers import OfferSerializer, ProfileSerializer, ApplicationSerializer
from .permissions import IsStaffOrReadOnly


class OfferList(APIView):
    permission_classes = [IsStaffOrReadOnly]

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


class OfferApply(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        user = request.user.profile
        offer_id = request.data['offer_id']
        try:
            offer = Offer.objects.get(pk=offer_id)
        except Offer.DoesNotExist:
            return Response({"reponse": "No such offer."}, status=status.HTTP_404_NOT_FOUND)
        if not offer.active:
            return Response({"response": "Offer is innactive."}, status=status.HTTP_400_BAD_REQUEST)
        application = Application.objects.create(user=user, offer=offer)
        serializer = ApplicationSerializer(application)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
