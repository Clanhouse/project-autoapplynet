from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Offer
from .serializers import OfferSerializer


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
