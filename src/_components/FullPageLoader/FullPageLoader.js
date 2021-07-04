import React, { Component } from "react";
import LoaderGif from "./loading.gif";
//import CongoEmblem from "../../components/assets/img/congo_emblem.svg";
//import JavLogo from "../../assets/img/JavLogo.png";
import "./Loader.css";
class FullPageLoader extends Component {
  // state = {};
  render() {
    const { loading } = this.props;
    if (!loading) return null;
    return (
      <div className="loader-container">
        <div className="loader">
          <div style={{ position: 'relative', }}>
            {/* <img src={JavLogo} style={{ position: 'absolute',margin: "auto", height: 110, width: 'auto', top:20, left:23 }} alt="emblem drc" /> */}
            <img src={LoaderGif} style={{ margin: "auto",height:140, width:'auto' }} alt="Loading..." />
            
          </div>
          <p className="text-right">Chargement...</p>
        </div>
      </div>
    );
  }
}
export default FullPageLoader;
