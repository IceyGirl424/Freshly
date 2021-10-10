from django.shortcuts import render, redirect
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login as login_user
from .forms import RegisterForm
from .models import CustomUser

# Create your views here.


def home(request):
    return render(request, 'home.html', {})


def login(request):
    form = AuthenticationForm()
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            user = CustomUser.objects.get(username=form.cleaned_data['username'])
            login_user(request, user)
            return redirect('/')
    return render(request, 'login.html', {'form': form})


def signup(request):
    form = RegisterForm()

    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
    return render(request, 'signup.html', {'form': form})
