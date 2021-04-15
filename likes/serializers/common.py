from rest_framework import serializers 
from ..models import Loop 

class LikeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Like
        fields = '__all__'