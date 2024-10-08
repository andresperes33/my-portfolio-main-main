import styled from "styled-components";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

export const Form = styled.form<FormProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 90%;
  margin: 0 auto;
>div {
    display: flex;
    gap: 1rem;
}
`;
export const Input = styled.input`
  font-size: 19px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 1rem;
  width: 100%;
@media (max-width: 768px) {
  font-size: 15px;
}
`;

export const TextArea = styled.textarea`
  padding: 0.5rem;
  font-size: 19px;
  border: 1px solid #ccc;
  border-radius: 1rem;
  resize: none;
`;

export const Button = styled.button`
  border: none;
  width: 7rem;
  height: 2.45rem;
  font-weight: 600;
  font-size: 18px;
  margin-left: 4px;
  padding: 0.5rem;
  border-radius: 4px;
  background-color: ${(props) => props.theme.primaryColor};
  color: white;
  cursor: pointer;
&:hover {
  background-color: ${(props) => props.theme.bthov};
  transform: translateY(-3px);
}
`;
