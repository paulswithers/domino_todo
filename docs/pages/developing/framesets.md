---
layout: default
prevPage: pages/developing/dashboard-form
nextPage: pages/nomad
slug:
    - label: Developing the Application
      url: pages/developing/intro
    - Framesets
---

{::options parse_block_html="true" /}

<div class="panel panel-info">
**Framesets**
{: .panel-heading}
<div class="panel-body">

Framesets are used to create a layout with multiple design elements - Pages, Forms, Views etc.

</div>
</div>

### Creating the Mobile Frameset
1. In the Applications view of Domino Designer, double-click on the Frameset part in the To Do application.
1. Click the "New Frameset" button. Set the name to "mobile", leaving the number of frames at 2 but selecting the second option for layout - a large left frame and a small right frame.
    ![Mobile Frameset]({{site.baseurl}}/images/developing-frameset-mobile.png "Mobile Frameset")
1. From the menu select Frame > Frame Properties. For the first frame, set the Name as "dashboard", the Content as "Named Element" and "Form", the "dashboard" Form.

    ![Dashboard Frame]({{site.baseurl}}/images/developing-frameset-dashboard-frame.png "Dashboard Frame")
1. On the second tab, set the width to 68 Relative.
1. On the third tab, take the tick out of "Border width" and change the height to 0 pixels.
1. Change the focus to the right frame. Set the Name to "NotesPreview" and, on the second tab, change the width to 32 Relative.

    "NotesPreview" is a reserved name for a frame designed for previewing a document.
    {: .why #why1}
1. Change the focus to the left frame. Click the "Split into Rows" button.
1. Select the top frame and change the height to 28 Relative.
1. Select the bottom frame and change the height to 62 Relative.
1. Set the Name to "view", the Content as "Named Element" and "View", and click the "@" button. Enter the following formula:
    {% raw %}
    ~~~
    vw:=@Environment("ToDo_View");
    @If(vw="";"todosView";vw)
    ~~~
    {: .code #code1}
    {% endraw %}

    ![View Frame]({{site.baseurl}}/images/developing-frameset-view-frame.png "View Frame")

    The view to show will be based on the environment variable. But the first time the application is opened, the environment variable will not be set, so we set a default. 
    {: .why #why2}
1. Set the "Default target for links in frame" to NotesPreview.
1. Take the tick out of "Show action bar".

You can check the frameset by clicking the "Preview in Notes" button or the menu option "Design > Preview in Notes". **Note:** a scroll bar will appear for the top frame in the desktop Notes Client, but this is because the Form content doesn't fit for Notes Client. No scroll bar will appear on HCL Nomad.
{: .troubleshoot #troubleshoot1}

### Creating the Main Frameset

Although this Frameset could be used for HCL Nomad and Notes Client, the intention of this tutorial was to design a UI specifically for HCL Nomad. In order to do this, a holding Frameset is needed. If you opened the application in Notes Client from the workspace, you will remember you just got a layout with a list of views in the left frame and views in the right frame. This is just the default launch option for the application.
{: .alert alert-info}

1. In the Applications view of Domino Designer, double-click on the Frameset part in the To Do application.
1. Click the "New Frameset" button. Set the name to "main", leaving the default as is.
1. Click the "Delete Frame" button.
1. From the menu select Frame > Frame Properties.
1. Set the Content as "Named Element" and "Frameset", and click the "@" button. Enter the formula `@If(@Platform="iOS";"mobile";"")` and click "Done". This will generate a warning that the database does not hold the relevant element.

    ![Main Frameset]({{site.baseurl}}/images/developing-frameset-main.png "Main Frameset")

    If the computation for a Frameset or frame within the frameset errors, the default layout is displayed, with the list of views in the left frame and views in the right. So by entering this formula, the application opens to the "mobile" frameset on HCL Nomad but the same layout that has always been provided for Notes Client.
    {: .why #why3}

### Enable the Frameset
1. In the Applications view of Domino Designer, expand the "Application Configuration" category in the To Do application and double-click "Application Properties".
1. Click on the "Launch" tab.
1. Set the options for "Notes Client Launch" to "Open designated frameset" and open the frameset "Main".
    ![Launch Options]({{site.baseurl}}/images/developing-frameset-launch.png "Launch Options")


If you want to use this frameset for Notes Client as well, try changing the height options of the dashboard frame of the "mobile" frameset so the scrollbars don't appear either for Notes or HCL Nomad.
{: .advanced #advanced1}
<br/>