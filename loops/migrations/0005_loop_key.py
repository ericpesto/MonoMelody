# Generated by Django 3.2 on 2021-04-18 14:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('loops', '0004_loop_effect'),
    ]

    operations = [
        migrations.AddField(
            model_name='loop',
            name='key',
            field=models.CharField(default='c', max_length=10),
        ),
    ]
