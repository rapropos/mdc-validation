This project was created to demonstrate a problem with
[@angular-mdc/web PR #1491](https://github.com/trimox/angular-mdc-web/pull/1491)
affecting field validation with reactive forms.

The main page contains a text field and a button. The text
field binds to a form control whose value is required. The
button should only be enabled when the form passes validation.
Thus, entering anything in the text field *should* enable the
button. However, it does not, and some other event, such as
a click elsewhere on the page, is required to tickle the button
into becoming enabled.

I believe this to be a regression, for downgrading @angular-mdc/web
to 0.40.2 restores the previous and expected behavior, as does
surgically using git revert to undo this one particular commit
while leaving the rest of the changes from 0.40.2 to 0.41.0-pre1
intact.
