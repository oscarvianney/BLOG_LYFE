from django.urls import path
from .views import BlogPostListView, BlogPostDetailView, BlogPostFeaturedView, BlogPostCategory

urlpatterns = [
    path('', BlogPostListView.as_view()),
    path('<slug>', BlogPostDetailView.as_view()),
    path('featured', BlogPostFeaturedView.as_view()),
    path('category', BlogPostCategory.as_view()),
]
