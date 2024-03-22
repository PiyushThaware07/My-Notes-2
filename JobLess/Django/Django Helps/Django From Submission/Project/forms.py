from django import forms


class UsersForm(forms.Form):
    fname = forms.CharField(label="First Name", max_length=200, required=False, widget=forms.TextInput(attrs={
                            'class': 'form-control mb-3', 'placeholder': 'Enter First Name'}))  # name of the input field is firstName can be used to store in Database
    lname = forms.CharField(label="Last Name", max_length=200, required=True)
    # using widget you can convert input to textarea with addition of new attributes like adding custom classes.
    email = forms.EmailField(label="Email Address", required=False, widget=forms.Textarea(
        attrs={'class': 'form-control my-3'}))
    # label is like the content between the text like <p>Hello this is label</p>
    phone = forms.IntegerField(label="Phone No", required=False)
