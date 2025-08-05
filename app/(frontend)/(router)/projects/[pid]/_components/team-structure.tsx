import {
  Accordion,
  AccordionItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  Divider,
  Input,
} from "@heroui/react";
import Image from "next/image";

export default function TeamStructure() {
  return (
    <>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Team Structure
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="max-w-[400px]">
              <CardHeader className="flex gap-3">
                <Image
                  alt="heroui logo"
                  height={40}
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  width={40}
                  className="rounded-sm"
                />
                <div className="flex flex-col">
                  <p className="text-md">HeroUI</p>
                  <p className="text-small text-default-500">heroui.com</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>
                  Make beautiful websites regardless of your design experience.
                </p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link
                  isExternal
                  showAnchorIcon
                  href="https://github.com/heroui-inc/heroui"
                >
                  Visit source code on GitHub.
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div>
            <Accordion>
              <AccordionItem
                key="1"
                aria-label="Controlled accordion"
                title="Controlled accordion"
              >
                <Input label="Requires 2 clicks to input" />
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
