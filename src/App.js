// import logo from './logo.svg';
// import './App.css';
import React, {useState, useRef} from 'react';
import {Container, Card, CardContent, makeStyles, Grid, Button} from '@material-ui/core';
import QRCode from 'qrcode';
import QrReader from 'react-qr-reader';
import {checkServices} from "./_services";
import FullPageLoader from "./_components/FullPageLoader/FullPageLoader";
function App() {
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [scanResultFile, setScanResultFile] = useState('');
  const [scanResultWebCam, setScanResultWebCam] =  useState('');
  const [scan, setscan] = useState(false);
  const [result, setresult] = useState(null);
  const [loading, setloading] = useState(false);
  const classes = useStyles();
  const qrRef = useRef(null);


  const generateQrCode = async () => {
    try {
          const response = await QRCode.toDataURL(text);
          setImageUrl(response);
    }catch (error) {
      console.log(error);
    }
  }
  const handleErrorFile = (error) => {
    console.log(error);
  }
  const handleScanFile = (result) => {
      if (result) {
          // setScanResultFile(result);
          checkServices.check(result).then(ret=>{
            console.log("Resultat",ret);
          }).catch(error=>{
            console.log("Erreur : ",error);
          })
      }
  }
  const onScanFile = () => {
    qrRef.current.openImageDialog();
  }
  const handleErrorWebCam = (error) => {
    console.log(error);
  }
  const handleScanWebCam = (result) => {
    // if (result){
    //     setScanResultWebCam(result);
    // }
    if (result) {
      setloading(true);
      checkServices.check(result).then(ret=>{
        setscan(false);
        setresult(ret.data);
        setloading(false);
      }).catch(error=>{
        setloading(false);
        console.log("Erreur : ",error);
      })
  }
   }
  const  handleScan = (decision)=>{
    setscan(decision);
  }
  return (
    <Container className={classes.conatiner}>
          <Card>
              <h2 className={classes.title}>Generate Download & Scan QR Code with React js</h2>
              <CardContent>
              <Button className={classes.btn} variant="contained" 
                            color="primary" onClick={handleScan.bind(this,true)}>Scan Now</Button>
                  <Grid container spacing={2}>
                      {/* <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                          <TextField label="Enter Text Here" onChange={(e) => setText(e.target.value)}/>
                          <Button className={classes.btn} variant="contained" 
                            color="primary" onClick={() => generateQrCode()}>Generate</Button>
                            <br/>
                            <br/>
                            <br/>
                            {imageUrl ? (
                              <a href={imageUrl} download>
                                  <img src={imageUrl} alt="img"/>
                              </a>) : null}
                      </Grid> */}
                      {/* <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                        <Button className={classes.btn} variant="contained" color="secondary" onClick={onScanFile}>Scan Qr Code</Button>
                        <QrReader
                          ref={qrRef}
                          delay={300}
                          style={{width: '100%'}}
                          onError={handleErrorFile}
                          onScan={handleScanFile}
                          legacyMode
                        />
                        <h3>Scanned Code: {scanResultFile}</h3>
                      </Grid> */}
                      {result===true ? (
                        <h1>Good </h1>
                      ) : (

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
                         <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
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
export default App;
