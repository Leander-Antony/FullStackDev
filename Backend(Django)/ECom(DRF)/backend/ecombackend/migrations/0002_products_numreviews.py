# Generated by Django 5.1.3 on 2024-12-01 08:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecombackend', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='products',
            name='numReviews',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]
