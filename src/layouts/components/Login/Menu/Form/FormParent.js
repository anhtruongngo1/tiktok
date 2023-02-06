import DataLogin from './Login/DataLogin';
import Form from './Register/Form';

function FormParent({ handleChildren , handleModal }) {
    return (
        <>
        {handleModal === 'LOGIN' &&
        <DataLogin handleChildren={handleChildren} /> 
        }
        {handleModal === 'REGISTER' && <Form handleChildren={handleChildren} />}
        </>
    );
}

export default FormParent;
