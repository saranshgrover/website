
## Team

[Politech](https://www.stonybrook.edu/commcms/vertically-integrated-projects/teams/_team_page/team_page.php?team=PoliTech) is a Vertically Integrated Project at Stony Brook whose goal is to develop political informatic applications, specifically within the realm of automated redistricting, population equality, racial fairness, and probabilistic analysis of legislative issues. It is led by Dr Robert Kelly.

## My Role

I have been leading the User Interface team since January 2019 focused on developing visualizations and an interface for the automated redistricting application. My main area of research has involved visualizing automated redistricting and comparing the differences in quality between different district pairs using measures and an objective function.

## Challenges

A significant challenge in developing an Automated Redistricting system is showcasing the changes between distreicts when compared to the "original" versions. Our system has 2 phases of redistricting, each using different algorithms with user-defined measures such as Population Equality, Graph Compactness, etc. One solution we worked on to solve the visual difference after redistricting was to show how new districts were composed of older ones. Using color coding of old districts, and a hover and select interface, a user can quickly see how the new districts are "composed" of the older precincts, and where the older precincts belonged, all within a single map. Here's a demo of that:

![Politech Viz](/images/projects/politech-viz.gif)



Another challenge is that redistricting is not just about geometric boundaries - it includes other measures like demographic equality, density, voting patterns, age, gender, income levels, among many others. Hence, it is difficult to visually show how one districting is "better" than the other. Our approach to tackle this problem is to create an objective function value that represents how the district performs compared to the measures mentioned. In order to visaluize that, the objective function value is accompanied with a [http://www.cs.uml.edu/~phoffman/dna1/](RadViz) Visualization of the various measures.


![Radviz](/images/projects/politech-radviz.png)
