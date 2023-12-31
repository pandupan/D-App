'use client';

import ButtonOutline from "@/components/core/buttons/ButtonOutline";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = () => {
  return (
    <div className="w-full h-full sm:container sm:px-8 sm:mb-16 px-4 mt-10">
      <div className="sm:space-y-10 space-y-6">
        <h1 className="sm:text-5xl text-3xl font-bold tracking-normal">FAQs</h1>
        <p className="sm:text-base text-sm">Find answers to common questions about the donation process.</p>
      </div>

      <div className="mt-8">
        <Accordion type="single" collapsible className="w-full sm:text-base text-sm">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-bold">How do I donate?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam dolorem officiis dolore! Eveniet optio repellendus dolorum non accusantium possimus dolore!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-bold text-left">Can I change my donation amount?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa magnam nihil recusandae hic officia maiores, quidem maxime sit iste odit.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-bold">What if my transaction fails?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad blanditiis nisi inventore dicta repudiandae, suscipit praesentium quidem aspernatur minus tenetur?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="font-bold">How are gas fees estimated?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolore eaque unde id vero amet maiores tempore illum veniam distinctio!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="font-bold">Where can I learn more?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque voluptatem cumque minima voluptatum architecto! Molestias deleniti provident quo cum illum?
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* <div className="space-y-6 sm:mt-16 mt-[40px]">
        <h2 className="sm:text-3xl text-2xl font-bold">Still have questions?</h2>
        <p>Contact us for further assistance</p>
        <ButtonOutline title="Contact"/>
      </div> */}
    </div>
  )
}

export default FAQ


 
