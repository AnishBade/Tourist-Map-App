# Generated by Django 4.2.3 on 2023-07-08 02:35

import django.contrib.gis.db.models.fields
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Post",
            fields=[
                ("id", models.AutoField(primary_key=True, serialize=False)),
                ("name", models.CharField(max_length=50)),
                (
                    "coordinates",
                    django.contrib.gis.db.models.fields.PointField(srid=4326),
                ),
            ],
        ),
    ]