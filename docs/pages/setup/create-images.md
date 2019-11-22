---
layout: default
prevPage: pages/setup/get-started
nextPage: 
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

The images for use in the tutorial are already pre-created in the [repo for the project](https://github.com/paulswithers/domino_todo). If you wish to skip this step, you can clone the repo and retrieve them from the **images** folder.

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

### Creating XPage

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

### Creating Status Images
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
  - `color` property set to `#2d72ad`.
  - `icon` class set to `fas fa-times-circle`.
  - Text set to `Incomplete`.
1. Repeat, but with the following changes:
  - `color` property set to `#fcba03`.
  - `icon` class set to `fas fa-exclamation-circle`.
  - Text set to `Urgent!`.
1. Repeat, but with the following changes:
  - `color` property set to `red`.
  - `icon` class set to `fas fa-exclamation-triangle`.
  - Text set to `Overdue`.