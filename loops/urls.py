from django.urls import path
from .views import LoopListView

urlpatterns = [
    path('', LoopListView.as_view())
]
