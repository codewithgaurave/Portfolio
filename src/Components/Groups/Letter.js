import React, { useState } from 'react'
import stamp from "../SVGs/stamp.svg";
import hr from "../SVGs/hr.svg";
import emailjs from 'emailjs-com';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Letter() {

    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const today = new Date();
    const formatedDate = today.toLocaleDateString('en-GB', options);

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [subject,setSubject] = useState("")
    const [msg,setMsg] = useState("")
    const resetData = ()=>{
        setName("")
        setEmail("")
        setSubject("")
        setMsg("")
    }
    const sendRequest = async ()=>{
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!name || !email || !subject || !msg) {
            toast.error('All fields are required!');
            return false;
        }
        else if (!emailPattern.test(email)) {
            toast.error('Please enter a valid email address!');
            return false;
        }else{
            const formData = {name,email,subject,msg}
            await sendEmail(formData);

        }

    }

    const sendEmail = (formData) => {
        emailjs.send('service_iymoi34', 'template_8t4s0jn', formData, 'bKMCVt88iuwS-KqYT')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                toast.success("Successfully Sent")
                resetData()
            }, (err) => {
                console.log('FAILED...', err);
                toast.error("Failed To send Msg")
            });
    };
  return (
    <div className='Envelop-container position-relative'>
        <div className='triangle3'></div>
        
        <div className='d-inline-flex letter-middle position-relative'>
            <div className='triangle'>
            </div>
            <div className='letter '>
                <div className='letterHead Text_bold d-flex flex-column justify-content-center text-center'>
                    <span>Connection Request</span>
                    <img src={hr} alt="" width={"50%"} className='mx-auto' />
                </div>
                <p><span>Date :-</span>{formatedDate}</p>
                <p><span>Subject :-</span>
                <input type="text" placeholder='Enter Your Subject ' className='minimal-input' value={subject} onChange={(e)=>setSubject(e.target.value)} />
                </p>
                <p><span>Hello Gaurav,</span></p>
                <textarea placeholder="Enter your Message" className="minimal-textarea" cols={4} value={msg} onChange={(e)=>setMsg(e.target.value)}></textarea>
            </div>
            <div className='triangle2'>
            </div>            
        </div>

        <div className='rectangle d-flex flex-row p-2'>
            <p className='Text_regular'>
            To <br/>
            Gaurav Gupta    <br/>
            273302 Maharajganj UP <br/>
            INDIA
            </p>

            <div className='formElement position-relative Text_regular d-flex align-items-end flex-column ms-auto text-end justify-content-end'>
            <img src={stamp} alt="stamp" />
                <p>From</p>
                <input type="text" placeholder='Enter Your Name' className='minimal-input' value={name} onChange={(e)=>setName(e.target.value)} />
                <input type="text" placeholder='Enter Your Email' className='minimal-input' value={email} onChange={(e)=>setEmail(e.target.value)} />
                <span className='Text_bold submitBtn' onClick={sendRequest}>SEND</span>
               
            </div>
        </div>

    </div>
  )
}
