# Generated by Django 4.1 on 2022-08-14 15:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_post_slug_alter_post_author_alter_post_timestamp_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='slug',
            field=models.CharField(max_length=130),
        ),
    ]
