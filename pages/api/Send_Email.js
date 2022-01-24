import { format_email } from "../../lib/standard-email-html-template";
import { send_email } from "../../lib/emailer";

export default async function handler(req, res) {

  const name = req.body['name'];
  const surname = req.body['surname'];
  const email = req.body['email'];
  const number = req.body['number'];
  const reference = req.body['reference'];

  const email_html = format_email(name, surname , email, number, reference);

  try{
       await send_email("Volunteer Online | Active Foundation " , email_html)
             res.status(200).send({ message: 'MAIL_SENT' })
  }catch(err)
  {
       console.log(err.message)
       res.status(200).send({ message: 'MAIL_NOT_SENT', err : err  })
  }


}