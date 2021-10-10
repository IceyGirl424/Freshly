from django.urls import path
from . import views


app_name = 'recipe'
urlpatterns = [
    path('search/', views.search, name="recipe"),
]