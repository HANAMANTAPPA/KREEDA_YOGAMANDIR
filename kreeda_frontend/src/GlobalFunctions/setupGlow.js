// const [animateBorder, setAnimateBorder] = useState(false);
const setupGlow = (parms, setAnimateBorder) => {
    const canva1 = document.getElementById("ourcanva"); 
    setAnimateBorder = true;
    if (parms === "green") {
        canva1.style.boxShadow = "green -4px 4px 50px 50px";
        setTimeout(() => {
          setAnimateBorder = false;
          canva1.style.boxShadow = "rgb(91, 90, 90) -4px 4px 10px 5px";
        }, 10000);
    }else{
      canva1.style.boxShadow = "red -4px 4px 50px 50px";
        setTimeout(() => {
            setAnimateBorder = false;
          canva1.style.boxShadow = "rgb(91, 90, 90) -4px 4px 10px 5px";
        }, 2000);
    }
}

export default setupGlow
