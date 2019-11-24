---
layout: default
prevPage: pages/developing/image-resources
nextPage: pages/developing/to-do-form
slug:
    - label: Developing the Application
      url: pages/developing/intro
    - Views
---

{::options parse_block_html="true" /}

<div class="panel panel-info">
**Views**
{: .panel-heading}
<div class="panel-body">

Views are a combination of a definition of:
- an index for the database (or multiple indexes, if you have re-sortable columns).
- a user interface for displaying the entries in that index.

</div>
</div>

### Updating Existing Views
1. In the Applications view of Domino Designer, double-click on the Views part in the To Do application.
1. Double-click on the "completeView" view to open it.
1. Open the View Properties box by either clicking the "View/Folder Properties" button, pressing Alt + Enter, or double-clicking a column header and changing the filter at the top from "Column" to "View".
1. Switch to the second tab, "Options" with the "i" icon.
1. Change the "On Refresh" combo box option to "Refresh Display".   
    ![Refresh Display]({{site.baseurl}}/images/developing-views-refresh.png "Refresh Display"){: .shadow}

    The application will be used offline on HCL Nomad and the views should automatically update as soon as changes are made. For this reason the views will be set to refresh the display whenever refreshing is needed.
    {: .why #why1}
1. Switch to the third tab, "Style" with the gradient icon.
1. In the "Header" section, change the style to "Simple".   
    ![Header]({{site.baseurl}}/images/developing-views-header.png "Header"){: .shadow}
1. Click on the Color combo box and, in the popup, click on the colour picker.
    ![Colour]({{site.baseurl}}/images/developing-views-color.png "Colour"){: .shadow}
1. Enter the RGB values to correspond to the hex colour used on the Completed images - 29, 181, 54.    
    ![Colour Picker]({{site.baseurl}}/images/developing-views-color-picker.png "Colour Picker"){: .shadow}

    For an advanced challenge, try to save the colours as custom colours for future use.
    {: .advanced #advanced1}
1. Save and close the view.
1. Repeat for each of the other views except for the column header colours which should be:
    - incompleteView - RGB 45, 114, 173
    - overdueView - RGB 255, 0, 0
    - todosView - RGB 192, 192, 192
    - urgentView - RGB 252, 186, 3

    The colours for the column headers will reinforce which view the user is currently in.
    {: .why #why2}
1. Change the View Selection formula for urgentView to `@Now <= duedate`.

    To Dos will be marked as urgent if completion is due within the next three days. This ensures a To Do is still urgent on a Friday if due for completion on the following Monday.
    {: .why #why3}
1. In the todosView, change the column value for the Complete column. Change the radio button from "field" to "formula" and enter the formula `@If(complete="true";84;83)`. Save and close the view.
1. Double click on the column header for Complete to bring up the properties box. Change the column width to 6.
1. Put a tick in "Display values as icons". Save and close the view.
    ![ToDos view]({{site.baseurl}}/images/developing-views-complete.png "ToDos view"){: .shadow}

    This will give a "thumbs up" icon if the To Do is completed, a "thumbs down" icon if it's not.
    {: .why #why3}
<br/>

@Now has a performance hit, because each entry needs regular recalculation against the current time. To take it further, think about another @Formula that could be used to ensure less frequent recalculations. As a much more advanced step, you could think about how to change the View Selection formulas for overdueView and urgentView to avoid using any time-specific @Formulas.
{: .advanced #advanced1}

### Create Calendar View

<div class="panel panel-info">
**Calendar Views**
{: .panel-heading}
<div class="panel-body">

Notes has a special view type that displays a calendar view in Notes and Nomad clients. It is set up with specific settings. The key one of those is that the first column must be a date-time sorted ascending.

</div>
</div>
1. Click the "New View" button and name the view "calendarView". Leave all other settings at default and click OK.

    ![Calendar view]({{site.baseurl}}/images/developing-calendar-view.png "Calendar view"){: .shadow}
1. Open the View Properties and change the Style to "Calendar".

    ![Calendar view property]({{site.baseurl}}/images/developing-calendar-view-property.png "Calendar view property"){: .shadow}
1. Change the View Selection from "Simple Search" to "Formula" and set it to `SELECT (form = "todo")`.
1. Switch to the second tab, "Options" with the "i" icon, and change the "On Refresh" combo box option to "Refresh Display".
1. Switch to the third tab, "Style" with the gradient icon.
1. In the "Header" section, change the style to "Tabs".   
    ![Tabs]({{site.baseurl}}/images/developing-calendar-view-style.png "Tabs"){: .shadow}
1. Create a column with the title "Due". On the second tab, "Sorting" with two-way vertical arrows, set the Sort to Ascending. Set the column value to be a field, `duedate".
1. Create the following additional columns, in order:
    - To-Do, with the column value for the field `name`.
    - Author, with the column value for a "Simple Function", `Author(s) (Simple Name)`.
    - Prority, with the column value for the field `priority`.
    - Completed, with the column value for the formula `@If(complete="true";84;83)`. Open the Column properties box and tick "Display values as icons". Save and close the view.