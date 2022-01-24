import { format_email } from "../../lib/online-application-html-email";
import { send_email } from "../../lib/emailer";

export default async function handler(req, res) {
  // const applicationContent = {
  //   title: req.body["title"],
  //   surname: req.body["surname"],
  //   firstName: req.body["firstName"],
  //   prefferedName: req.body["prefferedName"],
  //   email: req.body["email"],
  //   dob: req.body["dob"],
  //   id: req.body["id"],
  //   address: req.body["address"],
  //   city: req.body["city"],
  //   code: req.body["code"],
  //   phoneNumber: req.body["phoneNumber"],
  //   telephoneNumber: req.body["telephoneNumber"],
  //   gender: req.body["gender"],
  //   activity: req.body["activity"],
  //   member: req.body["member"],
  //   graphicDesign: req.body["graphicDesign"],
  //   filmArts: req.body["filmArts"],
  //   soundEngineering: req.body["soundEngineering"],
  //   administration: req.body["administration"],
  //   finance: req.body["finance"],
  //   informationTechnology: req.body["informationTechnology"],
  //   disability: req.body["disability"],
  //   allergy: req.body["allergy"],
  //   aid: req.body["aid"],
  //   medicalAidName: req.body["medicalAidName"],
  //   medicalAidNumber: req.body["medicalAidNumber"],
  //   emergencyTitle: req.body["emergencyTitle"],
  //   emergencySurname: req.body["emergencySurname"],
  //   emergencyFirstName: req.body["emergencyFirstName"],
  //   emergencyCity: req.body["emergencyCity"],
  //   emergencyPostalCode: req.body["emergencyPostalCode"],
  //   emergencyCell: req.body["emergencyCell"],
  //   emergencyHomeNumber: req.body["emergencyHomeNumber"],
  //   emergencyOfficeContact: req.body["emergencyOfficeContact"],
  //   emergencyRelationship: req.body["emergencyRelationship"],
  //   school: req.body["school"],
  //   town: req.body["town"],
  //   finalSchoolYear: req.body["finalSchoolYear"],
  //   completedGrade: req.body["completedGrade"],
  // };

    const title = req.body["title"];
    const surname = req.body["surname"];
    const firstName = req.body["firstName"];
    const prefferedName = req.body["prefferedName"];
    const email = req.body["email"];
    const dob = req.body["dob"];
    const id = req.body["id"];
    const address = req.body["address"];
    const city = req.body["city"];
    const code = req.body["code"];
    const phoneNumber = req.body["phoneNumber"];
    const telephoneNumber = req.body["telephoneNumber"];
    const gender = req.body["gender"];
    const activity = req.body["activity"];
    const member = req.body["member"];
    const graphicDesign = req.body["graphicDesign"];
    const filmArts = req.body["filmArts"];
    const soundEngineering = req.body["soundEngineering"];
    const administration = req.body["administration"];
    const finance = req.body["finance"];
    const informationTechnology = req.body["informationTechnology"];
    const disability = req.body["disability"];
    const allergy = req.body["allergy"];
    const aid = req.body["aid"];
    const medicalAidName = req.body["medicalAidName"];
    const medicalAidNumber = req.body["medicalAidNumber"];
    const emergencyTitle = req.body["EmergencyTitle"];
    const emergencySurname = req.body["EmergencySurname"];
    const emergencyFirstName = req.body["EmergencyFirstName"];
    const emergencyResidence = req.body["emergencyResidence"];
    const emergencyCity = req.body["emergencyCity"];
    const emergencyPostalCode = req.body["emergencyPostalCode"];
    const emergencyCell = req.body["emergencyCell"];
    const emergencyHomeNumber = req.body["emergencyHomeNumber"];
    const emergencyOfficeContact = req.body["emergencyOfficeContact"];
    const emergencyRelationship = req.body["emergencyRelationship"];
    const school = req.body["school"];
    const town = req.body["town"];
    const finalSchoolYear = req.body["finalSchoolYear"];
    const completedGrade = req.body["completedGrade"];

// const applicationContent = {
//   title ,surname ,firstName , prefferedName ,email , dob , id , address ,city , code , phoneNumber , telephoneNumber ,gender , activity , member , graphicDesign , filmArts , soundEngineering , administration ,finance,informationTechnology,disability , allergy , aid , medicalAidName , medicalAidNumber , emergencyTitle , emergencySurname , EmergencyFirstName , emergencyCity , emergencyCell , emergencyPostalCode , emergencyHomeNumber ,emergencyOfficeContact , emergencyRelationship , school , town , finalSchoolYear ,completedGrade
// }


//   console.log(applicationContent)

  // const email_html = format_email(applicationContent.json())
  const email_html = format_email(title ,surname ,firstName , prefferedName ,email , dob , id , address 
  ,city , code , phoneNumber , telephoneNumber ,gender , activity , member , graphicDesign , filmArts , soundEngineering , administration ,finance,informationTechnology,disability , allergy , aid , medicalAidName , medicalAidNumber , emergencyTitle , emergencySurname , emergencyFirstName , emergencyResidence , emergencyCity , emergencyCell , emergencyPostalCode , emergencyHomeNumber ,emergencyOfficeContact , emergencyRelationship , school , town , finalSchoolYear ,completedGrade
  );

  try {
    await send_email("Volunteer Online | Active Foundation ", email_html);
    res.status(200).send({ message: "MAIL_SENT" });
  } catch (err) {
    console.log(err.message);
    res.status(200).send({ message: "MAIL_NOT_SENT", err: err });
  }
}
