import React, {useState} from 'react';
import {Container, Card, CardContent, makeStyles, Grid, Button} from '@material-ui/core';
import QrReader from 'react-qr-reader';
import {checkServices} from "./_services";
import FullPageLoader from "./_components/FullPageLoader/FullPageLoader";
function Scan1() {
  const [scan, setscan] = useState(false);
  const [result, setresult] = useState(null);
  const [loading, setloading] = useState(false);
  const classes = useStyles();

  const handleErrorWebCam = (error) => {
    console.log(error);
  }
  const handleScanWebCam = (result) => {
   // console.log(result);
    if (result) {
      const valeur = result.split("https://miraclekasi.github.io/chandelier/")[1];
      //console.log("Plit result = ",valeur);
      setloading(true);
      setscan(false);
      checkServices.check(valeur).then(ret=>{
        setresult(ret.data);
        setloading(false);
      }).catch(error=>{
        setloading(false);
        alert("Erreur");
      })
  }
   }
  const  handleScan = (decision)=>{
    result(null);
    setscan(decision);
  }
  return (
    <Container className={classes.conatiner}>
          <Card>
              <h2 className={classes.title}>Generate Download & Scan QR Code with React js</h2>
              <CardContent>
                <div style={{margin:'auto'}}>
              <Button className={classes.btn} variant="contained" 
                            color="primary" onClick={handleScan.bind(this,true)}>Scan Now</Button>
                            </div>
                  <Grid container spacing={2}>
                      {result===true && (
                        <h1>Good </h1>
                      )}

                      {result ===false && result!==null && (
                          <h1>Bad </h1>
                        )}
                      {scan && (
                      <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                         <h3>Qr Code Scan by Web Cam</h3>
                         <QrReader
                         delay={300}
                         style={{width: '100%'}}
                         onError={handleErrorWebCam}
                         onScan={handleScanWebCam}
                         />
                         {/* <h3>Scanned By WebCam Code: {scanResultWebCam}</h3> */}
                         <Button className={classes.btn} variant="contained" 
                            color="danger" onClick={handleScan.bind(this,false)}>Stop scanning</Button>
                      </Grid>
                      )}


                  </Grid>
              </CardContent>
          </Card>
          <FullPageLoader loading={loading}/>
    </Container>
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
    background: '#3f51b5',
    color: '#fff',
    padding: 20
  },
  btn : {
    marginTop: 10,
    marginBottom: 20
  }
}));
export default Scan1;
