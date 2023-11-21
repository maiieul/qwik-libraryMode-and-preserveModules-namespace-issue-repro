import { component$ } from "@builder.io/qwik";
import {
  AccordionRoot,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@qwik-ui/headless";
export default component$(() => {
  return (
    <div>
      <h1>Headless Accordion (you can click on it):</h1>
      <AccordionRoot behavior="multi" collapsible animated>
        <AccordionItem>
          <div class="flex">
            <AccordionTrigger>
              Why copy/paste and not packaged as a dependency?
            </AccordionTrigger>
          </div>
          <AccordionContent>
            The idea behind this is to give you ownership and control over the
            code, allowing you to decide how the components are built and
            styled. Start with some sensible defaults, then customize the
            components to your needs. One of the drawback of packaging the
            components in an npm package is that the style is coupled with the
            implementation. _The design of your components should be separate
            from their implementation._
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <div class="flex">
            <AccordionTrigger>
              Do you plan to publish it as an npm package?
            </AccordionTrigger>
          </div>
          <AccordionContent>
            No. I have no plans to publish it as an npm package.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <div class="flex">
            <AccordionTrigger>Which frameworks are supported?</AccordionTrigger>
          </div>
          <AccordionContent>
            You can use any framework that supports React.
            [Next.js](https://ui.shadcn.com/docs/installation/next),
            [Astro](https://ui.shadcn.com/docs/installation/astro),
            [Remix](https://ui.shadcn.com/docs/installation/remix),
            [Gatsby](https://ui.shadcn.com/docs/installation/gatsby) etc.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <div class="flex">
            <AccordionTrigger>Can I use this in my project?</AccordionTrigger>
          </div>
          <AccordionContent>
            Yes. Free to use for personal and commercial projects. No
            attribution required. But hey, let me know if you do. I'd love to
            see what you build.
          </AccordionContent>
        </AccordionItem>
      </AccordionRoot>
    </div>
  );
});
