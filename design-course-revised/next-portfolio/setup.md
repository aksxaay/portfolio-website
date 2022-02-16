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
- [zoomable sunburst](https://observablehq.com/@d3/zoomable-sunburst) - d3
- radar chart - chart.js
d3 is more advanced and robust
chart is more friendly.

they have the zoomable sunburst just like the this website that i can recall.

I tried to data visualize myself, tried to visualize jua.