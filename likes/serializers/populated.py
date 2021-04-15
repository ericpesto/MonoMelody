from comments.serializers.populated import PopulatedCommentSerializer
from jwt_auth.serializers.common import UserSerializer
from ..serializers.common import LoopSerializer

class PopulatedLikeSerializer(LoopSerializer):
    owner = UserSerializer()
    # comments = PopulatedCommentSerializer(many=True)
    
