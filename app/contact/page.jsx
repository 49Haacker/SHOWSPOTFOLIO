"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 7355749398",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "gauravtiwari7888@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description:
      "99, Vishnu nagar, Bamroli road, Paunchmukhi BRTS, surat, Gujrat, 394210",
  },
];

import { motion } from "framer-motion";
import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";

const formSchema = z.object({
  firstname: z.string().min(2, {
    message: "Firstname must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "Lastname must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  email: z.string().min(6, {
    message: "Email must be at least 6 characters with @.",
  }),
  message: z.string().min(20, {
    message: "Message must be at least 20 characters.",
  }),
  services: z.string().nonempty({ message: "Please select type of service." }),
});

const Constact = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      message: "",
      services: "",
    },
  });

  const handleSendMail = (value) => {
    console.log("value", value);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            {/* form */}
            <div className="xl:w-[54%] order-2 xl:order-none">
              {/* <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                <h3 className="text-4xl text-accent">
                  Let&apos;s work together
                </h3>
                <p className="text-white/60">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  sequi esse facere quidem soluta.
                </p>
                input
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="firstname" placeholder="Firstname" />
                  <Input type="lastname" placeholder="Lastname" />
                  <Input type="email" placeholder="Email address" />
                  <Input type="phone" placeholder="Phone number" />
                </div>
                select
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="select a services" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="est">Web Development</SelectItem>
                      <SelectItem value="cst">UI/UX Design</SelectItem>
                      <SelectItem value="mst">Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                textarea
                <Textarea
                  className="h-[200px]"
                  placeholder="Type your message here."
                />
                btn
                <Button size="md" className="max-w-40" onClick={handleSendMail}>
                  Send Message
                </Button>
              </form> */}

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleSendMail)}
                  className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                >
                  <h3 className="text-4xl text-accent">
                    Let&apos;s work together
                  </h3>
                  <p className="text-white/60">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                    sequi esse facere quidem soluta.
                  </p>

                  {/* input */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstname"
                      render={({ field }) => (
                        <FormItem>
                          {/* <FormLabel>First Name</FormLabel> */}
                          <FormControl>
                            {/* <Input placeholder="shadcn" {...field} /> */}
                            <Input
                              type="firstname"
                              placeholder="Firstname"
                              {...field}
                            />
                          </FormControl>
                          {/* <FormDescription>
                          This is your public display name.
                        </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastname"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="lastname"
                              placeholder="Lastname"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Email address"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="phone"
                              placeholder="Phone number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* select */}
                  <FormField
                    control={form.control}
                    name="services"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="select a services" />
                            </SelectTrigger>
                          </FormControl>

                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Select a service</SelectLabel>

                              <SelectItem value="est">
                                Web Development
                              </SelectItem>
                              <SelectItem value="cst">UI/UX Design</SelectItem>
                              <SelectItem value="mst">Logo Design</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* textarea */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            className="h-[200px]"
                            placeholder="Type your message here."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* btn */}
                  <Button size="md" className="max-w-40" type="submit">
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>

            {/* info */}
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c]  text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>

                    <div
                      className={`flex-1 ${
                        item.title === "Email" &&
                        "max-[449px]:overflow-x-scroll max-[449px]:w-[33px]"
                      }`}
                    >
                      <h3 className="text-white/60">{item.title}</h3>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Constact;
