---
layout: default
prevPage: pages/setup/get-started
nextPage: pages/developing/intro
slug:
    - label: Setup
      url: sitemap#Setup
    - Creating Images
---

{::options parse_block_html="true" /}

<div class="panel panel-info">
**Note**
{: .panel-heading}
<div class="panel-body">

The images for use in the tutorial are already pre-created in the [repo for the project](https://github.com/paulswithers/domino_todo). If you wish to skip this step, you can clone the repo and retrieve them from the **images** folder. If you prefer to use other images, you can.

You will need some kind of image capture and manipulation software, e.g. TechSmith SnagIt. If you don't have one, you can just use the images in the repo.

</div>
</div>

The images will be created using Font Awesome, presented via XPages. The images need to be of an appropriate size for HCL Nomad. With modern screen resolutions, it can be easier to capture the image at a larger size and resize.

### Adding Font Awesome to XPages

1. Download [Font Awesome "Free for Web"](https://fontawesome.com/download).
1. Extract the contents.
1. Open the application in Domino Designer.
1. Switch to the Package Explorer view.
1. Locate the `WebContent` folder. Right-click it and select Create > New > Other... Under the General category, select Folder and click Next.
![New Folder]({{site.baseurl}}/images/create-images-new-folder.png "New Folder")
1. Set the folder name as "font-awesome-5.11.2", with the number matching the Font Awesome version you downloaded.
1. From Windows Explorer drag the "webfonts" folders from Font Awesome into the "font-awesome-5.11.2" folder.
1. Repeat the process and create a folder named "css" under "font-awesome-5.11.2".
1. In Windows Explorer, open the "css" folder. Drag `all.css` into the "css" folder you just created in Domino Designer.

<div><p>The WebContent folder should now look like this:</p><p>![WebContent]({{site.baseurl}}/images/create-images-WebContent.png "WebContent"){: .shadow}</p></div>
{: .troubleshoot #trouble1}

### Status Images

#### Creating XPage

1. Switch to the Applications Navigator view, the traditional view for navigating Domino design elements.
1. Double-click on "XPages".
1. Click on the "New XPage" button. Name the new XPage "font_awesome". Switch to the "Source" pane. The content here is XML, with attributes which can be manually typed into the Source pane, entered into properties on the "All Properties" panel or - for some properties - entered into the other "pretty panels" above the All Properties panel.
1. In the All Properties panel, navigate to the `styling` category and the `style` property. Enter the value `padding: 20px`. This ensures there's plenty of room around the content.
![Style]({{site.baseurl}}/images/create-images-style.png "Style")
1. Scroll up to `resources` under `basics`. Click into the cell for value, to get the "Add" and "Remove" buttons. Click the Add button and select **xp:styleSheet**.
![Stylesheet]({{site.baseurl}}/images/create-images-stylesheet.png "Stylesheet")
1. In the `href` property of the styleSheet, enter `/font-awesome-5.11.2/css/all.css`. This will map to the Font Awesome CSS stylesheet added to the WebContent folder.

    Obviously if you imported a different version to the WebContent folder and named the sub-folder differently, you need to amend the `href` property accordingly.
    {: .alert .alert-warning}

#### Creating Status Images
1. In the source pane, paste the following code to create a "Completed" status image:
    {% raw %}
    ~~~xml
    	<!-- rgb(29,181,54) -->
	    <xp:div style="font-size:32px;color:#1db536; border: 1px solid black; padding: 4px">
    		<i class="fas fa-check-circle" style="padding-right: 5px"></i>
    		Completed
    	</xp:div>

	    <xp:br></xp:br>
	    <xp:br></xp:br>
    ~~~
    {: .code}
    {% endraw %}
1. Repeat, but with the following changes:
  - `color` in the `style` property set to `#2d72ad`.
  - `class` property of the `<i>` tag set to `fas fa-times-circle`.
  - Text set to `Incomplete`.
1. Repeat, but with the following changes:
  - `color` in the `style` property set to `#fcba03`.
  - `class` property of the `<i>` tag set to `fas fa-exclamation-circle`.
  - Text set to `Urgent!`.
1. Repeat, but with the following changes:
  - `color` in the `style` property set to `red`.
  - `class` property of the `<i>` tag set to `fas fa-exclamation-triangle`.
  - Text set to `Overdue`.
1. Save and build the XPage. (Saving saves the XML file, a builder needs to be run to convert the XML to a Java class, which the server runs.)
1. Preview the XPage.

Depending how the server is configured, Domino Designer may or may not get the right host name when previewing the XPage. If the page does not load, remove everything after the hostname and verify you get the Domino server page. If you don't, double-check the hostname and verify that the "http" task is running. You can verify the http task is running by issuing the command `sh ta` (short for "show tasks") on the Domino server. HTTP should be one of the listed tasks. If you get the server name but cannot get the XPage by previewing it, double-check it has built. You can build it again in Domino Designer by selecting Project > Build Project (builds the current application) or Project > Build All (builds any open application).
{: .troubleshoot #trouble2}

#### Taking and Resizing Status Images

1. Capture an image of the "Completed" status image, from one pixel inside the black border. Note the pixel sizes, so the other images can be captured at the same size.
1. Resize the image to 40px high, keeping the aspect ratio.
1. Save the image with the filename "complete-doc.png" for importing into the To Do application later.
1. Repeat for the other three statuses - Incomplete, Urgent! and Overdue. Filename should be "incomplete-doc.png", "urgent-doc.png" and "overdue-doc.png". Ensure you capture the image at the same pixel sizes, so that as you change the status of a To Do document, the switch feels seamless.

### Creating Action Button Images
1. Return to Domino Designer and the XPage.
1. In the source pane, paste the following code to create a "Save" button image.
    {% raw %}
    ~~~xml
    	<xp:button
		    style="font-size: 16px; background-image: none; background-color: #1db536; color: white; border: 1px solid black; text-shadow: none"
		    value="Save">
	    </xp:button>
    ~~~
    {: .code}
    {% endraw %}
1. Repeat but with the following changes:
  - `background-color` in the `style` property set to `#1db536`.
  - `value` property set to `Edit`.
1. Repeat but with the following changes:
  - `background-color` in the `style` property set to `red`.
  - `value` property set to `Cancel`.
1. Repeat but with the following changes:
  - `background-color` in the `style` property set to `red`.
  - `value` property set to `Delete`.
1. In the source pane, paste the following code to create a "Mark Complete" button image.
    {% raw %}
    ~~~xml
    	<xp:button
		    style="font-size: 16px; background-image: none; background-color: #1db536; color: white; border: 1px solid black; text-shadow: none"
		    value="Mark Complete">
		      <i class="fas fa-check-circle" style="padding-right: 2px"></i>
    	</xp:button>
    ~~~
    {: .code}
    {% endraw %}
1. Repeat but with the following changes:
  - `background-color` in the `style` property set to `#2d72ad`.
  - `value` property set to `Mark Incomplete`.
  - `class` property of the `<i>` tag set to `fas fa-times-circle`.
1. Save and build the XPage again.
1. Preview the XPage or refresh the browser tab, if you still have it open.
1. Capture an image of the "Save" button image, from one pixel outside the button and drop shadow.
1. Resize the image to 30px high, keeping the aspect ratio.
1. Save the image with the filename "button-save.png" for importing into the To Do application later.
1. Repeat for the other buttons - Edit, Cancel, Delete, Mark Complete and Mark Incomplete. Filenames should be "button-edit.png", "button-cancel.png", "button-delete.png", "button-mark-complete.png" and "button-mark-incomplete.png". The buttons will not be overlaid on one another but sitting side-by-side, so they do not need to be captured at the same widths.

### Creating Images for Changing Views
#### Creating Images
1. Return to Domino Designer and the XPage.
1. In the source pane, paste the following code to create a "Completed" view image.
    {% raw %}
    ~~~xml
    	<div style="background-color: #ffffff">
	      <i class="fas fa-check-circle" style="color:#1db536; font-size: 32px; padding: 2px; border: 1px solid black"></i>
      </div>
    ~~~
    {: .code}
    {% endraw %}
1. Duplicate the `<i>` tag still within the same div with the following change:
  - `class` property set to `fas fa-times-circle`.
  - `color` in the `style` property set to `#2d72ad`.
1. Duplicate the `<i>` tag still within the same div with the following change:
  - `class` property set to `fas fa-exclamation-circle`.
  - `color` in the `style` property set to `#fcba03`.
1. Duplicate the `<i>` tag still within the same div with the following change:
  - `class` property set to `fas fa-exclamation-triangle`.
  - `color` in the `style` property set to `red`.
1. Duplicate the `<i>` tag still within the same div with the following change:
  - `class` property set to `fas fa-clipboard-list`.
  - `color` in the `style` property set to `#5c5c5c`.
1. Duplicate the `<i>` tag still within the same div with the following change:
  - `class` property set to `fas fa-calendar-alt`.
  - `color` in the `style` property set to `#000070`.
1. Save and build the XPage again.
1. Preview the XPage or refresh the browser tab, if you still have it open.
1. Capture an image of the "tick" view image, from two pixels outside the image.
1. Resize the image to 91px high, keeping the aspect ratio.
1. Save the image with the filename "complete-dashboard.png" for importing into the To Do application later.
1. Repeat for the other view images - incomplete, urgent, overdue, todo and calendar. Filenames should be "incomplete-dashboard.png", "urgent-dashboard.png", "overdue-dashboard.png", "todos-dashboard.png" and "calendar-dashboard.png".

#### Creating Selected Versions of the Images
1. Return to Domino Designer and the XPage.
1. Change the `background-color` property of the `div` tag to `#c9c9c9`.
1. Repeat the process for creating the previous versions of the images. Filenames should be "complete-dashboard-selected.png", "incomplete-dashboard-selected.png", "urgent-dashboard-selected.png", "overdue-dashboard-selected.png", "todos-dashboard-selected.png" and "calendar-dashboard-selected.png".

#### Create New To Do Image
1. Copy the "todos-dashboard.png".
1. Using an appropriate image package, add a yellow star badge over the image.
1. Save the image as "todo-new.png".

<div class="panel panel-success">
**Congratulations!**
{: .panel-heading}
<div class="panel-body">

You should now have:
<ul>
<li>four status images (complete-doc.png, incomplete-doc.png, overdue-doc.png, urgent-doc.png)</li>
<li>six button images (button-cancel.png, button-delete.png, button-edit.png, button-mark-complete.png, button-mark-incomplete.png, button-save.png).</li>
<li>seven dashboard images with a white background (calendar-dashboard.png, complete-dashboard.png, incomplete-dashboard.png, overdue-dashboard.png, todo-new.png, todos-dashboard.png, urgent-dashboard.png)</li>
<li>six dashboard images with a grey background (calendar-dashboard-selected.png, complete-dashboard-selected.png, incomplete-dashboard-selected.png, overdue-dashboard-selected.png, todos-dashboard-selected.png, urgent-dashboard-selected.png)</li>
</ul>

</div>
</div>
<br/>