import styled from "styled-components";

const ClearFilterBtn = () => {
  return ( <>
    <Btn type='button'>
      Clear Filters
    </Btn>
  </>);
}
 
const Btn = styled.button`
font-size: 1.4rem;
font-weight: 400;
border: none;
background: none;
text-transform: capitalize;
text-decoration: underline;
cursor: pointer;
`;
export default ClearFilterBtn;