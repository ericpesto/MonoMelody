from rest_framework.views import APIView
from rest_framework.response import Response 
from rest_framework import status 
from rest_framework.exceptions import NotFound, PermissionDenied
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from .models import Like

class LikeHandler(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, pk):
        request.data["owner"] = request.user.id
        like_to_add = LikeSerializer(data=request.data)
        if like_to_add.is_valid():
            like_to_add.save()
            return Response(like_to_add.data, status=status.HTTP_200_OK )
        # Get loop likes 
        # check if theres a like with owner = to rerequest owner
        # if true like.delete()
        # elis like.save()
        # like_to_add 
        # print('request.user.id: 🟥', request.user.id, ow)
        return Response(status=status.HTTP_422_UNPROCESSABLE_ENTITY )