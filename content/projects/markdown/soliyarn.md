> _Since this work is under a NDA - I am limited to what I can share. If you are interested in learning more, please [contact me](mailto:contact@saranshgrover.com)_

![Soliyarn Collage of Experience](/images/projects/soliyarn-top.jpg)

## Project Overview

Soliyarn is a smart wearables startup creating sensor-based wearables for military, healthcare and personal use. As a Product Designer at Soliyarn, I was part of the team that **designed a web portal** to connect to sensor-based garments and visualize data in real-time. **I defined user task flows, created wireframes, prototypes and mocks for the pages, and worked to improve the visualizations of the products through 3D design and development**

While smart, sensor equipped garments are growing in popularity, not many interfaces have been created that allow different clients to connect to their garments and see data through real-time visualizations relevant to their needs.

In addition, Soliyarn has a line of products that aim to be created for both business use, as well as personal use. Thus, any interface must be <u>**adaptable**</u> and <u>**error-free**</u> to allow for commercial and personal use.

> #### The goal for this project was to create a coherent and modular infrastructure and interface that lets Soliyarn's varied clients easily access and interact with their biosensing garments and visualizations.

### What was the problem?

Soliyarn's had **no centralized** platform to host real-time data and visualizations of their products. This meant that **each client had their own interface** to visualize the data collected by their garments. Further, there was no system in place to manage users and products, making it difficult for Soliyarn to effectively scale their business.

### Why was it important?

As Soliyarn was growing, it was acquiring more clients and customers thereby increasing the types of products being created. A disjointed interface for each product and client was **hard to scale**.
| Existing Problem| <!-- --> | Importance |
| ---------------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------- |
| _No centralized software infrastructure_ | <img src='/images/projects/arrow-right.png' style='max-width:2.5rem'> | **Software Scalability** |
| _Not commercial ready - Demos were "academic" in nature_ | <img src='/images/projects/arrow-right.png' style='max-width:2.5rem'> | **Product value through UX** |
| _No user or product management system_ | <img src='/images/projects/arrow-right.png' style='max-width:2.5rem'> | **Commercial Scalability** |
| _Unclear method of connection between device and software_ | <img src='/images/projects/arrow-right.png' style='max-width:2.5rem'> | **Renders product unusable and unintuitive** |

### Starting with Questions...

We created a list of ‘How Might We…’ questions to help us better align our user’s tasks and goals:

-   How might we create a user-friendly interface for Soliyarn clients to manage access to their products?
-   How might we design a modular infrastructure that effectively connects Soliyarn's products with different clients?
-   How might we simplify the process of accessing and using product data for Soliyarn clients?

### The Design Process

#### **Collecting User Insights**

I conducted interpretation sessions with the business leaders and researchers who communicate with clients to identify what were the most important features needed in the platform and to identify any important design guidelines and limitations that clients may have.

> #### We need a coherent interface that let all our easily access and interact with their biosensing garments and visualizations in one place

Some key takeaways from these sessions were:

1. The most important roadblock for clients currently was an easy way to connect, configure, and manage Soliyarn products in one place. Clients often mentioned they were unable to connect devices without the support of Soliyarn staff, so providing ways to get support and feedback from staff was also essential.
2. There may be some <u>software limitations</u> depending on the client that we must be aware of as designers and engineers. Due to these limitations, the portal must be adaptable to older, less capable devices with lower RAM and GPU's. This was specifically important for the real-time visualizations
   <br/><br/>

#### **Defining the Structure**

Before designing prototypes, we wanted to define the structure of the portal after receiving the development specifications. For this, we worked closely with engineers, designers and stakeholders to <u>create a complete task flow for the portal.</u> Creating this flow helped us document and understand key tasks for the portal and have a unified point of reference for design and development.

<div style="width:100%;display:flex;align-items:center;flex-direction:column">
<img src='/images/projects/soliyarn-user-flow.png' alt='Image showing the User Flow Chart'>
<p style="text-align:center;font-size:1rem;display:block">The final user flow chart for the web portal including screens and the tasks between screens</p>
</div>

