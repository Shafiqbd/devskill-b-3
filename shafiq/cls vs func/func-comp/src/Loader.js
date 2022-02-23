import { Bars } from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const Loader = () => (
  <LoaderArea>
    <Bars color="#00AB55" height={70} width={80} />
  </LoaderArea>
);

export default Loader;
