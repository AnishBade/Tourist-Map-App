# Generated by Django 4.2.3 on 2023-07-08 03:48

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("maps", "0001_initial"),
    ]

    operations = [
        migrations.RenameModel(
            old_name="Post",
            new_name="Location",
        ),
    ]
