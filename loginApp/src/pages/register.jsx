import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

export default function Register() {

  const { register, handleSubmit,watch, formState :{errors} } = useForm();
  let contra = watch("contrasena");
  let navigate = useNavigate();

    const onSubmited = async (data)=>{
    console.log("Datos del formulario");
    console.log(data);
    try {
        let respuesta = await axios.post("http://localhost/loginApi/register", {
          nombre: data.nombre,
          correo: data.correo,
          contrasena: data.contrasena
        });
        alert(respuesta.data.message)
        navigate("/Login")
        console.log("Respuesta del Servidor");
        console.log(respuesta);
    } catch (error) {
      console.log(error)
    } 

  };

  return (
    <>
    <div className="containet">
        <div className="row justify-content-center ">
            <div className="col-sm-8">
                <h1 className="text-center text-primary my-5">Formulario de Registro</h1>
            </div>
            <div className="col-sm-8">
                <form onSubmit={handleSubmit(onSubmited)} className='bg-info-subtle p-4 rounded-3'>
                  <div className="mb-3">
                        <label  className="form-label">Usuario</label>
                        <input type="text" {...register("nombre", {required : true})} className="form-control"/>
                        {errors.nombre && <p className='text-danger'>Debes escribir un Nombre de usuario</p>}
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Email address</label>
                        <input type="email" {...register("correo", {required : true})} className="form-control" />
                        {errors.correo && <p className='text-danger'>Debes escribir un correo</p>}
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Password</label>
                        <input type="password" {...register("contrasena", {required : true})} className="form-control" />
                        {errors.contrasena && <p className='text-danger'>Debes escribir una contraseña</p>}
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Confirmar Password</label>
                        <input type="password" {...register("confirmar_contrasena", {required : "Por favor digita una contraseña",
                          validate: (value)=> value  == contra || "Las contraseñas no Coinciden"} )}
                          className="form-control" />
                        {errors.confirmar_contrasena && <p className='text-danger'>{errors.confirmar_contrasena.message}</p>}
                    </div>
                    <button type="submit"  className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
    
    </>
  )
}
