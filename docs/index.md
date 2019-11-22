---
layout: default
nextPage: pages/setup/get-started
---

{::options parse_block_html="true" /}

![HCL Nomad](images/HCL_Nomad@2x.png "HCL Nomad")

### Introduction
HCL Nomad brings Domino applications to mobile devices leveraging traditional Domino development skills for the rich client. Desktop client applications can be used without any additional changes in HCL Nomad. But it's worth bearing in mind some differences, and coding accordingly:
- The majority of desktops use a mouse or keyboard shortcuts to navigate. Mobile devices do not, and so pixel-precise access to an application is not possible.
- The screen size and resolution are different. This can have a big impact on usability.
- The screen size and resolution may differ from mobile device to mobile device. This may have an impact on what is exposed.
- The use cases for mobile use are not the same as desktop. On desktop users may live within an application throughout most of the day. On a mobile device that is not the case. On mobile users want to open an app, do their work and move on.
- Application admin functions will typically be done in the office. Do these realy need to exposed on mobile devices?
- Distributed rather than server-only use may require different architectural approaches, to avoid replication / save conflicts.

For these reasons, a specific mobile UI may be preferable. The good news is that the development skills required are the same as developing for the desktop client, although some techniques may be less commonly used for desktop client development.

<div class="panel panel-info">
**Note**
{: .panel-heading}
<div class="panel-body">

This tutorial is aimed at HCL Nomad for iPad but would also work well for HCL Nomad for Android tablet / ChromeOS. The layout being developed here is designed for a tablet in landscape mode. However, the output can also be previewed and used on desktop Notes Client and may work on iPhone as well.

</div>
</div>

### The starting point

The starting point for the tutorial will be the To Do application which was included in [XPages Extension Library](https://extlib.openntf.org/main.nsf/project.xsp?r=project/XPages%20Extension%20Library/releases/90465DD127801C93852581D0005F915E) and was also the application used by Richard Moy for the [2019 Collabsphere Beauty Contest](https://collabsphere.org/ug/collabsphere2019.nsf/contest.html). To get the database at a starting point for this tutorial you have three options:
- The database can be downloaded from the [Collabsphere site](https://collabsphere.org/ug/collabsphere2019.nsf/todo.zip).
- If that's no longer available, it is included in the [XPages Extension Library release](https://extlib.openntf.org/main.nsf/project.xsp?r=project/XPages%20Extension%20Library/releases/90465DD127801C93852581D0005F915E).
- If you're familiar with the process of creating an NSF from an On-Disk Project, the "start" branch of this repo can also be used.

### Pre-requisites

To run through this tutorial you will need the following:
- HCL Notes Full Client, including Domino Designer. No specific version is required, all development techniques have been available in releases for over a decade.
- An HCL Domino server. Again, no specific version is required. HCL Nomad can connect to any recent Domino server release.
- Ideally HCL Nomad running on a tablet, running with an ID that can connect to the Domino server.

<div class="panel panel-info">
**Note**
{: .panel-heading}
<div class="panel-body">
Because the Frameset can be previewed on a desktop Notes Client, access to HCL Nomad is not a mandatory requirement. You will still be able to learn the techniques involved in developing specifically for HCL Nomad and will still be able to see and use the output.
</div>
</div>

