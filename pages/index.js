import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import  { useState, useEffect }  from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [iframeUrl, setIframeUrl] = useState("");

   


  useEffect(() => {
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";
    document.body.style.margin = "0";

    // Get query param "tour"
    const params = new URLSearchParams(window.location.search);
    const tour = params.get("tour");

    // Map query param to iframe links
    let url = ""; // default
    if (tour === "virtual-tour") {
      url = "https://biganto.com/tour/46401/?iframe=1";
    } else  {
      url = "https://biganto.com/tour/46741/?iframe=1";
    }

    setIframeUrl(url);
  }, []);

  
  
    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


const handleSubmit = (e) => {
  e.preventDefault();
  const subject = encodeURIComponent("New Lead from Virtual Tour");
  const body = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`
  );

  window.location.href = `mailto:kinjal@yopmail.com?subject=${subject}&body=${body}`;
};
  
  return (
     <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 9999 }}>
    
    {iframeUrl != ''?
      <iframe 
        src={iframeUrl}
        frameBorder="0"
        scrolling="no"
        width="100%"
        height="100%"
        allow="vr;xr-spatial-tracking;gyroscope;accelerometer;magnetometer;"
        title="Shree Kalash"
         allowfullscreen="allowfullscreen"
        style={{ display: "block", border: "none" }}
      ></iframe>:null}
 
          // <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 9999 }}>
          //   <iframe src="https://biganto.com/tour/46401/?iframe=1" width="100%" height="100%" frameborder="0" scrolling="0" seamless="seamless" allowfullscreen="allowfullscreen"></iframe>
          // </div>
    </div>


   
  )
}
