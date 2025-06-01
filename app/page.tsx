"use client";

import {
  ArrowDownToLine,
  Bed,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Coffee,
  Globe,
  Map,
  MapPin,
  Menu,
  Send,
  Shuffle,
  SplinePointer,
  Users,
  Utensils,
} from "lucide-react";
import ReactDOMServer from "react-dom/server";
import Image from "next/image";
import Link from "next/link";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import headingImage from "@/images/heading.webp";
import image1 from "@/images/1.webp";
import image2 from "@/images/2.webp";
import image3 from "@/images/3.webp";
import alsolik1 from "@/images/alsolike1.webp";
import alsolik2 from "@/images/alsolike2.webp";
import alsolik3 from "@/images/alsolike3.webp";
import alsolik4 from "@/images/alsolike4.webp";
import mapImage from "@/images/map.webp";
import { useState } from "react";

const coffeeIcon = L.divIcon({
  html: ReactDOMServer.renderToStaticMarkup(
    <div style={{ color: "brown", fontSize: "20px" }}>
      <Coffee />
    </div>
  ),
  className: "",
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  popupAnchor: [0, -24],
});

const utensilsIcon = L.divIcon({
  html: ReactDOMServer.renderToStaticMarkup(
    <div style={{ color: "green", fontSize: "20px" }}>
      <Utensils />
    </div>
  ),
  className: "",
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  popupAnchor: [0, -24],
});

const bedIcon = L.divIcon({
  html: ReactDOMServer.renderToStaticMarkup(
    <div style={{ color: "blue", fontSize: "20px" }}>
      <Bed />
    </div>
  ),
  className: "",
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  popupAnchor: [0, -24],
});

const locations = [
  {
    name: "Best Coffee Spot",
    position: [60.861, 7.205],
    description: "A cozy place to grab a coffee.",
    iconType: "coffee",
    url: "#",
  },
  {
    name: "Great Restaurant",
    position: [64.5, 10.0],
    description: "Enjoy local cuisine here.",
    iconType: "utensils",
    url: "#",
  },
  {
    name: "Comfort Stay",
    position: [62.101, 7.207],
    description: "Relax with a scenic view.",
    iconType: "bed",
    url: "#",
  },
];

