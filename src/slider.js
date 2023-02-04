import React, { Component, useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import classes from "./testimonials.module.css"
import { CardImg } from "reactstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function Slider() {
  const data = [
    {
      src: "https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "ABCDEF",
      content:
        "jffi efuer fe0g u8eug 0ue0 gu0eug0u et0g u0etu g09et09g 9eti 9eti9gvi et-9gvi9-eti 9gv-dti bg[odtei gv[o teibgv[-o idt[ob idt[b idt",
    },
    {
      src: "./bgTree.jpg",
      name: "ABCDEF",
      content:
        "jffi efuer fe0g u8eug 0ue0 gu0eug0u et0g u0etu g09et09g 9eti 9eti9gvi et-9gvi9-eti 9gv-dti bg[odtei gv[o teibgv[-o idt[ob idt[b idt",
    },
    {
      src: "./bgTree.jpg",
      name: "ABCDEF",
      content:
        "jffi efuer fe0g u8eug 0ue0 gu0eug0u et0g u0etu g09et09g 9eti 9eti9gvi et-9gvi9-eti 9gv-dti bg[odtei gv[o teibgv[-o idt[ob idt[b idt",
    },
    {
      src: "./bgTree.jpg",
      name: "ABCDEF",
      content:
        "jffi efuer fe0g u8eug 0ue0 gu0eug0u et0g u0etu g09et09g 9eti 9eti9gvi et-9gvi9-eti 9gv-dti bg[odtei gv[o teibgv[-o idt[ob idt[b idt",
    },
    {
      src: "./bgTree.jpg",
      name: "ABCDEF",
      content:
        "jffi efuer fe0g u8eug 0ue0 gu0eug0u et0g u0etu g09et09g 9eti 9eti9gvi et-9gvi9-eti 9gv-dti bg[odtei gv[o teibgv[-o idt[ob idt[b idt",
    },
  ];

  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const [iconTabs, setIconsTabs] = React.useState(1);
  const [textTabs, setTextTabs] = React.useState(4);

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <>
      <div className="container my-2" id="Gallery">
        <motion.div
          className="box"
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        >
          <h1 className="title">Gallery</h1>

          <Carousel>
            {/* {data.map((e,i)=>{
            console.log(e.name);
            return(
                <>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("./bgTree.jpg")}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

                </>
            )
        })}; */}
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>ASDFGHJKS</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Ffmktuktuk</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>u,tilyilyil</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>yjuryjrik</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </motion.div>
      </div>
    </>
  );
}
