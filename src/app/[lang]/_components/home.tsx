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
    title: "Primal Paradise",
    description: "Map: The Island, Rates: 3x Harvesting, 3x Taming, 3x XP",
    url: "steam://gs.promnet.cloud:7777",
    image_url: "/brand/servers/the_island_card.webp",
    version: `PVE`,
  },
  {
    title: "Survival Sanctuary",
    description: "Map: The Center, Rates: 3x Harvesting, 3x Taming, 5x XP",
    url: "steam://gs.promnet.cloud:7778",
    image_url: "/brand/servers/the_center_card.avif",
    version: `PVP`,
  },
  /* {
    title: "Dino Dominion",
    description:
      "Map: Ragnarok, Rates: 4x Harvesting, 2.5x Taming, 2x XP",
    url: "steam://gs.promnet.cloud:7779",
    image_url: "/brand/servers/ragnarok_card.webp",
    version: `PVP`,
  },
  {
    title: "Jurassic Journey",
    description:
      "Map: Valguero, Rates: 4x Harvesting, 3x Taming, 2x XP",
    url: "steam://gs.promnet.cloud:7780",
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
        <h1 className="font-bold text-5xl">{t("Next.js base template")}</h1>
        <p>
          {t(
            "We're excited to present our lineup of ARK servers, ready for you to explore and conquer! Below are the details of each server."
          )}
        </p>
      </div>
      <Row xs={1} md={2} className="g-4">
        {modules_card.map((card, idx) => (
          <Col key={idx}>
            <Link target="_block" href={card.url} className="no-underline">
              <Card>
                <div
                  className="w-full h-[260px] bg-cover bg-no-repeat bg-center rounded-[0.375rem] rounded-b-none"
                  style={{ backgroundImage: `url(${card.image_url})` }}
                />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.description}</Card.Text>
                  <Badge bg="primary">{card.version}</Badge>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </BasePageLayout>
  );
}
