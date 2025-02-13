import FileUploadButton from "./UI/Button/FileUploadButton"
import Container from "./UI/Container/Container"
import Title from "./UI/Title/Title"
import Subtitle from "./UI/Title/Subtitle"
import Form from "./UI/Form/Form"
import Input from "./UI/Input/Input"

function MainForm() {
  return (
    <Container justifyCenter flex shadow>
      <Container>
        <Title>Extração de TAGs</Title>
        <Subtitle>Selecione um arquivo para extrair</Subtitle>
      </Container>

      <Form>
        <FileUploadButton />
        <Input placeholder="Texto de teste" type="number"/>
        <Input placeholder="Texto de teste" type="number"/>
        <Input placeholder="Texto de teste" type="number"/>
        <Input placeholder="Texto de teste" type="number"/>
      </Form>
    </Container>
  );
}

export default MainForm;
