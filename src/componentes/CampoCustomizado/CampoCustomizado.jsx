import "./CampoCustomizado.css";

function CampoCustomizado({label, ...props}){ {
    return (
        <div className="campo-customizado_root">
            <label>{label}</label>
            <input 
            className="campo-customizado_input" 
            {...props} />
        </div>
    );}
}
export default CampoCustomizado;