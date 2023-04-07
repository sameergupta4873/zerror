import React, { useEffect, useState } from "react";
import Menu from './components/Menu'

function Form() {
    const [show, setShow] = useState(false);
    const [name, setname] = useState(null);
    const [email, setemail] = useState(null);
    const [company, setcompany] = useState(null);
    const [country, setcountry] = useState(null);
    const [message, setmessage] = useState(null);
    const [num, setnum] = useState(null);
    const [city, setcity] = useState(null);
    const [state, setstate] = useState(null);
    const [enquiry, setenquiry] = useState(null);
    const submitHandler = async () => {
        const form = {
            name,
            company,
            city,
            state,
            country,
            enquiry,
            email,
            num,
            message
        }

        const response = fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })

        const content = (await response).json();
        console.log(content.data);
    }
    const [scrollY, setscrollY] = useState(0);
    const handleScroll = () => {
        setscrollY(window.scrollY);
      };
      
      useEffect(() => {
        window.addEventListener("scroll", handleScroll); 
        return () => window.removeEventListener("scroll", handleScroll);
      });
    return (
        <div className="h-96 w-full mb-[40rem]">
            {/* <Menu/> */}
            <div className={ scrollY <= 0 ? `h-[100vh] w-[100vw] bg-cover  bg-no-repeat bg-[url('/contact.jpg')] transition-all duration-200 delay-200` : `h-[100vh] w-[100vw] bg-cover brightness-50 bg-no-repeat bg-[url('/contact.jpg')]` }></div>
            <div className="flex absolute top-[30rem] w-[75%] h-[40rem] ml-[12.5%] mr-[12.5%] bg-white shadow-lg">
                <div className="w-[60%] p-10">
                    <div className="text-black">
                        <h1 className="text-[1.5rem]">Know More About India's Largest Spice Company</h1>
                        <div className="my-5 container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 py-3 pt-4 gap-8">
                            <input placeholder="Name*" onChange={(e)=>setname(e.target.value)} className="border border-gray-700 text-lg rounded focus:none px-4 pt-4 pb-3" />
                            <input placeholder="Company*" onChange={(e)=>setcompany(e.target.value)}  className="border border-gray-700 text-lg rounded focus:none px-4 pt-4 pb-3" />
                            <input placeholder="City*" onChange={(e)=>setcity(e.target.value)}  className="border border-gray-700 text-lg rounded focus:none px-4 pt-4 pb-3" />
                            <input placeholder="State*" onChange={(e)=>setstate(e.target.value)}  className="border border-gray-700 text-lg rounded focus:none px-4 pt-4 pb-3" />
                            <input placeholder="Country*" onChange={(e)=>setcountry(e.target.value)}  className="border border-gray-700 text-lg rounded focus:none px-4 pt-4 pb-3" />
                            <input placeholder="Enquiry Type*" onChange={(e)=>setenquiry(e.target.value)}  className="border border-gray-700 text-lg rounded focus:none px-4 pt-4 pb-3" />
                            <input placeholder="Email*" onChange={(e)=>setemail(e.target.value)}  className="border border-gray-700 text-lg rounded focus:none px-4 pt-4 pb-3" />
                            <input placeholder="Number*" onChange={(e)=>setnum(e.target.value)}  className="border border-gray-700 text-lg rounded focus:none px-4 pt-4 pb-3" />
                        </div>
                        <input placeholder="Message" onChange={(e)=>setnum(e.target.value)}  className="w-[100%] border border-gray-700 text-lg rounded focus:none px-4 pt-4 pb-3" />
                        <button onClick={submitHandler} className="mt-7 rounded text-lg bg-black text-white px-10 py-2">Submit</button>
                    </div>
                </div>
                <div className="w-[40%] bg-black p-10">
                    <div className="text-white">
                        <h1 className="text-[1.75rem] font-extrabold">Get in Touch</h1>
                        <div className="my-7">
                            <div className="flex">
                                <img alt="image" className="mt-[0rem] mr-[1rem]" src="https://www.everestfoods.com/wp-content/uploads/2021/09/pin-1.svg" />
                                <p className="text-[1.3rem] font-extrabold">Address</p>
                            </div>
                            <p className="w-[20rem] ml-[2.5rem] mt-[0.25rem] text-[1rem] text-white max-sm:text-sm max-sm:w-[13rem]">Jangal Ramnagar, Raipur, Phulawari, Amethi, UP 227405</p>
                            <div className="flex mt-[1rem]">
                                <img alt="image" className="mt-[1rem] mr-[1rem]" src="https://www.everestfoods.com/wp-content/uploads/2021/09/tel.svg" />
                                <p className="text-xl font-extrabold mt-[1rem]">Customer Care No</p>
                            </div>
                            <p className="w-[20rem] ml-[2.5rem] mt-[1rem] text-[1rem] text-white">+91 7607581221, +91 8400382790</p>
                            <div className="flex mt-[1rem]">
                                <img alt="image" className="mt-[1rem] mr-[1rem]" src="https://www.everestfoods.com/wp-content/uploads/2021/09/mail.svg" />
                                <p className="text-xl font-extrabold mt-[1rem]">Customer Care Email</p>
                            </div>
                            <p className="w-[20rem] ml-[2.5rem] mt-[1rem] text-[1.1rem] text-white">help.aadeshmasale@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
