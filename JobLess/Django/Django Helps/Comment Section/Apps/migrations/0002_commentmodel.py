# Generated by Django 4.1 on 2023-01-11 15:31

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Apps', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CommentModel',
            fields=[
                ('comment_id', models.AutoField(primary_key=True, serialize=False)),
                ('comment_date_time', models.DateField(auto_now_add=True)),
                ('comment_message', models.TextField()),
                ('get_post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Apps.post')),
                ('reply_on_comment', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='Apps.commentmodel')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
