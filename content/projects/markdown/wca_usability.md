## Overview

As the Vice-Chair of the World Cube Association - a non-profit organization dedicated to the sport of speed-cubing, I actively aim to ensure that our organization is easily accessible for members who may be new to the sport. This is why I questioned - is the WCA website flow easily comprehensible by new competitors?

           

I hoped to learn if specific journeys on the website like finding and registering for competitions, creating and navigation accounts, and finding results were clear and straightforward to new users. To validate this, I conducted both a heuristic evaluation and remote usability testing on the website.

-   **Client:** Graduate course
-   **When:** October 2021 - November 2021
-   **Role**: UX researcher on a team of one
-   **Methods**: Heuristic evaluation, Remote user-based unmoderated testing
-   **Tools**: TryMyUI, Figma

---

## Background

### What are the most important tasks?

The WCA serves as the organization that sanctions “official” competitions and stores and validates all results from these competitions. Hence, the two most important tasks a user would perform is to find and register for competitions, and to find results and records for these competitions.

### User Recruitement

The typical and averagte users of the WCA would be active and avid speedcubers. A second smaller, yet important, group would be users who learnt about the WCA externally and are exploring the site. In this test, I wanted to focus on the smaller set of new users. Therefore, the users recruited were all participants novice to speed-cubing and the WCA interface. Due to convenience sampling, none of these participants were cubers - but they were provided with basic concepts and terms that a novice cuber would be familiar with before the usability testing.

### Nielsen’s 10 Usability Heuristics

           
I chose to follow Nielsen's heurstics for my Heuristic evaluation. The reason I chose these was because I found it to be the broadest appealing heuristics.Nielson’s heuristics focus more on the generic design for all audiences which supplemented purpose of my study to analyze novice and beginner users. 

![Nielen's Heuristics](/images/projects/nielsen.png)

## Top Usability Issues


### Prominently Show Statuses

           

**Show Competition Status:** The competition list provides various kinds of filters for users to search for competitions but leaves out one of the most important: the status of the competition. You can only filter by “Upcoming” and “Past” competitions, but a user may want to know the list of competitions they are able to register attend at a glance. This information is also hidden below into a “register” tab, and not displayed prominently at all competition pages. This is an example of Nielson’s 2nd heuristic: **Visibility of System Status**.

           

**Textually Specify Current Filter Status**: Throughout the website, filters are used to help users make sense of the hundreds and thousands of results and thousands of competitions. While these filters provide **User control and freedom**, the execution of these filters causes a lack of **Visibility of System Status**. The status of active filters, and combinations of filters is simply handled by the same input components that are used to set these filters. While this is a non-issue for simple filters, the WCA filters can become too complex leaving users is disarray on what they are seeing. Giving users even more control by displaying tabs of applied filters in a textual, readable format will also provide a better sense of system status.

![Prominently Show Statuses](/images/projects/wca_usability_3.png)


### **Competition Page: Eliminate Double Navigation**


On the competition pages, there are two main navigation structures. The first is the left menu navigation which contains the following options: “Info”, “Register” and “Competitors.” The second top “tab” based navigation has the following options: “General Info”, “Events”, and “Schedule” (the last two being if the events/schedule exist for the competition). The double navigation system was built because the left options are permanent are the top ones can be edited and customized. However, this does not follow the **Consistency and Standards** heuristic as there is no difference in the structure and content between the two menus.

![Distinguish Single and Average Results](/images/projects/wca_usability_2.png)
          

### **Results Table: Distinguish Single and Average Results**
           

Only 2/5 participants were able to successfully distinguish between Average and Single Results, and 3/5 either guessed between the 2 options or gave up. There are many ways to make this clear – instead of a single table, 2 tables can be used for single and average. If a single table is needed for conciseness, it can be divided much more clearly to distinctly differentiate single and average (1).

![Distinguish Single and Average Results](/images/projects/wca_usability_1.png)


## Retrospective

<div style="margin:auto;font-size:32px;text-align:center">
	All users expressed difficulty in the competition registration flow
</div>

---

The biggest concerns for participants were being able to find important information about an event like the registration fee, or the list of puzzles the event is hosting. In addition, participants also had trouble finding competitions - but were able to do it successfully after some attempts.

Specifically with regards to methods, the heuristic review made me find problems that emerged through a larger portion of the website and were broader in nature. When performing the expert review, my focus was not just on specific tasks like the usability but also on how the website operates, which made me notice more patterns of issues throughout the website.


### Next Steps

I plan on reaching out to the software team within the WCA to suggest these 3 most significant imporvements:

-  **Eliminate Double Navigation**
-  **Show Competition Status in List**
-   **Results Table: Distinguish Single and Average Results**