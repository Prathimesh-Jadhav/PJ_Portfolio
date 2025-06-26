import React from 'react';
import { useState } from 'react';
import { MdMarkEmailRead } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';


const Contact = () => {

    useGSAP(() => {
        ScrollTrigger.matchMedia({
            "(max-width: 768px)": function () {
                gsap.utils.toArray('.animate-contact').forEach((element, index) => {
                    gsap.from(
                        element,
                        {
                            opacity: 0,
                            y:100,
                            duration: 2,
                            scrollTrigger: {
                                trigger: element,
                                start: "top 97%",
                                end: "bottom 97%",
                                scrub: true,
                            },
                        }
                    );
                })
            },
            "(min-width: 769px)": function () {
                gsap.from('.animate-contact',{
                    opacity: 0,
                    y:100,
                    duration:0.7,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: '#contact',
                        start: "top 90%",
                        end: "bottom 90%",
                    }
                })
            }
        })
}, [])

const [query, setQuery] = useState({
    name: '',
    email: '',
    message: ''
})
const [loaderState, setLoaderState] = useState(false)

function handleQuery(e) {
    setQuery({
        ...query,
        [e.target.name]: e.target.value
    })
}

async function sendEmail(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9d53b087-befb-4b57-9a2a-cc72a28da790");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    setLoaderState(true)

    const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: json
    }).then((res) => res.json());

    if (res.success) {
        console.log("Success", res);
    }
    setQuery({
        name: '',
        email: '',
        message: ''
    })
    setLoaderState(false)

};

return (
    <section className='xl:px-[18rem]  max-xl:px-[4rem] max-sm:px-[1rem] mt-[50px]' id='contact'>
        <div>
            <div className='text-4xl font-bold text-center mt-16'>Contact</div>
            <div className='text-center text-gray-500 mt-2'>Mail me here</div>
        </div>

        <div className='flex gap-16 mt-16 justify-center flex-wrap'>
            <div className='max-w-[300px] '>
                <h3 className='text-2xl text-center  animate-contact'>Talk to me</h3>
                <div className='w-[80%] mt-10 shadow-lg p-2 text-white mx-auto border border-gray-600 rounded-xl animate-contact'>
                    <div className='text-xl flex justify-center '>
                        <MdMarkEmailRead />
                    </div>
                    <p className='text-lg text-center font-medium mt-1'>Email</p>
                    <p className='text-md text-center break-all  mx-8'>jadhavprathimesh2468@gmail.com</p>
                    <div className=' text-center flex gap-1 justify-center mt-6 items-center'>Write me<div><IoIosArrowRoundForward /></div> </div>
                </div>
                <div className='w-[80%] mt-10 shadow-lg  p-2 text-white mx-auto border border-gray-600 rounded-xl animate-contact'>
                    <div className='text-xl flex justify-center '>
                        <FaWhatsapp />
                    </div>
                    <p className='text-lg text-center font-medium mt-1'>Whatsapp</p>
                    <p className='text-md text-center break-all  mx-8'>123-456-78</p>
                    <div className=' text-center flex gap-1 justify-center mt-6 items-center'>Write me<div><IoIosArrowRoundForward /></div> </div>
                </div>

            </div>

            <div className='w-[400px] '>
                <h3 className='text-2xl text-center animate-contact'>Mail me ? </h3>
                <form action="" onSubmit={sendEmail}>

                    <div className='border-2 border-gray-600 w-[80%] mx-auto mt-10 rounded-lg p-2 relative animate-contact'>
                        <p className='text-sm absolute -top-3 bg-black  rounded-md px-2'>Name</p>
                        <input type="text" className='p-1 w-full bg-transparent focus:outline-none pt-2' placeholder='Enter your Name' onChange={handleQuery} value={query.name} name='name' />
                    </div>
                    <div className='border-2 border-gray-600 w-[80%] mx-auto mt-10 rounded-lg p-2 relative animate-contact'>
                        <p className='text-sm absolute bg-black -top-3  rounded-md px-2'>Mail</p>
                        <input type="text" className='p-1 w-full bg-transparent focus:outline-none pt-2' placeholder='Enter your Mail' onChange={handleQuery} value={query.email} name='email' />
                    </div>
                    <div className='border-2 border-gray-600  w-[80%] mx-auto mt-10 rounded-lg p-2 relative animate-contact'>
                        <p className='text-sm absolute bg-black -top-3  rounded-md px-2'>Message</p>
                        <textarea type="text" className='p-1 w-full bg-transparent focus:outline-none pt-2' placeholder='Message' name='message' value={query.message} onChange={handleQuery} />
                    </div>
                    <div className=' w-[80%] mx-auto mt-6 pb-16'>
                        <button className='flex gap-2 items-center py-2 px-4 bg-white text-black rounded-lg' type='submit'>
                            <div className={`${loaderState && 'hidden'}`}>
                                <div className='flex justify-center items-center'>
                                    <div>Send</div> <div className='text-[17px] ml-2'>
                                        <LuSend /></div></div>
                            </div>

                            <div className={`${!loaderState && 'hidden'}`}>

                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section >
)
}

export default Contact