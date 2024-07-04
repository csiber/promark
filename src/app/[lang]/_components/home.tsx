"use client";
// Layout
import BasePageLayout from "@/components/client/base_layout";

// React
import React, { useEffect, useState } from "react";
import Link from "next/link";

// React bootstrap
import {
  Accordion,
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  ProgressBar,
  Row,
} from "react-bootstrap";

// i18n
import { useLanguage, useTranslation } from "@/app/i18n/client";

const modules_card = [
  {
    title: "Jurassic Ascension",
    description:
      "Map: The Island_WP, Rates: 2x Harvesting, 2x Taming, 2x XP",
    url: "steam://run/2430930//+connect%2088.209.193.221:7780",
    image_url: "/brand/servers/jurassic_ascension.webp",
    version: `PVE`,
    status: `Online`,
  },
  {
    title: "Primal Paradise",
    description: "Map: The Island, Rates: 3x Harvesting, 3x Taming, 3x XP",
    url: "steam://run/346110//+connect%2088.209.193.221:7777",
    image_url: "/brand/servers/the_island_card.webp",
    version: `PVE`,
    status: `Online`,
  },
/*   {
    title: "Survival Sanctuary",
    description: "Map: The Center, Rates: 3x Harvesting, 3x Taming, 5x XP",
    url: "steam://run/346110//+connect%2088.209.193.221:7778",
    image_url: "/brand/servers/the_center_card.avif",
    version: `PVP`,
    status: `Offline`,
  }, */
  {
    title: "Dino Dominion",
    description:
      "Map: Ragnarok, Rates: 4x Harvesting, 2.5x Taming, 3x XP",
    url: "steam://run/346110//+connect%2088.209.193.221:7779",
    image_url: "/brand/servers/ragnarok_card.webp",
    version: `PVP`,
    status: `Online`,
  },
  /*
{
  title: "Jurassic Journey",
  description:
    "Map: Valguero, Rates: 4x Harvesting, 3x Taming, 2x XP",
  url: "steam://run/346110//+connect%2088.209.193.221:7780",
  image_url: "/brand/servers/valguero_card.webp",
  version: `PVP`,
},
{
  title: "Eternal Eden",
  description:
    "Map: Crystal Isles, Rates: 5x Harvesting, 4x Taming, 3x XP",
  url: "steam://gs.promnet.cloud:7781",
  image_url: "/brand/servers/crystal_isles_card.webp",
  version: `PVP`,
},
{
  title: "Ancient Ark",
  description:
    "Map: Scorched Earth, Rates: 3x Harvesting, 2x Taming, 1.5x XP",
  url: "steam://gs.promnet.cloud:7782",
  image_url: "/brand/servers/scorched_earth_card.webp",
  version: `PVP`,
},
{
  title: "Wild Wilderness",
  description:
    "Map: Extinction, Rates: 4x Harvesting, 3x Taming, 2x XP",
  url: "steam://gs.promnet.cloud:7783",
  image_url: "/brand/servers/extinction_card.webp",
  version: `PVP`,
},
{
  title: "Genesis Grounds",
  description:
    "Map: Genesis Part 1, Rates: 5x Harvesting, 4x Taming, 3x XP",
  url: "steam://gs.promnet.cloud:7784",
  image_url: "/brand/servers/genesispart1_card.webp",
  version: `PVP`,
},
{
  title: "Dino Dynasty",
  description:
    "Map: Aberration, Rates: 3x Harvesting, 2x Taming, 1.5x XP",
  url: "steam://gs.promnet.cloud:7785",
  image_url: "/brand/servers/aberration_card.webp",
  version: `PVP`,
}, */
];

export default function PageClientLayout_Home() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <BasePageLayout>
      <div className="flex flex-col gap-2 text-center py-5">
        <h1 className="font-bold text-5xl bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
          {t("PromARK: ARK game servers")}
        </h1>
        <p>
          {t(
            "We're excited to present our lineup of ARK servers, ready for you to explore and conquer! Below are the details of each server."
          )}
        </p>
      </div>
      <Row xs={1} md={2} className="g-4">
        {modules_card.map((card, idx) => (
          <Col key={idx}>
            <Link href={card.url} passHref>
              <Card>
                <div
                  className="w-full h-[260px] bg-cover bg-no-repeat bg-center rounded-[0.375rem] rounded-b-none"
                  style={{ backgroundImage: `url(${card.image_url})` }}
                />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.description}</Card.Text>
                  <Badge bg="primary">{card.version}</Badge>
                  <Badge bg="text-green-500 animate-pulse">{card.status}</Badge>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
        <iframe
          src="https://discord.com/widget?id=917759709468037190&theme=dark"
          width="625"
          height="375"
          allowTransparency  // Itt nincs érték megadva, csak jelen van az attribútum
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
      </Row>
    </BasePageLayout>
  );
}