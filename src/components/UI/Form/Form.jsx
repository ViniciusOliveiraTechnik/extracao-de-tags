import Title from "../Title/Title";

function Form({ children }) {
  return <form className="flex flex-col gap-3 text-[16px] md:text-[20px]">{children}</form>;
}

export default Form;
