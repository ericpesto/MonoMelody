# Generated by Django 3.2 on 2021-04-15 19:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('genres', '0001_initial'),
        ('loops', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='loop',
            name='genres',
            field=models.ManyToManyField(related_name='loops', to='genres.Genre'),
        ),
    ]
