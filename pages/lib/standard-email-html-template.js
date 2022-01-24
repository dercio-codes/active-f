export const format_email = (name, surname , email, number, reference)=>{
         
       return `
       <div style='padding: 20px; font-family: Arial, Helvetica, sans-serif ; color:#333 ; background:#eee; border:1px #111; width: 650px; max-width: 700px; margin:auto'>
       <h3 style = 'border-radius: 5px ; background: #fff; padding: 20px;  border: 1px #ddd solid; text-align: center;'>The Active Foundation Trust | Volunteer Request</h3>

       <div style = 'background: #fff; padding: 20px;  border: 1px #ddd solid; margin-bottom:20px ;max-width:900px; margin:auto; margin-bottom: 30px;'>
           <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                   <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Name : </div>
                   <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${name} </div>
           </div>

           <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
           <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Name : </div>
           <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${surname} </div>
   </div>

           <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                   <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Email : </div>
                   <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${email} </div>
           </div>

           <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                   <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Number : </div>
                   <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${number} </div>
           </div>

           <div  style='display: flex; margin-bottom: 20px; align-items: baseline;'>
                   <div style='font-weight: 700; background: #eee; padding: 10px; min-width: 80px; margin-right: 20px'>Message : </div>
                   <div style=' background: rgba(0,0,0,.02); padding: 10px;' > ${reference} </div>
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
       </footer>        
               
   </div>

       `
}