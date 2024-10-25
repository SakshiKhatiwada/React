import { useForm } from "react-hook-form";

const url = ' https://formspree.io/f/mkgngaoq';


export default function ContactForm(){
    const {register, handleSubmit, watch, formState : {errors}} = useForm();

    const onSubmitFunc = async (data) => {
   try{
   const response = await axios.post(url, data);
   console.log(response.data);
   alert("form submitted successfully!");
   }catch(err){
    console.log('error:', err);
    alert("error while submitting!");
   }
    };

    console.log(watch("name"), watch("email"), watch("message"));
  return (
    <form onSubmit={handleSubmit(onSubmitFunc)} action="https://formspree.io/f/{form_id}" method="post">

        <div>
            <label htmlFor='name'>Enter your name: </label>
            <input id="name" placeholder="enter your name: " type="text" {...register("name", {required: true, minLength: 3})}/>
        </div>

        {errors.name && <p>Name must be at least 3 characters!</p>}
        
        <div>
            <label htmlFor='email'>Enter your email: </label>
            <input id="email" type='email' placeholder="enter your email: " {...register("email",{required: true})}/>
        </div>

        {errors.email && <p>Please write a valid Email!</p>}
        <div>
            <label htmlFor='message'>Enter your message: </label>
            <input id="message" type='text' placeholder="enter your message: " {...register("message",{required: true, minLength: 10})}/>
        </div>
        {errors.message && <p>Message must be at least 10 characters!</p>}

        <input type="submit" value="submit"/>

        
    </form>
  )
}



