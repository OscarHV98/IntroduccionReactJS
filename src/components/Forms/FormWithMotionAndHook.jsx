import { motion } from "motion/react";
import useForm from "../Hooks/useForm";
import '../../styles/stylesLogin.css'
import { useState } from "react";
import ModalInfo from "../Modals/ModalInfo";

const FormWithMotionAndHook = ({ titleForm }) => {
    const { formData, handleChange } = useForm({
        username: '',
        email: ''
    });

    const [openModal, setOpenModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('datos: ', formData);
        setOpenModal(true);
    };

    const onCloseModalInfo = () => {
        setOpenModal(false);
    };
    

    return (
        <>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >

        <ModalInfo 
            visible={openModal} 
            message={`"Formulario Enviado!!!!" , ${formData.username} , ${formData.email}`}
            onClose={() => onCloseModalInfo()}
        />

            <form onSubmit={handleSubmit} className="form-content">
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3>{titleForm}</h3>
                </motion.div>

                

                <motion.div
                    initial={{ y: -20 }} 
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="input-content">
                        <label>
                            Username:
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: -20 }} 
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="input-content">
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <button type="submit">Enviar</button>
                </motion.div>
            </form>
        </motion.div>
        </>
    );
};

export default FormWithMotionAndHook;
