### next-portfolio

Setup Explained.
For some reason running the starter with-tailwindcss on next gives us a typescript project??
which was only supposed to happen with `--typescript` flag.

installed
`npx @eslint/config`
it is to enforce code style..
the most popular one being air-bnb

setting up auto-format with prettier

[typescript-eslint-prettier-tailwindcss](https://www.sandromaglione.com/create-nextjs-project-with-typescript-eslint-prettier-tailwindcss/)
this is a decent project setup.

I also forked a couple boilerplate code on github, that hopefully has all the solutions to my problems.

ESLint + Airbnb Styleguide.


well you have to mention the allowed domains it can go out of..
so I have to add unsplash to the list of allowed domains.
Only kept three cards since I have to dynamically configure them later on.

So the only issue is having to manually fix every class name on everry goddamn paste.

also ran tailwind CLI build process. I guess it isn't done auto, so 
`npx tailwindcss -i styles/globals.css -o styles/output.css --watch`
separate terminal process


we're gonna use the data library nivo for showing what my software stack really is....

using nivo with next js has some issues since next js tries to SSR (Server Side Rendering thus the object - `ResizeObserver` isn't defined)

I also learn how to `getStaticProps()` and how to send over the props data to the component.

following this medium article to implement nivo in nextjs
[nivo + nextjs](https://medium.com/@samuelsetsoafia/server-side-rendered-charts-using-nivo-and-nextjs-6b27eef29c8e)

> As you said, ResizeObserver is a browser API that is not available in Node.js, so when Next.js tries to server-render the page it will fail.

The solution here is to use [next/dynamic](https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr) and load the component only in the browser +1 .

from what I can understand, the chart code isn't getting injected into the div class.

now we have this new problem, 
> `TypeError: Cannot read properties of undefined (reading 'value')`

so there's 3 so far.
- d3
- chart.js
- nivo

have my eyes on this particular type of chart
- [zoomable sunburst // observable](https://observablehq.com/@d3/zoomable-sunburst) - d3
- radar chart - chart.js
d3 is more advanced and robust
chart is more friendly.

they have the zoomable sunburst just like the this website that i can recall.

I tried to data visualize myself, tried to visualize jua.


so we're gonna use a react concept called refs
- this is what we use for third-party DOM libraries (d3)

finally managed to get some working output, both SSR and Dynamic Rendering.
[data vis in react using d3](https://www.youtube.com/watch?v=YKDIsXA4OAc)

also need to refer to this
[sunburst implementation // observable](https://observablehq.com/@d3/sunburst)


okay all my efforts to use the data straight from the observable are in vain

[d3 in react](https://www.pluralsight.com/guides/using-d3.js-inside-a-react-app)
this article gives insight on how to use them despite both of them wanting direct access to the DOM model.

- create basic scaffolding
- create custom hook to use d3 using `useRef` `useEffect`
> take advantage of the useRef and useEffect hook to link D3.js with the svg element that has been created, and specify when your D3.js function should be executed.


asks me to create a new hook

I forgot to export the data variable from `services/sunburst`
there's 2 listings one dynamically rendered too


someone on stack overflow addresses these issues
[observable to react conversion](https://stackoverflow.com/questions/63292255/zoomable-sunburst-chart-shows-only-two-layers-of-the-hierarchy-at-a-time-in-reac)

[how i created sunburst chart](https://towardsdatascience.com/how-i-created-a-sunburst-chart-using-javascript-to-visualize-covid-19-data-4ef27b45af8a) - however this one comes WITHOUT animation

- sunburst
- ring charts
- multilayer pie charts
- treepies


[anychart](https://www.anychart.com/products/anychart/gallery/Sunburst_Charts/)
- new charting technology with a couple sunburst chart demos


I also forgot checking code samples on codesandbox.io / codepen

[react-zoomable-sunburst-d3-v4](https://www.npmjs.com/package/react-zoomable-sunburst-d3-v4)




WHAT THE ACTUAL FUCK -
the best sunburst chart I've seen so far w the most fluid animation holy shite
[smoothest-sunburst](https://codesandbox.io/s/blissful-resonance-wwl4q)

also had to install this obscure package
[sunburst-chart](https://www.npmjs.com/package/sunburst-chart)



well I wasn't able to integrate this code, still have to figure out that error.. BUT. 
uber has a vis, let's see what that's about.


```
Error [ERR_REQUIRE_ESM]: require() of ES Module /home/axsae/Documents/coding_projects/git/portfolio-website/design-course-revised/next-portfolio/node_modules/d3-selection/src/index.js from /home/axsae/Documents/coding_projects/git/portfolio-website/design-course-revised/next-portfolio/node_modules/sunburst-chart/dist/sunburst-chart.common.js not supported.
Instead change the require of index.js in /home/axsae/Documents/coding_projects/git/portfolio-website/design-course-revised/next-portfolio/node_modules/sunburst-chart/dist/sunburst-chart.common.js to a dynamic import() which is available in all CommonJS modules.
```


`/home/axsae/Documents/coding_projects/git/portfolio-website/design-course-revised/next-portfolio/node_modules/sunburst-chart/dist/sunburst-chart.common.js`
they want this to have import() and not require()