export const format_email = (applicationContent) => {
  return `
  <div style='padding: 20px; font-family: Arial, Helvetica, sans-serif ; color:#333 ; background:#eee; border:1px #111; width: 650px; max-width: 700px; margin:auto'>
  <h3 style = 'border-radius: 5px ; background: #fff; padding: 20px;  border: 1px #ddd solid; text-align: center;'>The Active Foundation Trust | Year of My Life A
  pplication</h3>
  
  
  <div style = 'background: #fff; padding: 20px;  border: 1px #ddd solid; margin-bottom:20px ;max-width:900px; margin:auto; margin-bottom: 30px;'>
     <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
             <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Title : </div>
             <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${applicationContent.title} </div>
     </div>
  
     
     <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
     <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>First Name : </div>
     <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${applicationContent.firstName} </div>
     </div>
     
     <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
     <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Preffered Name : </div>
     <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${applicationContent.prefferedName} </div>
     </div>
     
     
     <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
     <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Email : </div>
     <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${applicationContent.email} </div>
     </div>
     <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
     <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Surname : </div>
     <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${applicationContent.surname} </div>
     </div>
     
     <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
     <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Date of Birth : </div>
     <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${applicationContent.dob} </div>
     </div>
     
     <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
     <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>ID : </div>
     <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${applicationContent.id} </div>
     </div>
     
     <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
     <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Address : </div>
     <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${applicationContent.address} </div>
     </div>
     
     <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
     <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>City : </div>
     <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${applicationContent.city} </div>
     </div>
     
     <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
     <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Area Code : </div>
     <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${applicationContent.code} </div>
     </div>
     
     
     <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
     <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Phone Number : </div>
     <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${phoneNumber} </div>
     </div>
     
     <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
     
     <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Telephone Number : </div>
     <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${applicationContent.telephoneNumber} </div>
     </div>
     
     <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
     <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Activity : </div>
             <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${applicationContent.activity} </div>
             </div>
     
     <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
             <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Member : </div>
             <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${applicationContent.member} </div>
     </div> 

        <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
        <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Graphic Design : </div>
        <div style=' background: rgba(0,0,0,.02); padding: 10px;' >
                        <input type='checkbox' value=${applicationContent.graphicDesign}/>
                </div>
                </div>
        
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Film Arts : </div>
                        <div style=' background: rgba(0,0,0,.02); padding: 10px;' >
                        <input type='checkbox' value=${applicationContent.filmArts}/>
                        </div>
                </div>

                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Film Arts : </div>
                        <div style=' background: rgba(0,0,0,.02); padding: 10px;' >
                        <input type='checkbox' value=${applicationContent.soundEngineering}/>
                        </div>
                </div>

                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Administration: </div>
                        <div style=' background: rgba(0,0,0,.02); padding: 10px;' >
                        <input type='checkbox' value=${applicationContent.administration}/>
                        </div>
                </div>

                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Film Arts : </div>
                        <div style=' background: rgba(0,0,0,.02); padding: 10px;' >
                        <input type='checkbox' value=${applicationContent.filmArts}/>
                        </div>
                </div>

                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Finance : </div>
                        <div style=' background: rgba(0,0,0,.02); padding: 10px;' >
                        <input type='checkbox' value=${applicationContent.finance}/>
                        </div>
                </div>

                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Information Technology : </div>
                        <div style=' background: rgba(0,0,0,.02); padding: 10px;' >
                        <input type='checkbox' value=${applicationContent.informationTechnology}/>
                        </div>
                </div>
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>

                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Disability? : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${applicationContent.disability} </div>
                </div>
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Gender : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${applicationContent.gender} </div>
                </div>
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Allergy : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${applicationContent.allergy} </div>
                </div>
                
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Medical Aid Name : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${applicationContent.medicalAidName} </div>
                </div>
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Medical Aid Number : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${applicationContent.medicalAidNumber} </div>
                </div>
                
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Emergency Title : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${applicationContent.emergencyTitle} </div>
                </div>
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Emergency Name : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${applicationContent.emergencyFirstName} </div>
                </div>
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Emergency Person City : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${applicationContent.emergencyCity} </div>
                </div>
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Emergency Person Postal Code : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${applicationContent.emergencyPostalCode} </div>
                </div>
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Emergency Person Cell : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${applicationContent.emergencyCell} </div>
                </div>
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Emergency Person Home Number : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${applicationContent.emergencyHomeNumber} </div>
                </div>
                
                </div>
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Emergency Person Office Contact : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${applicationContent.emergencyOfficeContact} </div>
                </div>
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Emergency Person Relationship : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${applicationContent.emergencyRelationship} </div>
                </div>
                
                
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='height:2px; width:90%; background: #eee '>
                
                </div>
                </div>
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>School : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${applicationContent.school} </div>
                </div>
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Town : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${applicationContent.town} </div>
                </div>
                
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Final School Year : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${applicationContent.finalSchoolYear} </div>
                </div>
                
                <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Completed Grade : </div>
                <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${applicationContent.completedGrade} </div>
                </div>


        
        </div>
        


        title,firstName, surname , prefferedName , email, dob , id , address , city , code , phoneNumber , telephoneNumber , gender , activity , member , disability , allergy , aid , medicalAidName , medicalAidNumber , emergencyTitle , emergencySurname , emergencyFirstName , emergencyCity , emergencyPostalCode , emergencyCell , emergencyHomeNumber , emergencyHomeNumber , emergencyOfficeContact , emergencyRelationship , school , town , finalSchoolYear ,completedGrade

        
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
    </footer>        
            
</div>

`;
};
















