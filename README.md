# HSBC
This is code for Test 3 in React js.
Q. Using React.JS, build responsible survey form that does the following:
1.       Contains several fields of different types (include fields like PESEL, NIP, phone number)
2.       Validates entered data on the fly and shows error msgs
3.       Extends range fields to have additional elements improving usability (like slider etc)
4.       Submits the data to any of freely available noSQL databases or just into LocalStorage
5.       Outputs the results and allows to print those in print-friendly form.

About Project : - 
1.       It contains a survey form containing the below fields where validation is happening on every change event:- 
          a.First Name
          b.Last Name
          c.E mail Id
          d.Phone number
          e.Annual Income Slider
          f.PESEL Number(44051401458)
          g.NIP Number(222-222-22-22)

2.        The form is made by using React js and Redux.
3.        The code used Material UI Components to make fields more dynamic and impactful.
4.        The data enterd by user in form will be stored in store(Redux store).

About Components Folder : -
1.        BankForm => Container Component for the form and Print Preview Component.
2.        Form => Contains all form fields.
3.        PrintPreview => Contains print option and the list of all the data entered by the user.

About Redux : -
1.        Used Redux.js to store data in the store using Actions , Reducer and Store.

How to start the Project : -
1.        Download the project.
2.        Open cmd propmt in the folder.
3.        Run npm install.(This will install all the dependencies).
4.        Run npm start(Using Webpack).
5.        Launch http://localhost:8081.
