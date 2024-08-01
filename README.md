## Clone Pen

This side project was a means for me to explore and understand CodeMirror's mechanics better to build a functional clone of CodePen.

Live Site: [https://clone-pen.vercel.app/](https://clone-pen.vercel.app/)

## Process

To get started, I referenced [this tutorial](https://youtu.be/wcVxX7lu2d4?si=BbiXlHVb2ZhEodRb).

My project diverges from the tutorial in several key aspects:

Given that Vercel is optimized for Next.js, I chose to build my application using this framework to leverage its seamless deployment and performance benefits. This project involves configuring initial states for editor windows and providing users with the ability to reset them, which has deepened my understanding of manipulating and rendering rich text and illustrating CodeMirror's potential applications in various scenarios.

Technologies:
Code Mirror | React | Next.js | CSS 


## Blockers and Lessons Learned

When setting the initial state for my HTML using a JSX file, I used `renderToStaticMarkup` from the `react-dom/server` package to render React components to static HTML. This method is intended for server-side use and led to issues when rendering the Goldfish component, which relies on browser-specific APIs. To resolve errors related to undefined browser-specific properties (like `navigate`), I dynamically imported this and other components with `{ ssr: false }` to ensure they are only rendered on the client side, avoiding server-side rendering issues. 


## What Next? 

This application is not yet optimized for mobile viewing and will be in the future as I plan to use ClonePen as a foundation for another future project. 

Stay tuned for updates! 👩🏻‍💻
