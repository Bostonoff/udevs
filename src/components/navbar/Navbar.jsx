import React, { useEffect, useState } from "react";
import { Button, Drawer, Menu, Dropdown, Space } from "antd";
import { IoMenuOutline, IoLogoInstagram } from "react-icons/io5";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { FcScatterPlot } from "react-icons/fc";
import { GiAutoRepair } from "react-icons/gi";
import { SiEbox } from "react-icons/si";
import { TfiTwitter } from "react-icons/tfi";
import { SlSocialYoutube } from "react-icons/sl";
import { MdOutlineMonitor } from "react-icons/md";
import {
  TbCircleLetterD,
  TbCircleLetterS,
  TbHexagonLetterG,
  TbHexagonLetterI,
} from "react-icons/tb";
import { DownOutlined } from "@ant-design/icons";
import {} from "antd";
const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleLinkClick = () => {
    onClose();
  };

  const renderMenuItem = (item) => (
    <a href={`#${item.linkId}`} className="menu__item" key={item.key}>
      <Button shape="circle" className="menu__item__image">
        {item.imageUrl}
      </Button>
      <span className="menu__item__label">{item.label}</span>
    </a>
  );
  const renderMenuItemLanguage = (item) => (
    <div className="menu__item" key={item.key}>
      <Button shape="circle" className="menu__item__image__language">
        {typeof item.imageUrl === "string" ? (
          <img src={item.imageUrl} alt="icon" />
        ) : (
          item.imageUrl
        )}
      </Button>
      <span className="menu__item__label">{item.label}</span>
    </div>
  );
  const items = [
    {
      key: "1",
      type: "group",
      label: "Directions",
      children: [
        {
          key: "1-1",
          label: renderMenuItem({
            key: "1-1",
            imageUrl: <HiOutlineDevicePhoneMobile />,
            label: (
              <>
                Development of mobile <br /> applications
              </>
            ),
            linkId: "mobile",
          }),
        },
        {
          key: "1-2",
          label: renderMenuItem({
            key: "1-2",
            imageUrl: <FcScatterPlot />,
            label: (
              <>
                Development and <br /> implementation ERP systems
              </>
            ),
            linkId: "erp-system",
          }),
        },
        {
          key: "1-3",
          label: renderMenuItem({
            key: "1-3",
            imageUrl: <SiEbox />,
            label: (
              <>
                User interface, <br />
                User experience design
              </>
            ),
            linkId: "ui/ux",
          }),
        },
        {
          key: "1-4",
          label: renderMenuItem({
            key: "1-4",
            imageUrl: <MdOutlineMonitor />,
            label: <>IT Consulting</>,
            linkId: "consulting",
          }),
        },
        {
          key: "1-5",
          label: renderMenuItem({
            key: "1-5",
            imageUrl: <GiAutoRepair />,
            label: (
              <>
                Optimization IT consulting
                <br /> infrastructure
              </>
            ),
            linkId: "optimisation",
          }),
        },
      ],
    },
  ];
  const itemsPortfolio = [
    {
      key: "2",
      type: "group",
      label: "Portfolio",
      children: [
        {
          key: "2-1",
          label: renderMenuItem({
            key: "2-1",
            imageUrl: <TbCircleLetterD />,
            label: <>Delever</>,
            linkId: "deliver",
          }),
        },
        {
          key: "2-2",
          label: renderMenuItem({
            key: "2-2",
            imageUrl: <TbCircleLetterS />,
            label: <>Sms.uz</>,
            linkId: "sms",
          }),
        },
        {
          key: "2-3",
          label: renderMenuItem({
            key: "2-3",
            imageUrl: <TbHexagonLetterI />,
            label: "Iman",
            linkId: "iman",
          }),
        },
        {
          key: "2-4",
          label: renderMenuItem({
            key: "2-4",
            imageUrl: <TbHexagonLetterG />,
            label: "GoodZone",
            linkId: "goodzone",
          }),
        },
      ],
    },
  ];
  const itemsLanguages = [
    {
      key: "3",
      type: "group",
      label: "Languages",
      children: [
        {
          key: "3-1",
          label: renderMenuItemLanguage({
            key: "3-1",
            imageUrl:
              "data:image/png;base64,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",
            label: "English",
          }),
        },
        {
          key: "3-2",
          label: renderMenuItemLanguage({
            key: "3-2",
            imageUrl:
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yNTYgNTEyQzM5Ny4zODUgNTEyIDUxMiAzOTcuMzg1IDUxMiAyNTZDNTEyIDExNC42MTUgMzk3LjM4NSAwIDI1NiAwQzExNC42MTUgMCAwIDExNC42MTUgMCAyNTZDMCAzOTcuMzg1IDExNC42MTUgNTEyIDI1NiA1MTJaIiBmaWxsPSIjRjBGMEYwIi8+CjxwYXRoIGQ9Ik00OTYuMDc3IDM0NS4wNDNDNTA2LjM2OCAzMTcuMzEgNTEyIDI4Ny4zMTQgNTEyIDI1NkM1MTIgMjI0LjY4NiA1MDYuMzY4IDE5NC42OSA0OTYuMDc3IDE2Ni45NTdIMTUuOTIzQzUuNjMzIDE5NC42OSAwIDIyNC42ODYgMCAyNTZDMCAyODcuMzE0IDUuNjMzIDMxNy4zMSAxNS45MjMgMzQ1LjA0M0wyNTYgMzY3LjMwNEw0OTYuMDc3IDM0NS4wNDNaIiBmaWxsPSIjMDA1MkI0Ii8+CjxwYXRoIGQ9Ik0yNTYgNTEyQzM2Ni4wNzEgNTEyIDQ1OS45MDYgNDQyLjUyOCA0OTYuMDc3IDM0NS4wNDNIMTUuOTIzMUM1Mi4wOTQxIDQ0Mi41MjggMTQ1LjkyOSA1MTIgMjU2IDUxMloiIGZpbGw9IiNEODAwMjciLz4KPC9zdmc+Cg==",
            label: "Russia",
          }),
        },
        {
          key: "3-3",
          label: renderMenuItemLanguage({
            key: "3-3",
            imageUrl:
              "data:image/png;base64,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",
            label: "Uzbek",
          }),
        },
      ],
    },
  ];
  return (
    <header data-aos="fade-down">
      <div className="container">
        <nav className="navbar">
          <a href="#">
            <img
              style={{ width: "96px", margin: "0" }}
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTY4IiBoZWlnaHQ9IjU2IiB2aWV3Qm94PSIwIDAgMTY4IDU2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2MS40MzIgNDIuNjE5MkMxNjUuNTg0IDQxLjIwMzQgMTY4IDM4LjE4OCAxNjggMzMuNzU2N0MxNjggMzEuNTczNCAxNjcuMjQzIDI5LjU3NzEgMTY1Ljc5IDI3Ljg5MzZDMTYzLjY0MiAyNS4zOTc0IDE2MC4wNDEgMjMuODM2NCAxNTUuMjQzIDIzLjMzNjZDMTUzLjYwNCAyMy4xMzM0IDE0OS40OTQgMjIuNjEwOSAxNDkuNDk0IDIwLjM0MDVDMTQ5LjQ5NCAxNy44MjQ5IDE1Ny42NDkgMTcuMTYwNiAxNTkuNzkgMjAuMDMwOUMxNjAuMzQ4IDIwLjc4ODggMTYwLjM1OCAyMS43MDE1IDE2MC4zNTggMjIuNTg4M0gxNjhDMTY4IDIwLjE5MjEgMTY3LjU4OSAxNy45NzAxIDE2Ni4yMzEgMTUuOTEyNUMxNjQuNjUxIDEzLjQ3NzUgMTYxLjM2NyAxMC42MDcyIDE1NC43OTkgMTAuNjA3MkMxNDkuODExIDEwLjYwNzIgMTQ2LjE0OCAxMS45MTY2IDE0My44NzMgMTQuNDc3M0MxNDIuNzk5IDE1LjY2MDkgMTQxLjYwMSAxNy43MjE3IDE0MS42MDEgMjAuNzE0NkMxNDEuNjAxIDIyLjk2MjUgMTQyLjM1OCAyNC44OTc1IDE0My44NzMgMjYuNTgxQzE0NC45NDcgMjcuNzAzMyAxNDYuMzM4IDI4LjY0MTggMTQ4LjA0MiAyOS4zMjU1QzE0OS43NDYgMzAuMDc2OSAxNTEuODk0IDMwLjU3MzYgMTU0LjM1OCAzMC44MjUyQzE1Ni41MDYgMzEuMDczNSAxNjAuMTY5IDMxLjc2MDQgMTYwLjE2OSAzMy43NTY3QzE2MC4xNjkgMzQuMTMwOCAxNjAuMDQxIDM0Ljc1NjUgMTU5LjAyOSAzNS4yNTMyQzE1Ni45NjYgMzYuMzQzMiAxNTEuMzI2IDM2LjQxNzQgMTQ5LjkzNSAzNC4xMzA4QzE0OS4zNzMgMzMuMjQzOSAxNDkuMjQzIDMyLjEwNTUgMTQ5LjI0MyAzMS4wNzM1TDE0MS42MDEgMzAuOTUwOUMxNDEuNjAxIDM2LjM0IDE0My41NSA0MC42MjI5IDE0OC45MjYgNDIuNTU0N0MxNTIuNDcxIDQzLjk4MzQgMTU3Ljg0MSA0My43OTk2IDE2MS40MzIgNDIuNjE5MlpNODQuNzI2MiAxMS45MzZDNzYuMDM5NyAxNC4xNDg0IDcwLjc3NDMgMjIuOTE0MSA3My4wMTY5IDMxLjQ5MjdDNzUuMjU2MyA0MC4wNzE0IDg0LjEyNTUgNDUuMjczNCA5Mi44MTIgNDMuMDYxQzk5LjY1NzMgNDEuMzAzNCAxMDIuNDI5IDM3LjU5NDYgMTA0LjQ2MiAzMS43NTA3TDk1Ljg3MDcgMzEuMjQxMkM5NC42NDY2IDMzLjI1NjkgOTMuMDc2NCAzNC41NjMgOTAuNzU1NSAzNS4yMDhDODcuNjU0MyAzNS45NzU2IDg0LjAwNDggMzQuNzg1NSA4Mi4yMjI0IDMyLjEwODdMMTA1LjI3MiAyNi40NjgxQzEwNC4yNDcgMTYuNzE4NyA5NC40ODY2IDkuNDQ2MjEgODQuNzI2MiAxMS45MzZaTTkyLjg2NDIgMjAuNjYzQzkzLjc5NzggMjEuMjY5MyA5NC42MjM3IDIxLjk2NTkgOTUuMjM3NCAyMi44NDMxTDgwLjg0MTYgMjYuNDAzNkM4MC45NjI0IDI1LjM0NTggODEuMzYwNiAyNC4zNDYgODEuODUwMyAyMy40NTI3Qzg0LjEwNiAxOS43MzQyIDg5LjA3NDMgMTguNTI0OCA5Mi44NjQyIDIwLjY2M1pNMTMwLjQ4MyAxMS40MTk5TDEyMi4yNzMgMjkuMzlMMTEzLjQzIDExLjQxOTlIMTAzLjEzN0wxMTguOTI3IDQzLjU1NDVIMTI1LjYyMkwxNDAuNzE2IDExLjQxOTlIMTMwLjQ4M1pNNjkuOTE1OCA0My41NTQ1TDY5Ljg1MDUgMEg2MS4wMTA3VjE1LjA5OTdDNTguMTY3NCAxMi43OTA2IDU0LjU2NjggMTEuNDE5OSA1MC41ODc2IDExLjQxOTlDNDEuNjIwNCAxMS40ODEyIDM0LjM1NzIgMTguNzE4MyAzNC40MTkyIDI3LjU4MDdDMzQuNDg0NSAzNi40NCA0MS44MDk3IDQzLjYxNTggNTAuNzc2OSA0My41NTQ1QzU0LjY5NDEgNDMuNTU0NSA1OC4yOTQ3IDQyLjExOTMgNjEuMDcyNyAzOS44NzE1VjQzLjU1NDVINjkuOTE1OFpNNTYuMzk4MSAzMy4wNjk4QzU0Ljg4MzUgMzQuNTY5NSA1Mi44NjI4IDM1LjM3ODkgNTAuNzE0OSAzNS40NDM0QzQ4LjU2NjkgMzUuNDQzNCA0Ni41NDYzIDM0LjYzMDcgNDUuMDMxNiAzMy4xMzQzQzQzLjUxMzcgMzEuNjM0NiA0Mi42OTQ0IDI5LjYzODMgNDIuNjk0NCAyNy41MTYyQzQyLjYzMjMgMjUuMzk3NCA0My41MTM3IDIzLjQ2MjMgNDQuOTY2MyAyMS45MDE0QzQ2LjQ4NDMgMjAuNDA1IDQ4LjUwNDkgMTkuNTkyMyA1MC42NTI5IDE5LjU5MjNDNTIuODAwOCAxOS41OTIzIDU0LjgyMTQgMjAuNDA1IDU2LjMzNjEgMjEuODQwMUM1Ny44NTA4IDIzLjMzNjYgNTguNjczNCAyNS4zMzI5IDU4LjczNTQgMjcuNDU1QzU4LjczNTQgMjkuNTc3MSA1Ny45MTYgMzEuNTczNCA1Ni4zOTgxIDMzLjA2OThaIiBmaWxsPSIjMUQxQTJGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMS4zNjQ1IDU2VjQ3Ljg3MjlIMjkuODMyOVY1NkgxLjM2NDVaTTAgMjguMTQxOUMwIDQ4LjY3OTEgMzEuMjAwNyA0OC42NzkxIDMxLjIwMDcgMjguMTQxOUMzMS4yMDA3IDIzLjAyMzcgMzEuMjAwNyAxMS4yOTQyIDMxLjIwMDcgMTEuMjk0MkgyMi45ODc2QzIyLjk4NzYgMTYuNzAyNiAyMi45ODc2IDIyLjExMTEgMjIuOTg3NiAyNy41MTYzQzIyLjk4NzYgMzcuOTg0OCA4LjIwOTg1IDM3Ljk4NDggOC4yMDk4NSAyNy41MTYzQzguMjA5ODUgMjIuMTExMSA4LjIwOTg1IDE2LjcwMjYgOC4yMDk4NSAxMS4yOTQySDBDMCAxMS4yOTQyIDAgMjMuMDIzNyAwIDI4LjE0MTlaIiBmaWxsPSIjMUI1QkY3Ii8+Cjwvc3ZnPgo="
              alt="sos!"
            />
          </a>

          <ul className="list__items">
            <li className={activeItem === 1 ? "active" : ""}>
              <a href="#directions" onClick={() => handleItemClick(1)}>
                Directions
              </a>
            </li>
            <li className={activeItem === 2 ? "active" : ""}>
              <a href="#command" onClick={() => handleItemClick(2)}>
                Command
              </a>
            </li>
            <li className={activeItem === 3 ? "active" : ""}>
              <a href="#clients" onClick={() => handleItemClick(3)}>
                Clients
              </a>
            </li>
            <Dropdown overlay={<Menu items={items} />}>
              <a onClick={(e) => e.preventDefault()}>
                <Space className="list__items__dropdown">
                  Services
                  <DownOutlined className="down__icon" />
                </Space>
              </a>
            </Dropdown>
            <li className={activeItem === 4 ? "active" : ""}>
              <a href="#tools" onClick={() => handleItemClick(4)}>
                Tools
              </a>
            </li>
            <Dropdown overlay={<Menu items={itemsPortfolio} />}>
              <a onClick={(e) => e.preventDefault()}>
                <Space className="list__items__dropdown">
                  Portfolio
                  <DownOutlined className="down__icon" />
                </Space>
              </a>
            </Dropdown>
            <Dropdown overlay={<Menu items={itemsLanguages} />}>
              <a onClick={(e) => e.preventDefault()}>
                <Space className="list__items__dropdown">
                  Language
                  <DownOutlined className="down__icon" />
                </Space>
              </a>
            </Dropdown>
            <div className="btn">
              <Button
                className="btn__contact"
                style={{
                  border: "none",
                  background: "var(--primary)",
                  padding: "20px",
                }}>
                <a
                  href="#contact"
                  style={{
                    fontSize: "14px",
                    lineHeight: "20px",
                    fontWeight: "700",
                    color: "var(--white)",
                    transform: "translateZ(1000px)",
                    textDecoration: "none",
                  }}>
                  Contact
                </a>
              </Button>

              <Drawer
                title={
                  <img
                    className="img__draw"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTY4IiBoZWlnaHQ9IjU2IiB2aWV3Qm94PSIwIDAgMTY4IDU2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2MS40MzIgNDIuNjE5MkMxNjUuNTg0IDQxLjIwMzQgMTY4IDM4LjE4OCAxNjggMzMuNzU2N0MxNjggMzEuNTczNCAxNjcuMjQzIDI5LjU3NzEgMTY1Ljc5IDI3Ljg5MzZDMTYzLjY0MiAyNS4zOTc0IDE2MC4wNDEgMjMuODM2NCAxNTUuMjQzIDIzLjMzNjZDMTUzLjYwNCAyMy4xMzM0IDE0OS40OTQgMjIuNjEwOSAxNDkuNDk0IDIwLjM0MDVDMTQ5LjQ5NCAxNy44MjQ5IDE1Ny42NDkgMTcuMTYwNiAxNTkuNzkgMjAuMDMwOUMxNjAuMzQ4IDIwLjc4ODggMTYwLjM1OCAyMS43MDE1IDE2MC4zNTggMjIuNTg4M0gxNjhDMTY4IDIwLjE5MjEgMTY3LjU4OSAxNy45NzAxIDE2Ni4yMzEgMTUuOTEyNUMxNjQuNjUxIDEzLjQ3NzUgMTYxLjM2NyAxMC42MDcyIDE1NC43OTkgMTAuNjA3MkMxNDkuODExIDEwLjYwNzIgMTQ2LjE0OCAxMS45MTY2IDE0My44NzMgMTQuNDc3M0MxNDIuNzk5IDE1LjY2MDkgMTQxLjYwMSAxNy43MjE3IDE0MS42MDEgMjAuNzE0NkMxNDEuNjAxIDIyLjk2MjUgMTQyLjM1OCAyNC44OTc1IDE0My44NzMgMjYuNTgxQzE0NC45NDcgMjcuNzAzMyAxNDYuMzM4IDI4LjY0MTggMTQ4LjA0MiAyOS4zMjU1QzE0OS43NDYgMzAuMDc2OSAxNTEuODk0IDMwLjU3MzYgMTU0LjM1OCAzMC44MjUyQzE1Ni41MDYgMzEuMDczNSAxNjAuMTY5IDMxLjc2MDQgMTYwLjE2OSAzMy43NTY3QzE2MC4xNjkgMzQuMTMwOCAxNjAuMDQxIDM0Ljc1NjUgMTU5LjAyOSAzNS4yNTMyQzE1Ni45NjYgMzYuMzQzMiAxNTEuMzI2IDM2LjQxNzQgMTQ5LjkzNSAzNC4xMzA4QzE0OS4zNzMgMzMuMjQzOSAxNDkuMjQzIDMyLjEwNTUgMTQ5LjI0MyAzMS4wNzM1TDE0MS42MDEgMzAuOTUwOUMxNDEuNjAxIDM2LjM0IDE0My41NSA0MC42MjI5IDE0OC45MjYgNDIuNTU0N0MxNTIuNDcxIDQzLjk4MzQgMTU3Ljg0MSA0My43OTk2IDE2MS40MzIgNDIuNjE5MlpNODQuNzI2MiAxMS45MzZDNzYuMDM5NyAxNC4xNDg0IDcwLjc3NDMgMjIuOTE0MSA3My4wMTY5IDMxLjQ5MjdDNzUuMjU2MyA0MC4wNzE0IDg0LjEyNTUgNDUuMjczNCA5Mi44MTIgNDMuMDYxQzk5LjY1NzMgNDEuMzAzNCAxMDIuNDI5IDM3LjU5NDYgMTA0LjQ2MiAzMS43NTA3TDk1Ljg3MDcgMzEuMjQxMkM5NC42NDY2IDMzLjI1NjkgOTMuMDc2NCAzNC41NjMgOTAuNzU1NSAzNS4yMDhDODcuNjU0MyAzNS45NzU2IDg0LjAwNDggMzQuNzg1NSA4Mi4yMjI0IDMyLjEwODdMMTA1LjI3MiAyNi40NjgxQzEwNC4yNDcgMTYuNzE4NyA5NC40ODY2IDkuNDQ2MjEgODQuNzI2MiAxMS45MzZaTTkyLjg2NDIgMjAuNjYzQzkzLjc5NzggMjEuMjY5MyA5NC42MjM3IDIxLjk2NTkgOTUuMjM3NCAyMi44NDMxTDgwLjg0MTYgMjYuNDAzNkM4MC45NjI0IDI1LjM0NTggODEuMzYwNiAyNC4zNDYgODEuODUwMyAyMy40NTI3Qzg0LjEwNiAxOS43MzQyIDg5LjA3NDMgMTguNTI0OCA5Mi44NjQyIDIwLjY2M1pNMTMwLjQ4MyAxMS40MTk5TDEyMi4yNzMgMjkuMzlMMTEzLjQzIDExLjQxOTlIMTAzLjEzN0wxMTguOTI3IDQzLjU1NDVIMTI1LjYyMkwxNDAuNzE2IDExLjQxOTlIMTMwLjQ4M1pNNjkuOTE1OCA0My41NTQ1TDY5Ljg1MDUgMEg2MS4wMTA3VjE1LjA5OTdDNTguMTY3NCAxMi43OTA2IDU0LjU2NjggMTEuNDE5OSA1MC41ODc2IDExLjQxOTlDNDEuNjIwNCAxMS40ODEyIDM0LjM1NzIgMTguNzE4MyAzNC40MTkyIDI3LjU4MDdDMzQuNDg0NSAzNi40NCA0MS44MDk3IDQzLjYxNTggNTAuNzc2OSA0My41NTQ1QzU0LjY5NDEgNDMuNTU0NSA1OC4yOTQ3IDQyLjExOTMgNjEuMDcyNyAzOS44NzE1VjQzLjU1NDVINjkuOTE1OFpNNTYuMzk4MSAzMy4wNjk4QzU0Ljg4MzUgMzQuNTY5NSA1Mi44NjI4IDM1LjM3ODkgNTAuNzE0OSAzNS40NDM0QzQ4LjU2NjkgMzUuNDQzNCA0Ni41NDYzIDM0LjYzMDcgNDUuMDMxNiAzMy4xMzQzQzQzLjUxMzcgMzEuNjM0NiA0Mi42OTQ0IDI5LjYzODMgNDIuNjk0NCAyNy41MTYyQzQyLjYzMjMgMjUuMzk3NCA0My41MTM3IDIzLjQ2MjMgNDQuOTY2MyAyMS45MDE0QzQ2LjQ4NDMgMjAuNDA1IDQ4LjUwNDkgMTkuNTkyMyA1MC42NTI5IDE5LjU5MjNDNTIuODAwOCAxOS41OTIzIDU0LjgyMTQgMjAuNDA1IDU2LjMzNjEgMjEuODQwMUM1Ny44NTA4IDIzLjMzNjYgNTguNjczNCAyNS4zMzI5IDU4LjczNTQgMjcuNDU1QzU4LjczNTQgMjkuNTc3MSA1Ny45MTYgMzEuNTczNCA1Ni4zOTgxIDMzLjA2OThaIiBmaWxsPSIjMUQxQTJGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMS4zNjQ1IDU2VjQ3Ljg3MjlIMjkuODMyOVY1NkgxLjM2NDVaTTAgMjguMTQxOUMwIDQ4LjY3OTEgMzEuMjAwNyA0OC42NzkxIDMxLjIwMDcgMjguMTQxOUMzMS4yMDA3IDIzLjAyMzcgMzEuMjAwNyAxMS4yOTQyIDMxLjIwMDcgMTEuMjk0MkgyMi45ODc2QzIyLjk4NzYgMTYuNzAyNiAyMi45ODc2IDIyLjExMTEgMjIuOTg3NiAyNy41MTYzQzIyLjk4NzYgMzcuOTg0OCA4LjIwOTg1IDM3Ljk4NDggOC4yMDk4NSAyNy41MTYzQzguMjA5ODUgMjIuMTExMSA4LjIwOTg1IDE2LjcwMjYgOC4yMDk4NSAxMS4yOTQySDBDMCAxMS4yOTQyIDAgMjMuMDIzNyAwIDI4LjE0MTlaIiBmaWxsPSIjMUI1QkY3Ii8+Cjwvc3ZnPgo="
                    alt="sos!"
                    style={{ width: "96px", margin: "0" }}
                  />
                }
                width="100%"
                placement="right"
                onClose={onClose}
                open={open}>
                <div className="flex__draw">
                  <a
                    href="#mobile"
                    className="text__draw"
                    onClick={handleLinkClick}>
                    Services
                  </a>
                  <a
                    href="#clients"
                    className="text__draw"
                    onClick={handleLinkClick}>
                    Clients
                  </a>
                  <a
                    href="#team"
                    className="text__draw"
                    onClick={handleLinkClick}>
                    Command
                  </a>
                  <Button type="primary" className="btn__draw">
                    <a href="#contact"> Contact</a>
                  </Button>
                  <div className="social__media__drawer">
                    <Button type="primary" shape="circle">
                      <IoLogoInstagram />
                    </Button>
                    <Button type="primary" shape="circle">
                      <TfiTwitter />
                    </Button>
                    <Button type="primary" shape="circle">
                      <SlSocialYoutube />
                    </Button>
                  </div>
                </div>
              </Drawer>
            </div>
          </ul>
          <span className="menu__icon" onClick={showDrawer}>
            <IoMenuOutline />
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
