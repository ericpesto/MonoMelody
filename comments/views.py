from rest_framework.views import APIView
from rest_framework.response import Response 
from rest_framework import status 
from rest_framework.exceptions import NotFound, PermissionDenied
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated

from .serializers.common import CommentSerializer
from .serializers.populated import PopulatedCommentSerializer
from .models import Comment 

# Create your views here.

class CommentListView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get(self, _request):
        comments = Comment.objects.all()
        serialized_comments = PopulatedCommentSerializer(comments, many=True)
        return Response(serialized_comments.data, status=status.HTTP_200_OK)


    permission_classes = (IsAuthenticated,)

    def post(self, request):
        request.data["owner"] = request.user.id
        comment_to_create = CommentSerializer(data=request.data) 
        if comment_to_create.is_valid():
            comment_to_create.save()
            return Response(comment_to_create.data, status=status.HTTP_201_CREATED)
        return Response(comment_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)