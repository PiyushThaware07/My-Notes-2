# Generated by Django 4.1.6 on 2023-07-02 22:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Apps', '0008_alter_project_duration'),
    ]

    operations = [
        migrations.CreateModel(
            name='Portfolio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstName', models.CharField(max_length=254)),
                ('lastName', models.CharField(max_length=254)),
                ('profilePictureUrl', models.FileField(blank=True, upload_to='portfolio/')),
                ('description', models.TextField()),
                ('short_desc', models.TextField()),
                ('facebook_url', models.URLField()),
                ('instagram_url', models.URLField()),
                ('snapchat_url', models.URLField()),
                ('github_url', models.URLField()),
                ('linkedin_url', models.URLField()),
                ('email_url', models.URLField()),
            ],
        ),
    ]
