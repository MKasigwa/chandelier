var style = {
    backgroundColor: "#027093",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    top: "0",
    // height: "60px",
    width: "100%",
    color:'white'
}

var phantom = {
  display: 'content',
  //padding: '20px',
  //height: '60px',
  width: '100%',
}

function Header({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                <h1>CROWN Celebration</h1>
            </div>
        </div>
    )
}

export default Header