export default function Component() {
  const center: [number, number] = [63.4305, 10.3951];

  if (!Array.isArray(center) || center.length !== 2 || center.some(isNaN)) {
    throw new Error("Invalid map center coordinates.");
  }

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = [
    {
      question: "How do I access the Guide and Map?",
      answer:
        "You will receive a link via email to access the digital guide and map instantly after purchase.",
    },
    {
      question: "Do I need internet connection?",
      answer:
        "No, you can download the map and guide for offline use while traveling.",
    },
    {
      question: "How long will I have access?",
      answer: "You'll have lifetime access to the guide and updates.",
    },
    {
      question: "Can I share it with my travel buddy?",
      answer:
        "Yes! We encourage sharing with one travel partner, but not for redistribution.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="min-h-screen bg-gray-50">





      {/* Header */}
      <header className="bg-white border-b px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4 sm:mx-30">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-semibold text-lg">Task</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Button className="bg-gradient-to-br from-blue-300 to-blue-800 rounded-lg hover:bg-blue-700">
            Log in
          </Button>
          <Button variant="ghost" size="lg" className="text-gray-600">
            <Globe className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="lg" className="text-gray-600">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">




        {/* Main Guide Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative">
            <Image
              src={headingImage}
              alt="Norway landscape with hammock"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-[300px]"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Norway Guide</h1>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Avatar className="w-6 h-6">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
              <span>Guide by Åsa Steinars</span>
              <span>•</span>
              <span>Norway</span>
              <span>•</span>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                New
              </Badge>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Norway is my second home. I was born in Norway and lived there
              until I was 7 years old. I often come back and I love this country
              almost as much as Iceland. Last summer I spent 3 months on the
              road with my car exploring everything from the south tip up to
              Lofoten.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              This guide includes my best tips for Norway, so make sure you make
              the most out of your trip. It's focused around the fjords in the
              west and Lofoten in the north — in my opinion, the best areas to
              explore in Norway.
            </p>
            <div className="flex gap-3 pt-4">
              <Button variant="outline" className="flex-1 cursor-pointer">
                Preview
              </Button>
              <Button className="flex-1 bg-gradient-to-br from-blue-300 to-blue-800 rounded-lg hover:bg-blue-700 cursor-pointer">
                GET ACCESS
              </Button>
            </div>
            <p className="text-xs text-gray-500 text-center">
              Valid for 100% trips
            </p>
          </div>
        </div>
        <Separator className="mb-10" />







        {/* Feature Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-700 font-bold">
            <MapPin className="w-4 h-4" />
            <span>161 things to do</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700 font-bold">
            <Map className="w-4 h-4" />
            <span>Interactive Map</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-700 font-bold">
            <Send className="w-4 h-4" />
            <span>Priority in Chat</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700 font-bold">
            <ArrowDownToLine className="w-4 h-4" />
            <span>Offline usage in app</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700 font-bold">
            <Shuffle className="w-4 h-4" />
            <span>Itinerary Builder access</span>
          </div>
        </div>
        <Separator className="mt-2" />






        {/* Map Section */}
        <section id="map" className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-2xl font-bold text-gray-800 ">
              Interactive Map
            </h3>
            <p className="text-sm text-gray-400">
              Get an Interactive, playful and visually appealing map that helps
              you navigate the noise
            </p>

            <div className="h-96 mt-6">
              <MapContainer
                center={center}
                zoom={5}
                className="h-full w-full z-0 rounded-2xl"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {locations.map((loc, idx) => {
                  const position: [number, number] = [
                    Number(loc.position[0]),
                    Number(loc.position[1]),
                  ];
                  let icon;
                  switch (loc.iconType) {
                    case "coffee":
                      icon = coffeeIcon;
                      break;
                    case "utensils":
                      icon = utensilsIcon;
                      break;
                    case "bed":
                      icon = bedIcon;
                      break;
                    default:
                      icon = L.icon;
                  }

                  if (
                    !Array.isArray(position) ||
                    position.length !== 2 ||
                    position.some(isNaN)
                  ) {
                    throw new Error(
                      `Invalid marker position for location: ${loc.name}`
                    );
                  }
                  return (
                    <Marker
                      key={idx}
                      position={position}
                      icon={icon}
                      eventHandlers={{
                        click: () => {
                          window.location.href = loc.url;
                        },
                      }}
                    >
                      <Popup>
                        <strong>{loc.name}</strong>
                        <p>{loc.description}</p>
                      </Popup>
                    </Marker>
                  );
                })}
              </MapContainer>
            </div>
          </div>
        </section>





        {/* 161 Things to Do Section */}
        <section className="mb-12 mt-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">161 things to do</h2>
              <p className="text-gray-600 text-sm">
                Get a curated list of all the best things
              </p>
              <p className="text-gray-600 text-sm">to do in Norway</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">Preview for FREE</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 cursor-pointer">
            {[image1, image2, image3].map((img, index) => (
              <Card key={index} className="shadow-none overflow-hidden p-0">
                {" "}
                <div className="relative h-80 w-full">
                  {" "}
                  <Image
                    src={img}
                    alt="thing to do"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <div className="text-black/60 text-center px-4 py-3 text-md font-bold">
                  {
                    [
                      "One of my favourite spots",
                      "Swing with stunning views",
                      "Beautiful view point",
                    ][index]
                  }
                </div>
              </Card>
            ))}
          </div>
        </section>





        {/* 1 Itinerary Section */}
        <section className="mb-12 mt-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">1 Itinerary</h2>
              <p className="text-gray-600 text-sm">
                The perfect itinerary for your trip
              </p>
              <p className="text-gray-600 text-sm">to Norway</p>
            </div>
            <p className="text-sm font-medium">Preview for FREE</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4 border-2 border-black/40 border-dashed flex items-center justify-center h-80 cursor-pointer">
              <SplinePointer className="text-gray-500" />
              <div className="text-center">
                <p className="text-lg font-medium mb-2 text-gray-500">
                  Itinery Builder
                </p>
                <p className="text-sm font-small text-gray-500">
                  Create your own Itinery
                </p>
              </div>
            </Card>
            <Card className="p-0 relative overflow-hidden rounded-lg h-80">
              <div className="relative h-full w-full cursor-pointer">
                <Image
                  src={mapImage}
                  alt="map image"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-sm text-white z-10 font-bold">
                <Users className="w-4 h-4" />
                <span>Day-8</span>
              </div>
            </Card>
            <Card className="p-4 border-2 border-black/40 border-dashed flex items-center justify-center h-80 cursor-pointer">
              <div className="text-center text-gray-500">
                <p className="text-lg font-medium mb-2">Preview for FREE</p>
              </div>
            </Card>
          </div>
        </section>
        <Separator className="mb-10" />




        {/* Guide by Åsa Steinars Section */}
        <section className="mb-12 mt-18">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative">
              <Image
                src={headingImage}
                alt="Norway landscape"
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-[300px]"
              />
              <div className="absolute bottom-4 left-4 bg-white px-3 py-2 rounded-lg">
                <p className="font-medium text-sm">Norway Guide</p>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Guide by Åsa Steinars</h2>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-300 rounded"></div>
                <div className="w-4 h-4 bg-gray-300 rounded"></div>
                <div className="w-4 h-4 bg-gray-300 rounded"></div>
                <div className="w-4 h-4 bg-gray-300 rounded"></div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Åsa Steinars is an Iceland-based photographer and videographer
                from Iceland. Growing up in Iceland, she has been exploring
                landscapes and human landscapes around the globe for a light
                touch to nature and its forces. This you can clearly see in her
                photography. She works as a full time content creator, helping
                people to travel Iceland like she does. She has a total
                following of almost 2 million across her social media platforms.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Messages
                </Button>
                <Button variant="outline" size="sm">
                  Storefront
                </Button>
                <Button variant="outline" size="sm">
                  Guide Affiliate Program
                </Button>
              </div>
            </div>
          </div>
        </section>
        <Separator className="mb-10" />




        {/* You may also like Section */}
        <section className="mb-12 mt-18">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">You may also like</h2>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 cursor-pointer">
            {[
              { title: "Iceland Guide", image: alsolik1 },
              { title: "Explore Lithuania", image: alsolik2 },
              { title: "Exploring Iceland's Hidden Gems", image: alsolik3 },
              { title: "Local Secrets of the Dolomites", image: alsolik4 },
            ].map(({ title, image }, index) => (
              <Card
                key={index}
                className="shadow-none overflow-hidden p-0 min-h-[22rem]"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="pt-3 pb-4 px-4 text-center">
                  <p className="text-black font-medium text-sm">{title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <Separator className="mb-10" />


        

        {/* Your questions, answered Section */}
        <section className="mt-18">
          <h2 className="text-2xl font-bold mb-6">Your questions, answered</h2>
          <div className="space-y-4">
            {questions.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex items-center justify-between w-full text-left cursor-pointer"
                >
                  <span className="font-medium">{item.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="mt-2 text-sm text-gray-600">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
