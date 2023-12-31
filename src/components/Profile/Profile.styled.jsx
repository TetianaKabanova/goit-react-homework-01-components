import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 60px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border radius: 5px;
  background-color: rgb(248, 240, 240);
  width: 350px;
  box-shadow: 1rem 6rem 3rem rgb(65, 64, 64), -1rem -1rem 3rem rgb(82, 81, 81);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Avatar = styled.img`
  display: block;
  width: 200px;
  margin-top: 20px;
  border-radius: 5px;
`;

export const Info = styled.p`
  margin-top: 10px;
  font-size: 16px;
  line-height: 1.58;
  font-weight: 18px;
`;

export const Name = styled.p`
  font-size: 22px;
  line-height: 1.62;
  font-weight: 20px;
  color: #000000;
  margin-top: 20px;
`;

export const Text = styled.p`
  margin-top: 10px;
  font-size: 16px;
  line-height: 1.58;
  font-weight: 18px;
`;

export const StatsList = styled.ul`
  background-color: #fff;
  width: 350px;
  display: flex;
  margin: 0 auto;
  padding: 0;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const StatsItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border-top: 1px solid #101030;
  :not(:last-child) {
    border-right: 1px solid #101030;
  }
  :not(:last-child) span {
    border-right: none;
`;

export const Label = styled.span`
  display: flex;
  font-size: 16px;
  line-height: 1.62;
  text-align: center;
  justify-content: center;
`;

export const Quantity = styled.span`
  text-align: center;
  font-size: 16px;
  line-height: 1.58;
  font-weight: bold;
  margin: 10px auto;
`;