#### **A/B Testing Two Wireframes**

We created two different wireframes that we did <u>**A/B testing**</u> on with a small subset of clients to see which one was more intuitive. The key difference between the wireframes was the navigation styles and configuration setup. The first had **top-based navigation and dialog based configuration** while the second had **side-based navigation with dedicated configuration**. In the end, we decided to go with the side-based navigation and dedicated configuration as our A/B testing results found it to be more intuitive for users.

<div style="margin-bottom:1rem;display:flex">
	<div style='float:left;width:50%;padding-right:1em;display:flex;align-items:center;flex-direction:column;align-content:center'>
		<img src='/images/projects/wireframe-1.gif' alt='Demo of first wireframe'>
		<p style="text-align:center;font-size:1rem;display:block">Side Based Navigation Wireframe</p>
	</div>
<div style='float:left;width:50%;padding-left:1em;display:flex;align-items:center;flex-direction:column;align-content:center'>
		<img src='/images/projects/wireframe-2.gif' alt='Demo of second wireframe'>
		<p style="text-align:center;display:block;margin-top:1rem;">
		Top Based Navigation Wireframe</p>
	</div>
</div>

### High Fidelity Prototypes

After analyzing user insights, creating a task flow and testing wireframes with a small set of clients, we did 2 design sprints to create our final prototypes that were used for development. I was responsible for working on two main flows - the device configruation and the visualization interface.

These designs were prototyped in Figma and the animations were created using Framer.

#### **Flow 1: Device Configuration**

The first prototype I developed was the flow for configuration of a new device. This included users initially connecting their device via bluetooth, downloading and updating any necessary software, and customizing specific details like name, icon and other variables like refresh rate.

#### Design & Steps

![Prototypes of the configuration flow](/images/projects/soliyarn-configuration-flow.png)

#### Prototype & Animation

<div style="width:100%;display:flex;align-items:center;flex-direction:column">
<video autoplay loop muted controls webkit-playsinline playsinline >
  <source src="/images/projects/soliyarn-final-flow.mp4" type="video/mp4">
</video>
<p style="text-align:center;display:block;margin-top:1rem;">3-step process for Device Configuration</p>
</div>

#### **Flow 2: Managing Device & User Access**

The second workflow was all about allowing supervisors and clients be able to manage access to their devices amongst their organizations and locations. Examples of such locations included hospitals with various rooms, or a company with multiple offices. This included creating new users, assigning them to locations and devices, and managing their access.

<div style="width:100%;display:flex;align-items:center;flex-direction:column">
<video autoplay loop muted controls webkit-playsinline playsinline >
  <source src="/images/projects/soliyarn-access.mp4" type="video/mp4">
</video>
<p style="text-align:center;display:block">Prototype for Managing Device & User Access</p>
</div>

#### Visualization Development

I also worked to **further develop the visualizations** of the products. For this, I had to work closely with systems and software engineers to understand the capabilities and limitations of the products. **I re-developed the visualization** using a 3-D modelling libary called [Three.js](https://threejs.org/), [D3.js](https://d3js.org/) and the Web Canvas API to ensure the visualizations were capable to work with the prototypes created while keeping in mind the limitations of the product.

<div style="width:100%;display:flex;align-items:center;flex-direction:column">
<video autoplay loop muted controls webkit-playsinline playsinline >
  <source src="/images/projects/soliyarn-viz.mp4" type="video/mp4">
</video>
<p style="text-align:center;display:block">3D Visualization example</p>
</div>

### Impact

-   In my 3 months at Soliyarn, I was a key part of the **team behind fully shipping the web portal**. Not only did we achieve our timeline, we also delivered more features than promised.
-   This new portal, created for usage starting in September 2022 played a role in **acquiring new business partners** who visualized their data collected in real-time through Soliyarns' products
-   Overall, through designing and improving the visualization interface, I **increased the visualization efficiency of the product protocol by over 50%**
