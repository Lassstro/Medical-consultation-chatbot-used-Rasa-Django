from django.db import models

class Patient(models.Model):
    GENDER_CHOICES = (
        ('M', 'Nam'),
        ('F', 'Nữ'),
    )
    ss_code = models.CharField(max_length=20)
    full_name = models.CharField(max_length=200)
    sex = models.CharField(max_length=1, choices=GENDER_CHOICES)
    birth_day = models.DateField()
    address = models.CharField(max_length=200)
    primary_healthcare = models.CharField(max_length=200)
    first_date_use = models.DateField()
    last_date_use = models.DateField()