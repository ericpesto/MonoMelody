# Generated by Django 3.2 on 2021-04-16 16:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('loops', '0013_loop_genres'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='loop',
            name='genres',
        ),
    ]
