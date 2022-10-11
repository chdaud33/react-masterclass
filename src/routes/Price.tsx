import styled from 'styled-components';

const PriceWrap = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
`;

const PriceItem = styled.div`
  height: 20vh;
  border-radius: 15px;
  :nth-child(1) {
    grid-column: 1/3;
    grid-row: 1/2;
    height: 18vh;
  }
  box-shadow: rgb(10 10 10 / 10%) 0px 0.2rem 0.5rem;
  background-color: rgba(0, 0, 0, 0.5);
`;

function Price() {
  return (
    <PriceWrap>
      <PriceItem></PriceItem>
      <PriceItem></PriceItem>
      <PriceItem></PriceItem>
      <PriceItem></PriceItem>
      <PriceItem></PriceItem>
      <PriceItem></PriceItem>
      <PriceItem></PriceItem>
    </PriceWrap>
  );
}
export default Price;
