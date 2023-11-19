import { component$ } from "@builder.io/qwik";
import {
  AccordionRoot as AccordionRootHeadless,
  AccordionContent as AccordionContentHeadless,
  AccordionItem as AccordionItemHeadless,
  AccordionTrigger as AccordionTriggerHeadless,
} from "@qwik-ui/headless";

export const Accordion = component$(() => {
  return (
    <AccordionRootHeadless behavior="multi" collapsible animated>
      <AccordionItemHeadless>
        <div class="flex">
          <AccordionTriggerHeadless>
            Why copy/paste and not packaged as a dependency?
          </AccordionTriggerHeadless>
        </div>
        <AccordionContentHeadless>
          The idea behind this is to give you ownership and control over the
          code, allowing you to decide how the components are built and styled.
          Start with some sensible defaults, then customize the components to
          your needs. One of the drawback of packaging the components in an npm
          package is that the style is coupled with the implementation. _The
          design of your components should be separate from their
          implementation._
        </AccordionContentHeadless>
      </AccordionItemHeadless>

      <AccordionItemHeadless>
        <div class="flex">
          <AccordionTriggerHeadless>
            Do you plan to publish it as an npm package?
          </AccordionTriggerHeadless>
        </div>
        <AccordionContentHeadless>
          No. I have no plans to publish it as an npm package.
        </AccordionContentHeadless>
      </AccordionItemHeadless>

      <AccordionItemHeadless>
        <div class="flex">
          <AccordionTriggerHeadless>
            Which frameworks are supported?
          </AccordionTriggerHeadless>
        </div>
        <AccordionContentHeadless>
          You can use any framework that supports React.
          [Next.js](https://ui.shadcn.com/docs/installation/next),
          [Astro](https://ui.shadcn.com/docs/installation/astro),
          [Remix](https://ui.shadcn.com/docs/installation/remix),
          [Gatsby](https://ui.shadcn.com/docs/installation/gatsby) etc.
        </AccordionContentHeadless>
      </AccordionItemHeadless>

      <AccordionItemHeadless>
        <div class="flex">
          <AccordionTriggerHeadless>
            Can I use this in my project?
          </AccordionTriggerHeadless>
        </div>
        <AccordionContentHeadless>
          Yes. Free to use for personal and commercial projects. No attribution
          required. But hey, let me know if you do. I'd love to see what you
          build.
        </AccordionContentHeadless>
      </AccordionItemHeadless>
    </AccordionRootHeadless>
  );
});
