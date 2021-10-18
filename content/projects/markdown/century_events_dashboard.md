## Objective and Method

The objective of this project was to understand the degree of the impact various different events have on the United States Economy, and the citizens of the United States.

First, we examined COVID-19 data on its own, to get a glimpse of its own consequences on the economy of the United States. Then, by examining economic and social data during different times in history, we hope to learn the relationships between certain major events, and understand the severity of each compared to others, thus giving us a better understanding of the pandemic as a whole.

## Visualizations

We employed the use of several different types of data visualizations learned in this course, using a mix of standard and non-standard visualizations. Our goal with was to ensure that digital literacy was a key priority when visualizing for users who may have limited experience with data visualizations, but also provide a powerful interactive medium to explore the data.

Our data is mainly time-based, so we will use those visualizations which work well using timeseries or time-based data, including a timeseries chart and a PCP chart. Our goal with the visualizations was to give users a color-coded way to compare and differentiate between world events.

![Unemployment Rate](/images/projects/century_events_dashboard_1.png)

In addition to using time-series to see the large-scale impact of a variable, we also used a Calendar Heatmap to visualize the day to day and month to month impact on specific variables. This was especially useful to see when certain events increased in impact, and when they may start slowing down.

![Calendar Heatmap](/images/projects/century_events_dashboard_2.png)

Lastly, we employed the use of an interactive Parallel Coordinate Map (PCP). Our PCP focused strongly on having a variable-to-variable comparison between each year. In addition, we color-coded this according to the specific national events that we are comparing, to give a better idea of the timelines, as well as potential outlier points. Note that we did perform some dimension reduction in order to make the visualization more readable.

![PCP](/images/projects/century_events_dashboard_3.png)

## Observations

-   While there have been some expected results, such as a correlation between the impacts of COVID-19 on the economy and The Great Recession on the economy. In both historical events, unemployment rates skyrocketed, and GDP decreased, while average life expectancy dropped, and birthrates (continued) to decline.
-   The rates at which the economy recovered after or during these events was particularly interesting. For example, during, and following the 2008 Financial Crisis, the unemployment rate decreased very slowly and little by little. However, during the COVID-19 Pandemic, the economy was able to rebound much faster, with the unemployment drastically decreasing. Similarly, the GDP dropped during both events, but during the COVID-19 Pandemic, the economy was not only able to recover, but start increasing relatively quickly afterwards, which wasn't the case with the 2008 Financial Crisis
-   Another interesting thing we learned is that for relatively "isolated" events such as various natural disasters, while the immediate impact is definitely quite severe in the affected regions, nationally, there isn't very noticeable if at all, an impact. Despite Katrina costing nearly a quarter of a trillion dollars in today's currency, the economy was hardly affected by the storm.
-   Finally, many have compared COVID-19 to 9/11 across news sources, however our data found that the two had little comparison to make. During 9/11, the US GDP continued to increase, and while there was national mourning, the statistics aren’t that comparable.

## References

-   “Bureau of Labor Statistics Data.” U.S. Bureau of Labor Statistics, U.S. Bureau of Labor Statistics, data.bls.gov/timeseries/LNS14000000.
-   Datopian. “Gross Domestic Product of the United States (US GDP).” DataHub, datahub.io/core/gdp-us#resource-quarter.
-   Macrotrends. “U.S. Birth Rates 2000-2021”,
-   U.S. Birth Rate 1950-2021 | MacroTrends
-   [Macrotrends. “U.S. Death Rate 2000-2021”](https://www.macrotrends.net/countries/USA/united-states/birth-rate)
-   [Macrotrends. “U.S. Life Expectancy 2000-2021”] (https://www.macrotrends.net/countries/USA/united-states/death-rate)
-   US Monthly GDP, ycharts.com/indicators/us_monthly_gdp.
-   Owid. “Owid/Covid-19-Data.” GitHub, github.com/owid/covid-19-data/tree/master/public/data.
