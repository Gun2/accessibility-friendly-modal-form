import {styled} from "@mui/material";
import ApplicationButton from "../../domain/application/ApplicationButton";

const ModalFormPage = () => {

  return (
      <Box>
        <ApplicationButton/>
      </Box>
  );
};

const Box = styled('div')(() => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

export default ModalFormPage;
