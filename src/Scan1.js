import React, {useState} from 'react';
import {Container, Card, CardContent, makeStyles, Grid, Button,Avatar} from '@material-ui/core';
import QrReader from 'react-qr-reader';
import {checkServices} from "./_services";
import FullPageLoader from "./_components/FullPageLoader/FullPageLoader";
import imageLogo from "./logochandelier.jpg";
import imageValid from "./valid.png";
import imageNotValid from "./notvalid.jpeg"; 
function Scan1() {
  const [scan, setscan] = useState(false);
  const [result, setresult] = useState(null);
  const [loading, setloading] = useState(false);
  const classes = useStyles();

  const handleErrorWebCam = (error) => {
    console.log(error);
  }
  const handleScanWebCam = (result) => {
   
    if (result) {
      const valeur = result.split("https://miraclekasi.github.io/chandelier/#")[1];
      //console.log("Plit result = ",valeur);
      setloading(true);
      setscan(false);
      checkServices.check(valeur).then(ret=>{
        //console.log("Return result : ",ret);
        setresult(ret.data);
        setloading(false);
      }).catch(error=>{
        setloading(false);
        alert("Erreur");
      })
  }
   }
  const  handleScan = (decision)=>{
    setresult(null);
    setscan(decision);
  }
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {scan ===false && result===null && (
      <button className="bg-gradient-to-r from-gray-900 to-teal-900 w-64 h-64 p-2 mb-4 rounded-full text-teal-100 font-bold text-lg hover:text-orange-600" onClick={handleScan.bind(this,true)}>Scan now</button>
      )}

                    {result===true && (
                   <>
                        <div className="w-full mb-4 flex justify-between items-center">
                          <div className="mx-4">
                        <button className="bg-gradient-to-r from-gray-900 to-teal-900 text-teal-100 px-8 py-4 rounded-lg text-lg font-bold" onClick={handleScan.bind(this,true)}>Scan now</button>
                        </div>
                        <div className="mx-4">
                        <button className="bg-gradient-to-r from-red-900 to-red-500 text-teal-100 px-8 py-4 rounded-lg text-lg font-bold">Set Enter</button>
                        </div>
                      </div>
                        <Avatar alt="Logo" src={imageValid} className={classes.large}/>
                        </>
                      
                      )}

                      {result ===false && result!==null && (
                        <>
                        <div className="w-full mb-4 flex justify-center items-center">
                      <button className="bg-gradient-to-r from-gray-900 to-teal-900 text-teal-100 px-8 py-4 rounded-lg text-lg font-bold" onClick={handleScan.bind(this,true)}>Scan now</button>
                      </div>
                          <Avatar alt="Logo" src={imageNotValid} className={classes.large}/>
                          </>
                        )}
        {scan && (
       <Container className={classes.conatiner}>
           <Card>
              <CardContent>
               
                  <Grid container spacing={2} justify="center"
                      alignItems="center">
                     
                    
                          
                      <Grid item xl={4} lg={4} md={6} sm={12} xs={12}
                      direction="row"
                      justify="center"
                      alignItems="center" className=" flex flex-col justify-center items-center">
                         <h3 className="text-sm text-gray-900">Qr Code Scan by Web Cam</h3>
                         <QrReader
                         delay={300}
                         style={{width: '100%'}}
                         onError={handleErrorWebCam}
                         onScan={handleScanWebCam}
                         />
                         
                         <div>
                           <button className="mt-4 bg-red-800 px-4 py-2 text-red-100" onClick={handleScan.bind(this,false)}>Stop scanning</button>
                         </div>
                         {/* <Button className={classes.btn+" text-red-500"} variant="contained" 
                            color="danger" onClick={handleScan.bind(this,false)}>Stop scanning</Button> */}
                      </Grid>
                     
                     
                     
                  </Grid>
              </CardContent>
          </Card>
         
   </Container>
    )}
{/*       
     <Container className={classes.conatiner}>
           <Card>
               <h2 className={classes.title}>Groupe Musical Chandelier de Gloire</h2>
                <Avatar alt="Logo" src={imageLogo} className={classes.large2}/> 
             {scan ===false && (
              <Grid className="bg-black flex flex-col justify-cent items-center" container spacing={2} justify="center"
                      alignItems="center">
              <Button  variant="contained" className={classes.btn +} 
                            color="primary" onClick={handleScan.bind(this,true)} disableElevation>Scan Now</Button>
                           </Grid>
                           )}
              <CardContent>
               
                  <Grid container spacing={2} justify="center"
                      alignItems="center">
                      {result===true && (
                        <Avatar alt="Logo" src={imageValid} className={classes.large}/>
                      )}

                      {result ===false && result!==null && (
                          <Avatar alt="Logo" src={imageNotValid} className={classes.large}/>
                        )}
                      {scan && (
                          
                      <Grid item xl={4} lg={4} md={6} sm={12} xs={12}
                      direction="row"
                      justify="center"
                      alignItems="center">
                         <h3>Qr Code Scan by Web Cam</h3>
                         <QrReader
                         delay={300}
                         style={{width: '100%'}}
                         onError={handleErrorWebCam}
                         onScan={handleScanWebCam}
                         />
                         
                         <Button className={classes.btn} variant="contained" 
                            color="danger" onClick={handleScan.bind(this,false)}>Stop scanning</Button>
                      </Grid>
                      )}
                     
                     
                  </Grid>
              </CardContent>
              
            <h2 className={classes.footer}>Copyright @ Chandelier de gloire 2021</h2> 
          </Card>
         <FullPageLoader loading={loading}/>
   </Container> */}
<FullPageLoader loading={loading}/>

   </div>
  );
}

const useStyles = makeStyles((theme) => ({
  conatiner: {
    marginTop: 10
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems:  'center',
    background: '#245478',
    color: '#fff',
    padding: 20
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems:  'center',
    background: 'black',
    color: '#fff',
    fontSize:'14px',
    padding: 20
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    margin:'auto'
  },
  large2: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin:'auto'
  },
  btn : {
    marginTop: 10,
    marginBottom: 20
  }
}));
export default Scan1;
