---
layout: default
prevPage: pages/developing/views
nextPage: pages/developing/dashboard-form
slug:
    - label: Developing the Application
      url: pages/developing/intro
    - To Do Form
---

{::options parse_block_html="true" /}

<div class="panel panel-info">
**Forms**
{: .panel-heading}
<div class="panel-body">

The "todo" Form already exists. Although a Form is not needed for XPages, it sort of creates a documented schema. For Nomad and desktop clients it creates both a soft schema (programmatically that schema can still be amended) and a user interface for creating documents based on that schema.

</div>
</div>

### Creating the Table
1. In the Applications view of Domino Designer, double-click on the Forms part in the To Do application.
1. Double-click on the "todo" form to open it.
1. Add two new lines after the fields.
1. Open the text properties by either clicking the "Text Properties" button, pressing Ctrl + k or using the menu option Text > Text Properties.
1. Change the font to Verdana and the font size to 12. Note, there are also toolbar options for changing the font and setting the font size. These can be used instead.
1. Create a new table using the "Insert Table" button or the menu option Create > Table....
1. Create the table with 2 rows, 2 column, and Table Width set to "Fit with margins".
    ![Insert Table]({{site.baseurl}}/images/developing-todo-form-table.png "Insert Table")
1. Open the table properties by either clicking the "Table Properties" button or using the menu option Table > Table Properties.
1. Click into the first cell in the table. Change the first column width to 3.75cm, fixed width.
    ![Table Properties]({{site.baseurl}}/images/developing-todo-form-table.png "Table Properties")

    On the Table Properties, the cell settings are driven by the active cell, the cell the cursor is in.
    {: .why #why1}
1. Select all cells in the first column. In Text Properties box, set the font weight to "Bold". On the second tab, the Spacing for "Above" and "Below" to "1 1/2". On the third tab, set the left margin to 0.2cm. This is likely to get changed to 0.199cm.
1. Select all cells in the second column. In Text Properties box, on the second tab, the Spacing for "Above" and "Below" to "1 1/2". On the third tab, set left margin to 0.2cm.

### Populating the Table
1. Type the following text as labels in the first column - Status, Author, Task Name, Description, Due, Priority.

    ![Labels]({{site.baseurl}}/images/developing-todo-form-labels.png "Labels")
1. Click into the blank cell on the first row. Use the menu option Create > Image Resource... and enter any image.
1. From the menu select Picture > Picture Properties. Click the "@" button to compute the picture. In the popup that appears enter the following formula, then click OK
    {% raw %}
    ~~~
    @If(completed="true";"complete-doc.png";duedate<@Today;"overdue-doc.png";duedate <= @Adjust(@Today;0;0;3;0;0;0);"urgent-doc.png";"incomplete-doc.png")
    ~~~
    {: .code #code1}
    {% endraw %}
    
    ![Computed Image]({{site.baseurl}}/images/developing-todo-form-computed-image.png "Computed Image")

    The formula determines which image to display. If the value of the `completed` field is `true`, the "complete-doc.png" image is displayed. If the `duedate` field is before today, the "overdue-doc.png" image is displayed. If the `duedate` field is within the last 3 days, "urgent-doc.png" is displayed. Otherwise the "incomplete-doc.png" is displayed.
    {: .why #why2}
1. Select the whole of the first row and open Text Properties. On the Paragraph Hide When tab, put a tick in "Hide paragraph if formula is true" and enter the formula `@IsNewDoc`.
    ![Hide When]({{site.baseurl}}/images/developing-todo-form-status.png "Hide When")
1. Click into the blank cell of the second row. Use the menu option Create > Computed Text.... The font settings will go back to default, so change the font to "Verdana" and the font size to 12.
1. In the value, enter the formula `@Name([CN];@Subset(@Author;1))`.
    
    ![Computed Text]({{site.baseurl}}/images/developing-todo-form-computed-text.png "Computed Text")
1. Cut and paste the `name`, `description`, `duedate`, and `priority` fields into the remaining cells. One should be on each row, on the row for the relevant label. The text properties of the cells will be changed to the settings of the original fields. So select all four cells and open up the Text Properties. Change the font to "Verdana", the font size to 12 and the Spacing for "Above" and "Below" to "1 1/2".
1. Double-click on the `duedate` field. Change the Style to "Calendar/Time control", with Size set to 3.5cm width and 1cm height.
    
    ![Duedate]({{site.baseurl}}/images/developing-todo-form-duedate.png "Duedate field")
1. Double-click on the `priority` field. Change the Type from "Text" to "Combobox". On the second tab, change the Border Style to "None" and enter the choices (one on each line) as Low, Medium, High.
    
    ![Priority]({{site.baseurl}}/images/developing-todo-form-priority.png "Priority field")

The "todo" Form should look like this:
![ToDo Form]({{site.baseurl}}/images/developing-todo-form-troubleshoot.png "ToDo Form")

### Adding the Buttons

1. Add a blank line after the table before adding the buttons. From the menu select Create > Image Resource... and insert "button-save.png". Add two spaces and repeat, inserting "button-cancel.png".
1. Highlight the button-save.png image. From the menu select Create > Hotspot > Action Hotspot.... By default, a green border will be added around the hotspot. Remove it by removing the tick from "Show border around hotspot". Enter the following code as the click formula:
    {% raw %}
    ~~~
    @Command([FileSave]);
    @Command([EditDocument];"0");
    @Command([RefreshWindow])
    ~~~
    {: .code #code2}
    {% endraw %}
    
    ![Hotspot]({{site.baseurl}}/images/developing-todo-form-hotspot.png "Hotspot")

    The formula saves the document, changes edit mode to "0" (false), and refreshes the window, the current tab of HCL Nomad.
    {: .why #why3}
1. Repeat for the button-cancel.png image, this time using the code `@If(@IsNewDoc;@Command([FileCloseWindow]);@Command([EditDocument];"0"))`. For a new document the code needs to close it without saving, otherwise change edit mode to false.
1. On the next line add the "button-edit.png" and "button-delete.png" image resources.
1. Add a hotspot around the button-edit.png with the code `@Command([EditDocument])`. Because the default value for the second parameter is "1", there is no need to specify the edit mode to apply.
1. Add a hotspot around the button-delete.png with the code:
    {% raw %}
    ~~~
    @Command([Clear]);
    @Command([RefreshWindow])
    ~~~
    {: .code #code3}
    {% endraw %}

    @Commands are used to perform actions, with the relevant action in square brackets. Other @Functions that are intended to return a value just begin with "@" symbol, like `@IsNewDoc.
    {: .why #why4}
1. On the next line add the button-mark-complete.png image resource and add a hotspot around it. This time Formula Language is not enough. Change the language from "Formula" to "LotusScript" and enter the following code:
    {% raw %}
    ~~~vb
    Sub Click(Source As Button)
        Dim ws As New NotesUIWorkspace
	    Dim uidoc As NotesUIDocument
	    Dim doc As NotesDocument
        Set uidoc = ws.CurrentDocument
	    Set doc = uidoc.Document
        doc.completed="true"
	    Call doc.save(True, False)
	    Call ws.ReloadWindow
    End Sub
    ~~~
    {: .code #code4}
    {% endraw %}

    Because the completed status will be changed from read mode, LotusScript must be used. Variables are declared using the `Dim` keyword, with the top-level object initialised at the same time as `New`. The code gets the back-end version of the current document, sets its `completed` field to "true", and performs a save. Finally the `ReloadWindow` command is run, corresponding to `@Command([RefreshWindow])`.
    {: .why #why5}
1. On the next line add the button-mark-incomplete.png image resource and add a hotspot around it. Again, change the language from "Formula" to "LotusScript" and enter the following code:
    {% raw %}
    ~~~vb
    Sub Click(Source As Button)
        Dim ws As New NotesUIWorkspace
	    Dim uidoc As NotesUIDocument
	    Dim doc As NotesDocument
        Set uidoc = ws.CurrentDocument
	    Set doc = uidoc.Document
        doc.completed="false"
	    Call doc.save(True, False)
	    Call ws.ReloadWindow
    End Sub
    ~~~
    {: .code #code5}
    {% endraw %}
1. To set which buttons appear when, click onto the line with Save and Cancel. Open up the Text Properties and go to the penultimate tab, Paragraph Hide When. In the "Hide paragraph when document is" section, tick all entries except "Previewed for editing" and "Opened for editing".
    
    ![Hide-when]({{site.baseurl}}/images/developing-todo-form-save-hide-when.png "Hide-when")
1. Click onto the line with Edit and Delete. Open up the Text Properties and go to the penultimate tab, Paragraph Hide When. In the "Hide paragraph when document is" section, tick all entries except "Previewed for reading" and "Opened for reading".
1. Click onto the line with Mark Complete. Open up the Text Properties and go to the penultimate tab, Paragraph Hide When. In the "Hide paragraph when document is" section, tick all entries except "Previewed for reading" and "Opened for reading". In addition, add a tick in "Hide paragraph if formula is true" and enter the formula `completed="true"` in the area for the hide-when formula.
    
    ![Complete Hide-when]({{site.baseurl}}/images/developing-todo-form-mark-complete-hide-when.png "Complete Hide-when")
1. Click onto the line with Mark Incomplete. Open up the Text Properties and go to the penultimate tab, Paragraph Hide When. In the "Hide paragraph when document is" section, tick all entries except "Previewed for reading" and "Opened for reading". In addition, add a tick in "Hide paragraph if formula is true" and enter the formula `completed="false"` in the area for the hide-when formula.

    A hide-when formula applies to everything on the same line or, in a table, everything on the whole line in the cell. Saving should only be allowed if the document is being edited, so it is hidden if in read mode. Similarly editing, deleting and marking complete / incomplete should only be allowed if the document is being edited, so it is hidden if in edit mode. And marking complete should only be allowed if it's not already complete, so it is hidden if complete is "false". And vice versa for marking incomplete.
    {: .why #why6}

You can check the form in isolation by clicking the "Preview in Notes" button or the menu option "Design > Preview in Notes".
{: .troubleshoot #troubleshoot1}
<br/>

<div class="panel panel-success">
**Congratulations!**
{: .panel-heading}
<div class="panel-body">

You have now set up the editable Form for To Dos.

</div>
</div>