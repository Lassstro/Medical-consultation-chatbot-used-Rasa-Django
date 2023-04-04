from django.shortcuts import render
from .models import Patient
from .serializers import PatientSerializer
from rest_framework import generics

class PatientList(generics.ListCreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

class PatientDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

def get_healthRecord(request):
    return render(request, 'healthRecord.html')

def get_chatbot(request):
    return render(request, 'chatbot.html')
