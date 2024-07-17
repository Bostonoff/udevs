import React from "react";
import "./contact.css";
import { Form, Input, Button } from "antd";
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  const handleFinish = (values) => {
    console.log("values = :", values);
  };

  return (
    <div className="dev__module" id="contact" data-aos="fade-up">
      <div className="container">
        <h1 className="title__modules">Contact us</h1>
        <div className="main__contact">
          <div className="contact__flex__module">
            <div className="left__flex__module">
              <h4 className="h4__contact">Leave us a message</h4>
              <Form onFinish={handleFinish} layout="vertical">
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}>
                  <Input />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                  ]}>
                  <Input type="email" />
                </Form.Item>
                <Form.Item
                  name="message"
                  label="Message"
                  rules={[
                    { required: true, message: "Please enter your message" },
                  ]}>
                  <Input.TextArea />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="btn__contact__hov">
                    Send
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <div className="right__flex__conatact__module">
              <ul className="ul__contact">
                <li className="list__contact__items">
                  <a href="https://yandex.com/map-widget/v1/?um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&source=constructor">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDE0QzEzLjY1NjkgMTQgMTUgMTIuNjU2OSAxNSAxMUMxNSA5LjM0MzE1IDEzLjY1NjkgOCAxMiA4QzEwLjM0MzEgOCA5IDkuMzQzMTUgOSAxMUM5IDEyLjY1NjkgMTAuMzQzMSAxNCAxMiAxNFoiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTcuNjU3IDE2LjY1NjdMMTMuNDE0IDIwLjg5OTdDMTMuMDM5IDIxLjI3NDMgMTIuNTMwNiAyMS40ODQ4IDEyLjAwMDUgMjEuNDg0OEMxMS40NzA0IDIxLjQ4NDggMTAuOTYyIDIxLjI3NDMgMTAuNTg3IDIwLjg5OTdMNi4zNDMgMTYuNjU2N0M1LjIyNDIyIDE1LjUzNzkgNC40NjIzNCAxNC4xMTI0IDQuMTUzNjkgMTIuNTYwNkMzLjg0NTA0IDExLjAwODcgNC4wMDM0OSA5LjQwMDIyIDQuNjA5MDEgNy45Mzg0NEM1LjIxNDUyIDYuNDc2NjUgNi4yMzk5IDUuMjI3MjUgNy41NTU0OCA0LjM0ODIxQzguODcxMDcgMy40NjkxOCAxMC40MTc4IDMgMTIgM0MxMy41ODIyIDMgMTUuMTI4OSAzLjQ2OTE4IDE2LjQ0NDUgNC4zNDgyMUMxNy43NjAxIDUuMjI3MjUgMTguNzg1NSA2LjQ3NjY1IDE5LjM5MSA3LjkzODQ0QzE5Ljk5NjUgOS40MDAyMiAyMC4xNTUgMTEuMDA4NyAxOS44NDYzIDEyLjU2MDZDMTkuNTM3NyAxNC4xMTI0IDE4Ljc3NTggMTUuNTM3OSAxNy42NTcgMTYuNjU2N1YxNi42NTY3WiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
                      alt="sos!"
                    />
                    Ташкент, Мирзо-Улугбекский район, 5-й пр. Курган, 32 адрес
                  </a>
                </li>
                <li className="list__contact__items">
                  <a href="tel:+998 33 66 00 999">
                    {" "}
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNiA0SDEwTDEyIDlMOS41IDEwLjVDMTAuNTcxIDEyLjY3MTUgMTIuMzI4NSAxNC40MjkgMTQuNSAxNS41TDE2IDEzTDIxIDE1VjE5QzIxIDE5LjUzMDQgMjAuNzg5MyAyMC4wMzkxIDIwLjQxNDIgMjAuNDE0MkMyMC4wMzkxIDIwLjc4OTMgMTkuNTMwNCAyMSAxOSAyMUMxNS4wOTkzIDIwLjc2MyAxMS40MjAyIDE5LjEwNjUgOC42NTY4MyAxNi4zNDMyQzUuODkzNSAxMy41Nzk4IDQuMjM3MDUgOS45MDA3NCA0IDZDNCA1LjQ2OTU3IDQuMjEwNzEgNC45NjA4NiA0LjU4NTc5IDQuNTg1NzlDNC45NjA4NiA0LjIxMDcxIDUuNDY5NTcgNCA2IDQiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                      alt="sos!"
                    />
                    +998 33 66 00 999
                  </a>
                </li>
                <li className="list__contact__items">
                  <a href="mailto:azizbek.b@udevs.io">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5IDVINUMzLjg5NTQzIDUgMyA1Ljg5NTQzIDMgN1YxN0MzIDE4LjEwNDYgMy44OTU0MyAxOSA1IDE5SDE5QzIwLjEwNDYgMTkgMjEgMTguMTA0NiAyMSAxN1Y3QzIxIDUuODk1NDMgMjAuMTA0NiA1IDE5IDVaIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTMgN0wxMiAxM0wyMSA3IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                      alt="sos!"
                    />
                    azizbek.b@udevs.io
                  </a>
                </li>
                <li className="list__contact__items">
                  <a href="https://t.me/azizbekbakhodirov">
                    <FaTelegramPlane />
                    t.me/azizbekbakhodirov
                  </a>
                </li>
              </ul>
              <div className="map-container">
                <iframe
                  title="Yandex Map"
                  width="100%"
                  height="200"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://yandex.com/map-widget/v1/?um=constructor%3A3d9eefa927bd54bcc9e8fa398a73c8cafb60622737263c96ad9341c32c21fa69&source=constructor"
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
