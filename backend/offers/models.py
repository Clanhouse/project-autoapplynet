from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver


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


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    first_name = models.CharField(max_length=64, blank=True)
    last_name = models.CharField(max_length=64, blank=True)
    resume = models.FileField(blank=True)

    def __str__(self):
        return self.user.username


@receiver(models.signals.post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
