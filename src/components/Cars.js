import React from 'react';

const Car = ({children, color, year, num}) => {
   // console.log(props);
   // condition color 
   const colorInfo = color ? (<p>Couleur: { color }</p>) : (<p>Couleur: Néant</p>);

   const voiture = num == 1 ?  ('Voiture'): ('Voitures'); // put s or not

  if(children) {
    return (
        <div style={ {backgroundColor: 'gray', width:'400px', padding:'10px', margin:'5px auto' } }>
            <p>Marque: {children}</p>  {/*shift + alt + down => duplicate line*/}
            <p>Age: {year}</p> 
            { colorInfo }
            <p>{num} {voiture}</p>
        </div>
    )
  }
  return null;
//   (
//     <div style={ {backgroundColor: 'gray', width:'400px', padding:'10px', margin:'5px auto' } }>
//         <p>Pas de voiture disponible</p>  
//     </div>
//   )
   
}

export default Car;