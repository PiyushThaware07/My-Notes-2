from django.db import models

# Create your models here.
'''class table_name(models.Model <-- inheritance): '''
class Product(models.Model):
    product_id = models.AutoField
    product_name = models.CharField(max_length=50)
    category = models.CharField(max_length=50,default="")
    subcategory = models.CharField(max_length=50,default="")
    price = models.IntegerField(default=0)
    desc = models.CharField(max_length=300)
    pub_date = models.DateField()
    image = models.ImageField(upload_to="shop/images",default="")

    # Used to shop name of data in database
    def __str__(self):
        return self.product_name

class Contact(models.Model):
    msg_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=15)
    email = models.CharField(max_length=70,default="")
    phone = models.CharField(max_length=10,default="")
    desc = models.CharField(max_length=700,default="")
    
    def __str__(self):
        return self.name
    
class Orders(models.Model):
    order_id = models.AutoField(primary_key=True)
    items_json = models.CharField(max_length=5000)
    amount = models.IntegerField(default=0)
    name =models.CharField(max_length=20)
    email =models.CharField(max_length=20)
    address =models.CharField(max_length=100)
    city =models.CharField(max_length=20)
    state =models.CharField(max_length=50)
    zip_code =models.CharField(max_length=10)
    phone =models.CharField(max_length=10,default="")

    def __str__(self):
        return self.name

class OrderUpdate(models.Model):
    update_id = models.AutoField(primary_key=True)
    order_id = models.IntegerField(default='')
    update_desc = models.CharField(max_length=5000)
    timestamp = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.update_desc[0:7]+"..."        