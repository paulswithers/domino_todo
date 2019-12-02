---
layout: default
prevPage: pages/developing/framesets
nextPage: pages/summary
slug:
    - HCL Nomad
---

{::options parse_block_html="true" /}

<div class="panel panel-success">
**Congratulations!**
{: .panel-heading}
<div class="panel-body">

Barring any fixes, you have now successfully developed the To Do application for HCL Nomad. You should now have also learned a number of techniques for a touch-enabled interface, using images to highlight focus, and providing dashboard-style reporting. Now it's time to add the application to HCL Nomad.

If you did not set up HCL Nomad earlier, see [Setting up HCL Nomad]({{site.baseurl}}/pages/setup/get-started#setting-up-hcl-nomad)

</div>
</div>

1. Open HCL Nomad.
1. If the application is not in the list of Recent Applications, click the "hamburger" icon top left and select "Open Application".
1. The dialog is the same as on the Notes Client. Navigate to the server and the To Do application and double-click on it.

    The dashboard lookups take some time when connecting to the server from HCL Nomad, and it's likely to throw an error on being unable to open the view or may fail to launch the "mobile" frameset on a slow connection. The application is designed to be used offline, so do not worry.
    {: .alert .alert-warning}
1. Click the "hamburger" icon top left and select "Make Available Offline". A local replica of the To Do application will be replicated down to HCL Nomad.
1. Test the application.

<div class="panel panel-info">
Updating the Application
{: .panel-heading}
<div class="panel-body">

If you need to make changes, you will make them on the server replica. But Notes will cache design for the current session of the application. To pull those down to HCL Nomad:
1. Click on the "hamburger" icon and click "Replication"
1. Click "Replicate All".
1. Close the To Do application and re-open it.

When developing and previewing in Notes Client, changes will get picked up immediately because the changes are made in the current Notes Client and current application. When making design changes but then using a different replica or a different User ID, you need to close and re-open the application to pick up design changes.

</div>
</div>