import { Card, CardBody, Chip } from "@heroui/react";

export default function Timeline() {
  return (
    <>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Timeline
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Central line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-ft-primary-blue-500"></div>

              <div className="space-y-16">
                {/* Event 1 - Right */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-4 text-right">
                    <Chip className="bg-[#D8B35A] text-black text-sm font-medium">
                      January 1st, 2025
                    </Chip>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 size-5 bg-[#4A407D] rounded-full border-4 border-white"></div>
                  <div className="w-1/2 pl-8">
                    <h3 className="font-bold text-gray-900 mb-1 ml-2">
                      An Event Here
                    </h3>
                    <Card className="bg-[#F3F2F9] border-none rounded-md">
                      <CardBody className="p-6">
                        <div className="w-full h-20 bg-gray-200 rounded-lg"></div>
                      </CardBody>
                    </Card>
                  </div>
                </div>

                {/* Event 2 - Left */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8">
                    <h3 className="font-bold text-right text-gray-900 mb-1 mr-2">
                      An Event Here
                    </h3>
                    <Card className="bg-[#F3F2F9] border-none rounded-md">
                      <CardBody className="p-6">
                        <div className="w-full h-20 bg-gray-200 rounded-lg"></div>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 size-5 bg-[#4A407D] rounded-full border-4 border-white"></div>
                  <div className="w-1/2 pl-4 text-left">
                    <Chip className="bg-[#D8B35A] text-black text-sm font-medium">
                      January 1st, 2025
                    </Chip>
                  </div>
                </div>

                {/* Event 3 - Right */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-4 text-right">
                    <Chip className="bg-[#D8B35A] text-black text-sm font-medium">
                      January 1st, 2025
                    </Chip>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 size-5 bg-[#4A407D] rounded-full border-4 border-white"></div>
                  <div className="w-1/2 pl-8">
                    <h3 className="font-bold text-gray-900 mb-1 ml-2">
                      An Event Here
                    </h3>
                    <Card className="bg-[#F3F2F9] border-none rounded-md">
                      <CardBody className="p-6">
                        <div className="w-full h-20 bg-gray-200 rounded-lg"></div>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
