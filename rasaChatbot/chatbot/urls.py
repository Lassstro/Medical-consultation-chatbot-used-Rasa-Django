from django.urls import path, include
from .views import PatientList, PatientDetail, get_healthRecord, get_chatbot

urlpatterns = [
    path('', get_chatbot),
    path('healthRecord/', get_healthRecord),
    path('healthRecord/patients/', PatientList.as_view()),
    path('healthRecord/patients/<int:pk>/', PatientDetail.as_view()),
]

