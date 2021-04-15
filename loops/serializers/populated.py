# from comments.serializers.populated import PopulatedCommentSerializer
# from dietary_restrictions.serializers.common import DietaryRestrictionSerializer
# from ..serializers.common import MealSerializer

# class PopulatedMealSerializer(MealSerializer):

#     comments = PopulatedCommentSerializer(many=True)
#     dietary_restrictions = DietaryRestrictionSerializer(many=True)
#     owner = UserSerializer()


from jwt_auth.serializers.common import UserSerializer
from ..serializers.common import LoopSerializer
class PopulatedLoopSerializer(LoopSerializer):
    owner = UserSerializer()
