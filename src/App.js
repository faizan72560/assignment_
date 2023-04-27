import image from './img.png'

function App() {
  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh"
  };
  return (
    <div className="main" style={backgroundImageStyle} >
<div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh",width:"100vw"
}}>
  <div style={{height:"35vh",width:"24vw",boxShadow:'inherit',backgroundColor:"white",marginLeft:"40vw"}}>
    <div style={{display:"flex",justifyContent:"space-between",boxShadow:"0 0 50px #FFFFFF"}}>
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",height:"7vh",padding:"2px",color:"yellow"}}>Alredy Members</div>
      <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",height:"7vh",padding:"2px"}}>Need help?</div>

    </div>
    <div style={{marginTop:"20px"}}>
    <div style={{display:"flex",justifyContent:"center",marginTop:"5px"}}>
    <input type='text' style={{width:"20vw",height:"5vh"}}/>
    {/* <button></button> */}
    </div>
    <div style={{display:"flex",justifyContent:"center",marginTop:"5px"}}>
    <input placeholder='Enter Your Password' type='password' style={{width:"20vw",height:"5vh"}}/>
    </div>
    </div>

    <div style={{display:"flex",justifyContent:"center",marginTop:"4vh"}}>
      <button style={{width:"20.8vw",height:"5vh",backgroundColor:"#1A535C",color:"white"}}>SIGN IN</button>
    </div>

  </div>

      <div style={{marginLeft:"40vw",display:"flex",flexDirection:'column',justifyContent:"center",marginTop:"40px"}}>
  <div style={{color:"white"}}>Dont Have an Account Yet ? </div>
  <div style={{marginLeft:"2vw",color:"#1A535C"}}>Create an account</div>
      </div>

</div>
      

      
    </div>
  );
}

export default App;
