"use client";
// Layout
import BasePageLayout from "@/components/client/base_layout";

// React
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

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

export default function PageClientLayout_Home() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <BasePageLayout>
      <div className="flex flex-col gap-2 text-center py-5">
        <h1 className="font-bold text-5xl bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
          {t("PromARK Tutorial")}
        </h1>
        <p>{t("Tutorial text")}</p>

        <p>{t("Tutorial text2")}</p>

        <p>{t("Tutorial text3")}</p>

        <p>{t("Tutorial text4")}</p>

        <p>{t("Tutorial text5")}</p>

        <p>{t("Tutorial text6")}</p>

        <p>{t("Tutorial text7")}</p>

        <p>{t("Tutorial text8")}</p>

        <p>{t("Tutorial text9")}</p>

        {t("Tutorial text10")}

        <p>{t("Tutorial text11")}</p>

        <p>{t("Tutorial text12")}</p>

        <h2>{t("Tutorial text13")}</h2>

        <p>{t("Tutorial text14")}</p>

        {t("Tutorial text15")}

        <p>{t("Tutorial text16")}</p>

        <p>{t("Tutorial text17")}</p>

        <h2>{t("Tutorial text18")}</h2>

        <p>{t("Tutorial text19")}</p>

        <p>{t("Tutorial text20")}</p>

        <p>{t("Tutorial text21")}</p>

        <p>{t("Tutorial text22")}</p>

        <p>{t("Tutorial text23")}</p>

        <p>{t("Tutorial text24")}</p>

        <p>{t("Tutorial text25")}</p>

        <p>{t("Tutorial text26")}</p>

        <h2>{t("Tutorial text27")}</h2>

        <p>{t("Tutorial text28")}</p>

        <p>{t("Tutorial text29")}</p>

        <p>
          <b>{t("Tutorial text30")}</b>
        </p>

        <p>{t("Tutorial text31")}</p>

        <p>{t("Tutorial text32")}</p>

        <p>{t("Tutorial text33")}</p>

        <p>{t("Tutorial text34")}</p>

        <p>
          <b>{t("Tutorial text35")}</b>
        </p>

        <p>{t("Tutorial text36")}</p>

        <p>
          <b>Turrets</b>
        </p>

        <p>{t("Tutorial text37")}</p>
        <p>
          <b>Farm</b>
        </p>

        <p>{t("Tutorial text38")}</p>

        <p>{t("Tutorial text39")}</p>

        <p>
          <b>{t("Tutorial text40")}</b>
        </p>

        <p>{t("Tutorial text41")}</p>

        <p>
          <b>{t("Tutorial text42")}</b>
        </p>

        <p>{t("Tutorial text43")}</p>
      </div>
    </BasePageLayout>
  );
}
