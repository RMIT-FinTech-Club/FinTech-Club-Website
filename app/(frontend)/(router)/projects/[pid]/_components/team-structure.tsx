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
  Avatar,
} from "@heroui/react";

export default function TeamStructure() {
  return (
    <>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Team Structure
          </h2>
          <div className="grid lg:grid-cols-3 gap-6 items-start">
            <div className="flex justify-start col-span-1">
              <Card className="w-full h-fit">
                <CardHeader className="flex gap-3">
                  <Avatar
                    alt="avatar"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    className="rounded-sm"
                    size="lg"
                  />

                  <div className="flex flex-col">
                    <p className="text-md">Name</p>
                    <p className="text-sm text-default-500">Project Leader</p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <p className="text-sm">
                    <b>Major: </b> Software Engineering
                    <br />
                    <b>Project Joined: </b> Chess, Fintertainment
                    <br />
                    <b>Email: </b> name@example.com
                  </p>
                </CardBody>
                <Divider />
                <CardFooter>
                  <Link
                    className="text-sm"
                    isExternal
                    showAnchorIcon
                    href="https://github.com/heroui-inc/heroui"
                  >
                    Visit source code on GitHub.
                  </Link>
                </CardFooter>
              </Card>
            </div>

            {/* Accordion Container */}
            <div className="col-span-2">
              <Accordion
                selectionMode="multiple"
                showDivider={false}
                itemClasses={{
                  base: "bg-ft-primary-blue-500 rounded-lg !border-none mb-1",
                  title: "text-white font-bold text-base",
                  trigger: "px-4",
                  indicator: "text-xl font-bold text-white",
                  content: "bg-ft-primary-blue-100 rounded-b-lg p-4",
                }}
              >
                <AccordionItem
                  key="1"
                  aria-label="Development"
                  title="Development"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat quos officia consequatur ea sequi, saepe eum accusamus
                  similique suscipit repellendus dignissimos, illum modi illo
                  quae iure delectus adipisci voluptate dolor. Adipisci suscipit
                  nemo fugiat cum recusandae eius repellat iusto, ad eligendi
                  dolorem, rerum nostrum distinctio labore ipsam molestiae nobis
                  vel, deleniti et eum voluptates! Ipsum, iusto soluta porro
                  commodi illum, adipisci possimus quae explicabo aut ipsam,
                  dolorum deleniti est facere ea non. Tempore facere, impedit
                  nam aliquam est deserunt laborum ad similique ullam?
                  Accusantium consectetur aperiam, suscipit rem quae, impedit
                  earum quam, minima hic eos soluta delectus minus fuga?
                  Distinctio!
                </AccordionItem>

                <AccordionItem
                  key="2"
                  aria-label="Design"
                  title="Design"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat quos officia consequatur ea sequi, saepe eum accusamus
                  similique suscipit repellendus dignissimos, illum modi illo
                  quae iure delectus adipisci voluptate dolor. Adipisci suscipit
                  nemo fugiat cum recusandae eius repellat iusto, ad eligendi
                  dolorem, rerum nostrum distinctio labore ipsam molestiae nobis
                  vel, deleniti et eum voluptates! Ipsum, iusto soluta porro
                  commodi illum, adipisci possimus quae explicabo aut ipsam,
                  dolorum deleniti est facere ea non. Tempore facere, impedit
                  nam aliquam est deserunt laborum ad similique ullam?
                  Accusantium consectetur aperiam, suscipit rem quae, impedit
                  earum quam, minima hic eos soluta delectus minus fuga?
                  Distinctio!
                </AccordionItem>

                <AccordionItem
                  key="3"
                  aria-label="Marketing"
                  title="Marketing"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat quos officia consequatur ea sequi, saepe eum accusamus
                  similique suscipit repellendus dignissimos, illum modi illo
                  quae iure delectus adipisci voluptate dolor. Adipisci suscipit
                  nemo fugiat cum recusandae eius repellat iusto, ad eligendi
                  dolorem, rerum nostrum distinctio labore ipsam molestiae nobis
                  vel, deleniti et eum voluptates! Ipsum, iusto soluta porro
                  commodi illum, adipisci possimus quae explicabo aut ipsam,
                  dolorum deleniti est facere ea non. Tempore facere, impedit
                  nam aliquam est deserunt laborum ad similique ullam?
                  Accusantium consectetur aperiam, suscipit rem quae, impedit
                  earum quam, minima hic eos soluta delectus minus fuga?
                  Distinctio!
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
