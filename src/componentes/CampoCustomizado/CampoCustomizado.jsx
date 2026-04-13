import "./CampoCustomizado.css";

function CampoCustomizado({label, ...props}){ {
    return (
        <div className="campo-customizado_root">
           <span>{label}</span>
            <input 
            className="campo-customizado_input" 
            {...props} />
        </div>
    );}
}
export default CampoCustomizado;