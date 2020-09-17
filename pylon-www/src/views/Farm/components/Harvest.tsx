import React from "react";
import styled from "styled-components";

import { Contract } from "web3-eth-contract";

import Button from "../../../components/Button";
import Card from "../../../components/Card";
import CardContent from "../../../components/CardContent";
import CardIcon from "../../../components/CardIcon";
import Label from "../../../components/Label";
import Value from "../../../components/Value";

import useEarnings from "../../../hooks/useEarnings";
import useReward from "../../../hooks/useReward";

import { getDisplayBalance } from "../../../utils/formatBalance";

interface HarvestProps {
  poolContract: Contract;
}

const Harvest: React.FC<HarvestProps> = ({ poolContract }) => {
  const earnings = useEarnings(poolContract);
  const { onReward } = useReward(poolContract);

  return (
    <Card>
      <CardContent>
        <StyledCardContentInner>
          <StyledCardHeader>
            <CardIcon>
              <img src="/pylon/static/media/farmer.dcde868a.png" height="60" />
            </CardIcon>
            <Value value={getDisplayBalance(earnings)} />
            <Label text="PYLONs earned" />
          </StyledCardHeader>
          <StyledCardActions>
            <Button
              onClick={onReward}
              text="Harvest"
              disabled={!earnings.toNumber()}
              // borderImage
            />
          </StyledCardActions>
        </StyledCardContentInner>
      </CardContent>
    </Card>
  );
};

const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing[6]}px;
  width: 100%;
`;

const StyledSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`;

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export default Harvest;
