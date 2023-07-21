"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "Joel",
    avatar: "J",
    title: "Software Engineer",
    description: "GPTaaS has been a game-changer for our business. We were able to automate our content creation process, which has saved us a lot of time and money. The results have been amazing, and our customers are loving the new content.",
  },
  {
    name: "Antonio",
    avatar: "A",
    title: "Designer",
    description: "I was skeptical at first, but GPTaaS has really exceeded my expectations. I've been able to generate high-quality content in a fraction of the time it used to take me. I'm so glad I decided to give it a try.",
  },
  {
    name: "Mark",
    avatar: "M",
    title: "CEO",
    description: "GPTaaS is the most powerful generative AI tool I've ever used. It's helped me to take my content marketing to the next level. I highly recommend it to anyone who wants to create high-quality content on a consistent basis.",
  },
  {
    name: "Mary",
    avatar: "M",
    title: "Entrepeneur",
    description: "GPTaaS is the most powerful generative AI tool I've ever used. It's helped me to take my content marketing to the next level. I highly recommend it to anyone who wants to create high-quality content on a consistent basis.",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
