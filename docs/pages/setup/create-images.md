---
layout: default
prevPage: /index
nextPage: pages/developing/create-images
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
![New Folder]({{site.url}}/images/create-images-new-folder.png "New Folder")
1. Set the folder name as "font-awesome-5.11.2", with the number matching the Font Awesome version you downloaded.
1. From Windows Explorer drag the "webfonts" folders from Font Awesome into the "font-awesome-5.11.2" folder.
1. Repeat the process and create a folder named "css" under "font-awesome-5.11.2".
1. In Windows Explorer, open the "css" folder. Drag `all.css` into the "css" folder you just created in Domino Designer.

<div><p>The WebContent folder should now look like this:</p><p>![WebContent]({{site.url}}/images/create-images-WebContent.png "WebContent"){: .shadow}</p></div>
{: .troubleshoot #trouble1}