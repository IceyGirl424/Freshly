from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .forms import SearchForm
from .models import Recipe
from serpapi import GoogleSearch


# Create your views here.
@login_required
def search(request):
    form = SearchForm()
    if request.method == 'POST':
        form = SearchForm(request.POST)
        if form.is_valid():
            query = form.cleaned_data['search_input']

            params = {
                "api_key": "e44dc59698bfd057e179e9f9cf8c58a2b9ebf833ab44c7490dfc2244035dc8b8",
                "engine": "google",
                "q": query,
                "google_domain": "google.com",
                "gl": "us",
                "hl": "en",
                "device": "desktop"
            }

            search = GoogleSearch(params)
            results = search.get_dict()
            recipies = results['recipes_results'][0]
            recipe = Recipe(title=recipies['title'], website=recipies['link'])
            recipe.save()
    return render(request, 'search.html', {'form': form})
