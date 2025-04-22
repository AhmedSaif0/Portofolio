import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../Assets/Contact.scss'

const Contact = () => {
  const form = useRef();
  const [sec, setSec] = useState();

  const sendEmail = (e) => {
   

    emailjs
      .sendForm('service_5wpmhke', 'template_gvdy9ug', form.current, {
        publicKey: 'gvWRM6Saw7ytQ85mD',
      })
      .then(
        () => { setSec( <div className='seccess'>
                            <h4> Thank you for reaching out to me!</h4>
                            <h4> I will get back to you as soon as possible.</h4>
                        </div>) 
                        
        
      
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className='contact' id='contact'>
      <h2 className='h2'>Contact Me</h2>
      <div className='container flex'>
        <form className="form-group"
          ref={form} onSubmit={sendEmail}
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
            placeholder="Enter email"
          >
          <label for="exampleInputEmail1">Name</label>
          <input type="text" name="user_name" className="form-control" />
          <label>Email</label>
          <input type="email" name="user_email" className="form-control" />
          <label>Message</label>
          <textarea name="message" className="form-control"/>
          <input type="submit" value="Send" className="btn btn-primary"/>
        </form>

{sec}
      
    </div>


    </section>  
  );
};

export default Contact