# Generated by Django 4.1.7 on 2023-03-17 02:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("leaderboard", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="record",
            name="time",
            field=models.DateTimeField(auto_now=True, null=True),
        ),
    ]
