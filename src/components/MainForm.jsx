import FileUploadButton from "./UI/Button/FileUploadButton";
import Container from "./UI/Container/Container";
import Title from "./UI/Title/Title";
import Subtitle from "./UI/Title/Subtitle";
import Form from "./UI/Form/Form";
import Input from "./UI/Input/Input";
import { useState } from "react";

function MainForm() {
  const [selectedFile, setSelectedFile] = useState();

  const handleSelectedFile = (e) => {
    setSelectedFile(e.target.files[0].name)
  }

  return (
    <Container justifyCenter flex shadow>
      <Container>
        <Title>Extração de TAGs</Title>
        <Subtitle>Selecione um arquivo para extrair</Subtitle>
      </Container>

      <Form>
        <FileUploadButton onChange={handleSelectedFile}/>
        <Input placeholder="Arquivo selecionado" type="text" value={selectedFile}/>
      </Form>
    </Container>
  );
}

export default MainForm;
