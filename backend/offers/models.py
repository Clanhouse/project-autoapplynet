from django.db import models


class Offer(models.Model):
    url = models.URLField(max_length=256)
    title = models.CharField(max_length=256)
    company_name = models.CharField(max_length=256)
    city = models.CharField(max_length=256)
    exp_level_choices = [
        ('T', 'Trainee'),
        ('J', 'Junior'),
        ('M', 'Mid'),
        ('S', 'Senior'),
        ('E', 'Expert')
    ]
    experience_level = models.CharField(max_length=1, choices=exp_level_choices, blank=True) 
    salary_min = models.IntegerField(blank=True, null=True)
    salary_max = models.IntegerField(blank=True, null=True)
    remote = models.BooleanField()
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.title