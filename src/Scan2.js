import React, {useState,useEffect,useCallback} from 'react';
import { withRouter } from 'react-router-dom';
import {Container, Card, CardContent, makeStyles, Grid, Button,Avatar} from '@material-ui/core';
import QrReader from 'react-qr-reader';
import {checkServices} from "./_services";
import FullPageLoader from "./_components/FullPageLoader/FullPageLoader";
import imageLogo from "./logochandelier.jpg";
import imageValid from "./valid.png";
import imageNotValid from "./notvalid.jpeg"; 
 function Scan2(props) {
    const [scan, setscan] = useState(false);
    const [result, setresult] = useState(null);
    const [loading, setloading] = useState(false);
    const classes = useStyles();
  
    const handleErrorWebCam = (error) => {
      console.log(error);
    }

    const handleScanWebCam2 = (result) => {
        // console.log(result);
         if (result) {
           const valeur = result.split("https://miraclekasi.github.io/chandelier/#")[1];
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

    const handleScanWebCam = () => {
      if (props.match.params.number) {
        setloading(true);
        setscan(false);
        checkServices.check(props.match.params.number).then(ret=>{
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

    useEffect(() => {
        handleScanWebCam(); 
    }, [])


    return (
        // <div>
        //     <h2>Scan {props.match.params.number}</h2>
        // </div>
        <Container className={classes.conatiner}>
        <Card>
              <h2 className={classes.title}>Groupe Musical Chandelier de Gloire</h2>
              <Avatar alt="Logo" src={imageLogo} className={classes.large2}/>
              {scan ===false && (
              <Grid container spacing={2} justify="center"
                      alignItems="center">
              <Button size="large" variant="contained" className={classes.btn} 
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
                         onScan={handleScanWebCam2}
                         />
                         {/* <h3>Scanned By WebCam Code: {scanResultWebCam}</h3> */}
                         <Button className={classes.btn} variant="contained" 
                            color="danger" onClick={handleScan.bind(this,false)}>Stop scanning</Button>
                      </Grid>
                      )}
                      {/* <Grid item xl={4} lg={4} md={6} sm={12} xs={12}
                      direction="row"
                      justify="center"
                      alignItems="center"> 
                      <div style={{margin:'auto'}}>
                                <Button variant="contained" className={classes.btn} 
                            color="primary" onClick={handleScan.bind(this,true)} disableElevation>Scan Now</Button>
                    </div>
                      </Grid> */}
                     
                  </Grid>
              </CardContent>
              
              <h2 className={classes.footer}>Copyright @ Chandelier de gloire 2021</h2>
          </Card>
        <FullPageLoader loading={loading}/>
  </Container>
    )
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

export default withRouter(Scan2)
