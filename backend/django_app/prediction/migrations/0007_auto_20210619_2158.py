# Generated by Django 3.0.5 on 2021-06-19 16:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('prediction', '0006_auto_20210619_2156'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='pid',
            field=models.AutoField(primary_key=True, serialize=False, unique=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='uid',
            field=models.AutoField(primary_key=True, serialize=False, unique=True),
        ),
    ]
