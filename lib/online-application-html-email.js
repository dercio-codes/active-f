export const format_email = (
  title,
  surname,
  firstName,
  prefferedName,
  email,
  dob,
  id,
  address,
  city,
  code,
  phoneNumber,
  telephoneNumber,
  gender,
  activity,
  member,
  graphicDesign,
  filmArts,
  soundEngineering,
  administration,
  finance,
  informationTechnology,
  disability,
  allergy,
  aid,
  medicalAidName,
  medicalAidNumber,
  emergencyTitle,
  emergencySurname,
  emergencyFirstName,
  emergencyResidence,
  emergencyCity,
  emergencyCell,
  emergencyPostalCode,
  emergencyHomeNumber,
  emergencyOfficeContact,
  emergencyRelationship,
  school,
  town,
  finalSchoolYear,
  completedGrade
) => {
  // console.log(applicationContent)
  return `
  <div style='padding: 20px; font-family: Arial, Helvetica, sans-serif ; color:#333 ; background:#eee; border:1px #111; width: 650px; max-width: 700px; margin:auto;'>
  <h3 style = 'border-radius: 5px ; background: #fff; padding: 20px;  border: 1px #ddd solid; text-align: center;'>The Active Foundation Trust | Year of My Life A
  pplication</h3>
  
  
  <div style = 'background: #fff; padding: 20px;  border: 1px #ddd solid; margin-bottom:20px ;max-width:900px; margin:auto; margin-bottom: 30px;'>

        <div style='font-size:24px; margin:20px 0;'> Personal Details </div>

     <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
             <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Title : </div>
             <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${title} </div>
     </div>
  
     
     <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
     <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>First Name : </div>
     <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${firstName} </div>
     </div>
     
     <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
     <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Preffered Name : </div>
     <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${prefferedName} </div>
     </div>
     
     
     <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
     <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Email : </div>
     <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${email} </div>
     </div>
     <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
     <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Surname : </div>
     <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${surname} </div>
     </div>
     
     <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
     <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Date of Birth : </div>
     <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${dob} </div>
     </div>
     
     <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
     <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>ID : </div>
     <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${id} </div>
     </div>
     
     <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
     <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Address : </div>
     <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${address} </div>
     </div>

     <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
     <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>City : </div>
     <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${city} </div>
     </div>

          <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
     <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>City : </div>
     <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${city} </div>
     </div>
     
     <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
     <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Area Code : </div>
     <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${code} </div>
     </div>
     
     
     <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
     <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Phone Number : </div>
     <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${phoneNumber} </div>
     </div>
     
     <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
     
     <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Telephone Number : </div>
     <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${telephoneNumber} </div>
     </div>
     
     <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
     <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Activity : </div>
             <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${activity} </div>
             </div>
     
     <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
             <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Member : </div>
             <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${member} </div>
     </div> 

     <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
     <div style='height:2px; width:100%; background: #eee '>
     
     </div>
     </div>

     <div style='font-size:24px; margin:20px 0;'> Department </div>
     

        <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
        <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Graphic Design : </div>
        <div style=' background: rgba(0,0,0,.02); padding: 10px;' >
                        ${graphicDesign}
                </div>
                </div>

                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Film Arts : </div>
                        <div style=' background: rgba(0,0,0,.02); padding: 10px;' >
                        ${soundEngineering}
                        </div>
                </div>

                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Administration: </div>
                        <div style=' background: rgba(0,0,0,.02); padding: 10px;' >
                        ${administration}
                        </div>
                </div>

                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Film Arts : </div>
                        <div style=' background: rgba(0,0,0,.02); padding: 10px;' >
                        ${filmArts}
                        </div>
                </div>

                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Finance : </div>
                        <div style=' background: rgba(0,0,0,.02); padding: 10px;' >
                        ${finance}
                        </div>
                </div>

                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Information Technology : </div>
                        <div style=' background: rgba(0,0,0,.02); padding: 10px;' >
                        ${informationTechnology}
                        </div>
                </div>

                 <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='height:2px; width:100%; background: #eee '>
                
                </div>
                </div>

                <div style='font-size:24px; margin:20px 0;'> Medical Information </div>

                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>

                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Disability? : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${disability} </div>
                </div>
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Gender : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${gender} </div>
                </div>
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Allergy : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${allergy} </div>
                </div>
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='height:2px; width:100%; background: #eee '>
                
                </div>
                </div>

                <div style='font-size:24px; margin:10px 0;'> Medical Aid Information </div>
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Medical Aid : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${aid} </div>
                </div>

                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Medical Aid Name : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${medicalAidName} </div>
                </div>
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Medical Aid Number : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${medicalAidNumber} </div>
                </div>

                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='height:2px; width:100%; background: #eee '>
                
                </div>
                </div>

                <div style='font-size:24px; margin:20px 0;'> Next of Kin Details </div>
                
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Emergency Title : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${emergencyTitle} </div>
                </div>
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Emergency Name : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${emergencyFirstName} </div>
                </div>

                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Emergency Surname : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${emergencySurname} </div>
                </div>
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Emergency Residence : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${emergencyResidence} </div>
                </div>
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Emergency Person City : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${emergencyCity} </div>
                </div>
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Emergency Person Postal Code : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${emergencyPostalCode} </div>
                </div>
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Emergency Person Cell : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${emergencyCell} </div>
                </div>
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Emergency Person Home Number : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${emergencyHomeNumber} </div>
                </div>
                
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Emergency Person Office Contact : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${emergencyOfficeContact} </div>
                </div>
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Emergency Person Relationship : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${emergencyRelationship} </div>
                </div>
                
                
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='height:2px; width:100%; background: #eee '> </div>
                
                </div>

                <div style='font-size:24px; margin:20px 0;'> Education Details </div>

                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>School : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${school} </div>
                </div>
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Town : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${town} </div>
                </div>
                
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Final School Year : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${finalSchoolYear} </div>
                </div>
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Completed Grade : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${completedGrade} </div>
                </div>

        
        </div>

        
        <footer style='background: #333; padding: 20px;'>
        <div style ='display: flex; justify-content: center;'>
        
            <div style='flex: 1;display: flex; justify-content: center;'>
            <a href='http://www.activemi.co.za/'>
                        <img src='http://www.activemi.co.za/img/logo.png'
                            alt='active media logo'
                            style='object-fit: contain; object-position: center; min-width: 70px; width: 100px'
                            />
                            </a>
            </div>

            </div> 

            <div style='flex: 1;display: flex; justify-content: center;'>
            <a href='http://activefoundation.co.za'>
                        <img src='http://activefoundation.co.za/img/active%20foundation%20logo2.png'
                            alt='active media logo'
                            style='object-fit: contain; object-position: center; min-width: 70px; width: 100px'
                            />
                            </a>
            </div>

            </div> 
            
    </footer>        
            
</div>

`;
};