from django.db import models


class Loop(models.Model):
    title = models.CharField(max_length=50, null=True, unique=True) #//! change to required 
    loop_data = models.CharField(max_length=500)
    owner = models.ForeignKey(
        'jwt_auth.User',
        related_name='created_meals',
        on_delete = models.CASCADE
    ) 
    # comments
    # likes
    # genre
    def __str__(self):
        return f"{self.title} by {self.owner}"
