import React, { Component,useState,useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import classes from "./testimonials.module.css"
import { CardImg } from "reactstrap";
import { motion, useAnimation } from "framer-motion";
import Image from 'react-bootstrap/Image'
import { useInView } from "react-intersection-observer";
export default function Testimonials(){
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
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
const data=[
{
src:"https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fG1lbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
name:"ABCDEF",
content:"jffi efuer fe0g u8eug 0ue0 gu0eug0u et0g u0etu g09et09g 9eti 9eti9gvi et-9gvi9-eti 9gv-dti bg[odtei gv[o teibgv[-o idt[ob idt[b idt",

},
{
src:"https://plus.unsplash.com/premium_photo-1661721899560-39022c0e217c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
name:"ABCDEF",
content:"jffi efuer fe0g u8eug 0ue0 gu0eug0u et0g u0etu g09et09g 9eti 9eti9gvi et-9gvi9-eti 9gv-dti bg[odtei gv[o teibgv[-o idt[ob idt[b idt",

},
{
src:"https://plus.unsplash.com/premium_photo-1661721899560-39022c0e217c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
name:"ABCDEF",
content:"jffi efuer fe0g u8eug 0ue0 gu0eug0u et0g u0etu g09et09g 9eti 9eti9gvi et-9gvi9-eti 9gv-dti bg[odtei gv[o teibgv[-o idt[ob idt[b idt",

},
{
src:"https://plus.unsplash.com/premium_photo-1661721899560-39022c0e217c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
name:"ABCDEF",
content:"jffi efuer fe0g u8eug 0ue0 gu0eug0u et0g u0etu g09et09g 9eti 9eti9gvi et-9gvi9-eti 9gv-dti bg[odtei gv[o teibgv[-o idt[ob idt[b idt",

},


];
    return (
      <div className="container w-75 my-5" id="Testimonials">
           <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
        <h1 className="title d-flex justify-content-center">Testimonials</h1>
        <div className="container py-5 pb-5"  style={{backgroundColor:"rgb(157 157 157 / 72%)",borderRadius:"2.4rem"}}>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
        // showIndicators={false}
        useKeyboardArrows={true}
      >
        {data.map((e,i)=>{
        return(
            <>
              <div>
              {/* <img  className="img-fluid rounded-circle shadow-lg"
               style={{ width: "15rem" }}
        src={e.src}
      /> */}
              <Image 
               roundedCircle={true}
               style={{width:"12rem",height:"12rem"}}
        src={e.src}
      />
          <div className={classes.myCarousel}>
            <h3>{e.name}</h3>
            <p>
              {e.content}
            </p>
          </div>
        </div>

            </>
        )
})}
      


       
      </Carousel>
      </div>
      </motion.div>
      </div>
    );
}
