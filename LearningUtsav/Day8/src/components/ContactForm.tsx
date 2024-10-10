
const ContactForm = () => {
  return (

    <form>
        <fieldset>
            <legend>Contact Us</legend>
            <div>
            <label for="name">
                Name:
            </label>
            <input name="name" id="name" placeholder="Enter your name: "/>
            </div>

           <div>
           <label for='ph-no'>
                Phone number: 
            </label>
                <input type="tel" id='ph-no' placeholder="Enter your number:"/>
           </div>
        </fieldset>
    </form>
  )
}

export default ContactForm