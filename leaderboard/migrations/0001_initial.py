# Generated by Django 4.1.7 on 2023-03-12 14:47

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("wordle", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="Record",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("result", models.BooleanField(null=True)),
                ("tries", models.PositiveSmallIntegerField(null=True)),
                (
                    "user",
                    models.ForeignKey(
                        db_column="user",
                        null=True,
                        on_delete=django.db.models.deletion.DO_NOTHING,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
                (
                    "word",
                    models.ForeignKey(
                        db_column="word",
                        on_delete=django.db.models.deletion.CASCADE,
                        to="wordle.word",
                    ),
                ),
            ],
        ),
    ]
