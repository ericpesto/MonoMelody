# Generated by Django 3.2 on 2021-04-16 14:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('loops', '0005_alter_loop_loop_data'),
    ]

    operations = [
        migrations.AlterField(
            model_name='loop',
            name='loop_data',
            field=models.JSONField(),
        ),
    ]
