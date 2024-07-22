"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const Faq = () => {
  return (
    <div className="flex flex-col items-center justify-center overflow-auto max-w-[800px] w-full">
        <div id="header" className='text-9xl text-white font-bold mt-6 mb-6'>
          FAQ
        </div>
        <div className="text-white">
        <Accordion type="single" collapsible className="sm:flex sm:flex-col sm:items-center sm:justify-center overflow-hidden md:flex-none md:block md:items-stretch md:justify-start">
            <AccordionItem value="what-is-radar">
            <AccordionTrigger className="text-4xl mt-6">What is Radar?</AccordionTrigger>
            <AccordionContent className="text-4xl">
                Radar is a mobile app that helps you discover events happening on your campus.
            </AccordionContent>
            </AccordionItem>
            <AccordionItem value="when-available">
            <AccordionTrigger className="text-4xl mt-6">When will Radar be available?</AccordionTrigger>
            <AccordionContent className="text-4xl">
                Radar will be available for download on August 19, 2024.
            </AccordionContent>
            </AccordionItem>
            <AccordionItem value="contact">
            <AccordionTrigger className="text-4xl mt-6">How can I get in touch with the Radar team?</AccordionTrigger>
            <AccordionContent className="text-4xl">
                You can reach out to us at radarapp.events @ gmail.com
            </AccordionContent>
            </AccordionItem>
        </Accordion>
        </div>
    </div>
  )
}

export default Faq;