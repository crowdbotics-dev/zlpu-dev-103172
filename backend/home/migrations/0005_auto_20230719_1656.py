# Generated by Django 2.2.28 on 2023-07-19 16:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_auto_20230719_1652'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cswd',
            name='dsfsf',
        ),
        migrations.AddField(
            model_name='cswd',
            name='dsfsf89',
            field=models.BigIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='cswd',
            name='bxbx',
            field=models.BigIntegerField(blank=True),
        ),
        migrations.AlterField(
            model_name='cswd',
            name='xvxbxb',
            field=models.BigIntegerField(blank=True),
        ),
    ]
