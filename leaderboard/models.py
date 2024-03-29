from django.db import models
from accounts.models import User
from wordle.models import Word

class Record(models.Model):
    word = models.ForeignKey(Word, db_column="word", on_delete=models.CASCADE, null=False)
    result = models.BooleanField(null=True)
    tries = models.PositiveSmallIntegerField(null=True)
    user = models.ForeignKey(User, db_column="user", on_delete=models.DO_NOTHING, null=True)
    time = models.DateTimeField(auto_now=True, null=True)
    guess1 = models.CharField(max_length=5, null=True)
    guess2 = models.CharField(max_length=5, null=True)
    guess3 = models.CharField(max_length=5, null=True)
    guess4 = models.CharField(max_length=5, null=True)
    guess5 = models.CharField(max_length=5, null=True)
    guess6 = models.CharField(max_length=5, null=True)